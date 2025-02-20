import { GoogleSpreadsheet } from "google-spreadsheet"

// Helper function to handle CORS
function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Credentials", true)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  )
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

  // Initialize Google Sheets
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    })
  } catch (authError) {
    console.error("Google Sheets authentication error:", authError)
    return res.status(500).json({
      error: "Failed to authenticate with Google Sheets",
      details: authError.message,
    })
  }

  try {
    console.log("Received request:", req.body)
    const { name, email } = req.body

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" })
    }

    try {
      await doc.loadInfo()
      console.log("Google Sheets connected!")

      // Get the first sheet
      const sheet = doc.sheetsByIndex[0]

      // Add the new row
      await sheet.addRow({
        Timestamp: new Date().toISOString(),
        Name: name,
        Email: email,
      })

      console.log("Successfully added row to sheet")
      return res.status(200).json({ success: true })
    } catch (sheetError) {
      console.error("Google Sheets error:", sheetError)
      return res.status(500).json({
        error: "Failed to process request",
        details: sheetError.message,
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

