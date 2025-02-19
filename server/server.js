const express = require("express")
const cors = require("cors")
const { GoogleSpreadsheet } = require("google-spreadsheet")
require("dotenv").config()

const app = express()

// Update allowedOrigins to include both the Vite development port and production URL
const allowedOrigins = [
  "http://localhost:5174", // Vite development port
  "http://localhost:5173", // Alternative Vite port
  "http://127.0.0.1:5174",
  "http://127.0.0.1:5173",
  "https://buliq.vercel.app",
]

// Update CORS configuration to be more permissive in development
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true)

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        console.log("Blocked origin:", origin)
        callback(new Error("Not allowed by CORS"))
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
)

// Ensure this comes after CORS middleware
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

// Add OPTIONS handler for preflight requests
app.options("/api/waitlist", cors())

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
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log("Allowed origins:", allowedOrigins)
})

module.exports = app

