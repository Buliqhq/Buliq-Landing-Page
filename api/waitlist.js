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

function cleanPrivateKey(key) {
  if (!key) return null

  // Remove any extra quotes at the start or end
  let cleanKey = key.replace(/^["']|["']$/g, "")

  // Replace escaped newlines with actual newlines
  cleanKey = cleanKey.replace(/\\n/g, "\n")

  // Ensure the key has the correct header and footer
  if (!cleanKey.includes("-----BEGIN PRIVATE KEY-----")) {
    cleanKey = "-----BEGIN PRIVATE KEY-----\n" + cleanKey
  }
  if (!cleanKey.includes("-----END PRIVATE KEY-----")) {
    cleanKey = cleanKey + "\n-----END PRIVATE KEY-----"
  }

  return cleanKey
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

    // Get and clean credentials
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
    const privateKey = cleanPrivateKey(process.env.GOOGLE_SHEETS_PRIVATE_KEY)
    const sheetId = process.env.GOOGLE_SHEET_ID

    // Debug log (don't log the actual private key!)
    console.log("Credentials check:", {
      hasClientEmail: !!clientEmail,
      hasPrivateKey: !!privateKey,
      hasSheetId: !!sheetId,
      clientEmail: clientEmail,
      sheetId: sheetId,
      privateKeyStart: privateKey ? privateKey.substring(0, 50) + "..." : "null",
    })

    if (!clientEmail || !privateKey || !sheetId) {
      return res.status(500).json({
        error: "Server configuration error",
        details: "Missing required credentials",
        missing: {
          clientEmail: !clientEmail,
          privateKey: !privateKey,
          sheetId: !sheetId,
        },
      })
    }

    // Initialize Google Sheets
    const doc = new GoogleSpreadsheet(sheetId)

    // Authenticate with Google Sheets (do this outside the try/catch to avoid conditional hook calls)
    try {
      await doc.useServiceAccountAuth({
        client_email: clientEmail,
        private_key: privateKey,
      })
    } catch (authError) {
      console.error("Google Sheets Authentication Error:", authError)
      return res.status(500).json({
        error: "Google Sheets authentication failed",
        details: authError.message,
        type: authError.name,
      })
    }

    try {
      // Load the document and get the first sheet
      await doc.loadInfo()
      const sheet = doc.sheetsByIndex[0]

      // Add the new row
      await sheet.addRow({
        Timestamp: new Date().toISOString(),
        Name: name,
        Email: email,
      })

      return res.status(200).json({ success: true })
    } catch (error) {
      console.error("Google Sheets Error:", error)
      return res.status(500).json({
        error: "Google Sheets operation failed",
        details: error.message,
        type: error.name,
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

