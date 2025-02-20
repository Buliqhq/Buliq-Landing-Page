import { GoogleSpreadsheet } from "google-spreadsheet"

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Credentials", true)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  )
}

// Enhanced private key formatting
function formatPrivateKey(privateKey) {
  if (!privateKey) return null

  // If the key is already properly formatted with headers, just clean up newlines
  if (privateKey.includes("-----BEGIN PRIVATE KEY-----")) {
    return privateKey.replace(/\\n/g, "\n").replace(/\n\n/g, "\n") // Remove double newlines
  }

  try {
    // Try parsing if it's a JSON string
    const parsed = JSON.parse(privateKey)
    return parsed.replace(/\\n/g, "\n")
  } catch {
    // If not JSON, clean up the key and format it
    const cleaned = privateKey
      .replace(/-----(BEGIN|END) PRIVATE KEY-----/g, "")
      .replace(/\\n/g, "")
      .replace(/\n/g, "")
      .replace(/\s+/g, "")
      .trim()

    // Format with proper headers and 64-character lines
    const lines = cleaned.match(/.{1,64}/g) || []
    return ["-----BEGIN PRIVATE KEY-----", ...lines, "-----END PRIVATE KEY-----"].join("\n")
  }
}

export default async function handler(req, res) {
  // Set CORS headers
  setCorsHeaders(res)

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end()
    return
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { name, email } = req.body

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" })
    }

    // Get environment variables
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
    const privateKeyRaw = process.env.GOOGLE_SHEETS_PRIVATE_KEY
    const sheetId = process.env.GOOGLE_SHEET_ID

    // Log environment variable presence (not values)
    console.log("Environment variables check:", {
      hasClientEmail: !!clientEmail,
      hasPrivateKey: !!privateKeyRaw,
      hasSheetId: !!sheetId,
    })

    if (!clientEmail || !privateKeyRaw || !sheetId) {
      return res.status(500).json({
        error: "Server configuration error",
        details: "Missing required environment variables",
      })
    }

    // Format the private key
    const privateKey = formatPrivateKey(privateKeyRaw)

    if (!privateKey) {
      return res.status(500).json({
        error: "Server configuration error",
        details: "Invalid private key format",
      })
    }

    // Initialize Google Sheets
    const doc = new GoogleSpreadsheet(sheetId)

    // Log authentication attempt
    console.log("Attempting Google Sheets authentication...")
    try {
      await doc.useServiceAccountAuth({
        client_email: clientEmail,
        private_key: privateKey,
      })
    } catch (authSetupError) {
      console.error("Google Sheets Authentication Setup Error:", authSetupError)
      return res.status(500).json({
        error: "Failed to setup authentication with Google Sheets",
        details: authSetupError.message,
        step: "authentication_setup",
        timestamp: new Date().toISOString(),
      })
    }

    try {
      console.log("Authentication successful, loading document...")

      await doc.loadInfo()
      const sheet = doc.sheetsByIndex[0]

      console.log("Adding row to sheet...")

      await sheet.addRow({
        Timestamp: new Date().toISOString(),
        Name: name,
        Email: email,
      })

      console.log("Row added successfully")

      return res.status(200).json({ success: true })
    } catch (authError) {
      console.error("Google Sheets Error:", authError)

      // More detailed error response
      return res.status(500).json({
        error: "Failed to interact with Google Sheets",
        details: authError.message,
        step: "sheet_interaction",
        timestamp: new Date().toISOString(),
      })
    }
  } catch (error) {
    console.error("Request Error:", error)
    return res.status(500).json({
      error: "Failed to process request",
      details: error.message,
    })
  }
}

