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

// Function to properly format the private key
function formatPrivateKey(key) {
  if (!key) return ""

  // Remove any existing newlines and quotes
  const cleanKey = key.replace(/\\n/g, "").replace(/\n/g, "").replace(/"/g, "").trim()

  // Split the key into 64-character chunks
  const chunks = cleanKey.match(/.{1,64}/g) || []

  // Join chunks with actual newlines
  return `-----BEGIN PRIVATE KEY-----\n${chunks.join("\n")}\n-----END PRIVATE KEY-----`
}

export default async function handler(req, res) {
  // Set CORS headers
  setCorsHeaders(res)

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end()
    return
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { name, email } = req.body

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" })
    }

    // Get and format credentials
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
    const privateKey = formatPrivateKey(process.env.GOOGLE_SHEETS_PRIVATE_KEY)
    const sheetId = process.env.GOOGLE_SHEET_ID

    // Verify credentials
    if (!clientEmail || !privateKey || !sheetId) {
      console.error("Missing credentials:", {
        hasEmail: !!clientEmail,
        hasKey: !!privateKey,
        hasSheetId: !!sheetId,
      })
      return res.status(500).json({
        error: "Server configuration error",
        details: "Missing required credentials",
      })
    }

    // Initialize Google Sheets
    const doc = new GoogleSpreadsheet(sheetId)

    try {
      // Initialize Google Sheets authentication regardless of the outcome of credential validation
      await doc.useServiceAccountAuth({
        client_email: clientEmail,
        private_key: privateKey,
      })

      await doc.loadInfo()
      const sheet = doc.sheetsByIndex[0]

      await sheet.addRow({
        Timestamp: new Date().toISOString(),
        Name: name,
        Email: email,
      })

      return res.status(200).json({ success: true })
    } catch (authError) {
      console.error("Google Sheets Error:", authError)
      return res.status(500).json({
        error: "Failed to authenticate with Google Sheets",
        details: authError.message,
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

