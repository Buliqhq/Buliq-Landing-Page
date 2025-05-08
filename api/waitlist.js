import { GoogleSpreadsheet } from "google-spreadsheet"
import process from 'process'

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Credentials", true)
  res.setHeader("Access-Control-Allow-Origin", "https://buliq.xyz")
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  )
}

function cleanPrivateKey(key) {
  if (!key) return null

  let cleanKey = key.replace(/^["']|["']$/g, "")
  cleanKey = cleanKey.replace(/\\n/g, "\n")

  if (!cleanKey.includes("-----BEGIN PRIVATE KEY-----")) {
    cleanKey = "-----BEGIN PRIVATE KEY-----\n" + cleanKey
  }
  if (!cleanKey.includes("-----END PRIVATE KEY-----")) {
    cleanKey = cleanKey + "\n-----END PRIVATE KEY-----"
  }

  return cleanKey
}

export default async function handler(req, res) {
  setCorsHeaders(res)

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

    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
    const privateKey = cleanPrivateKey(process.env.GOOGLE_SHEETS_PRIVATE_KEY)
    const sheetId = process.env.GOOGLE_SHEET_ID

    if (!clientEmail || !privateKey || !sheetId) {
      return res.status(500).json({
        error: "Server configuration error",
        details: "Missing required credentials"
      })
    }

    const doc = new GoogleSpreadsheet(sheetId)

    try {
      await doc.useServiceAccountAuth({
        client_email: clientEmail,
        private_key: privateKey,
      })
    } catch (authError) {
      console.error("Google Sheets Authentication Error:", authError)
      return res.status(500).json({
        error: "Google Sheets authentication failed",
        details: authError.message
      })
    }

    try {
      await doc.loadInfo()
      const sheet = doc.sheetsByIndex[0]

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
        details: error.message
      })
    }
  } catch (error) {
    console.error("Request Error:", error)
    return res.status(500).json({
      error: "Failed to process request",
      details: error.message
    })
  }
}

