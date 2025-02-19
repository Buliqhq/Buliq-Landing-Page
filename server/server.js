const express = require("express")
const cors = require("cors")
const { GoogleSpreadsheet } = require("google-spreadsheet")
require("dotenv").config()

const app = express()

const allowedOrigins = [
  "http://localhost:5174", // Vite's default development port
  "https://buliq.vercel.app",
  // Add any other origins that need access
]

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
  }),
)

app.use(express.json())

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)

const init = async () => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    })
    await doc.loadInfo()
    console.log("Google Sheets connected!")
  } catch (error) {
    console.error("Error connecting to Google Sheets:", error)
  }
}

init()

app.post("/api/waitlist", async (req, res) => {
  console.log("Received waitlist request")
  try {
    console.log("Request body:", req.body)
    const { name, email } = req.body

    if (!name || !email) {
      console.log("Missing name or email")
      return res.status(400).json({ error: "Name and email are required" })
    }

    console.log("Adding row to Google Sheet")
    const sheet = doc.sheetsByIndex[0]
    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Name: name,
      Email: email,
    })

    console.log("Row added successfully")
    res.json({ success: true })
  } catch (error) {
    console.error("Error in /api/waitlist:", error)
    res.status(500).json({ error: "Failed to add to waitlist", details: error.message })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = app

