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

// Function to format the private key correctly
function getFormattedPrivateKey() {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY
  if (!privateKey) return null

  // If the private key is already properly formatted, return it
  if (privateKey.includes("-----BEGIN PRIVATE KEY-----")) {
    return privateKey.replace(/\\n/g, "\n")
  }

  // If it's not properly formatted, try to format it
  try {
    return JSON.parse(privateKey).replace(/\\n/g, "\n")
  } catch {
    // If JSON parsing fails, return the key as is with newline replacement
    return privateKey.replace(/\\n/g, "\n")
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

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  // Verify environment variables
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = getFormattedPrivateKey()
  const sheetId = process.env.GOOGLE_SHEET_ID

  if (!clientEmail || !privateKey || !sheetId) {
    console.error("Missing environment variables:", {
      hasClientEmail: !!clientEmail,
      hasPrivateKey: !!privateKey,
      hasSheetId: !!sheetId,
    })
    return res.status(500).json({
      error: "Server configuration error",
      details: "Missing required environment variables",
    })
  }

  try {
    const { name, email } = req.body

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" })
    }

    // Initialize Google Sheets
    const doc = new GoogleSpreadsheet(sheetId)

    try {
      // Authenticate with Google Sheets API
      try {
        await doc.useServiceAccountAuth({
          client_email: clientEmail,
          private_key: privateKey,
        })
      } catch (authError) {
        console.error("Google Sheets authentication error:", authError)
        return res.status(500).json({
          error: "Failed to authenticate with Google Sheets",
          details: authError.message,
        })
      }

      await doc.loadInfo()
      console.log("Google Sheets connected!")

      const sheet = doc.sheetsByIndex[0]
      await sheet.addRow({
        Timestamp: new Date().toISOString(),
        Name: name,
        Email: email,
      })

      console.log("Successfully added row to sheet")
      return res.status(200).json({ success: true })
    } catch (error) {
      console.error("Google Sheets error:", error)
      return res.status(500).json({
        error: "Failed to process request",
        details: error.message,
      })
    }
  } catch (error) {
    console.error("Error processing request:", error)
    return res.status(500).json({
      error: "Failed to add to waitlist",
      details: error.message,
    })
  }
}

