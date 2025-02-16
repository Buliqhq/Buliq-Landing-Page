const express = require("express");
const cors = require("cors");
const { GoogleSpreadsheet } = require("google-spreadsheet");
require("dotenv").config();

const app = express();

const allowedOrigins = [
  "http://localhost:5174",
  "http://localhost:3000",
  "https://buliq.vercel.app",
  "https://backend-psi-five-12.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(express.json());

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

const init = async () => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo();
    console.log("Google Sheets connected!");
  } catch (error) {
    console.error("Error connecting to Google Sheets:", error);
  }
};

init();

app.post("/api/waitlist", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Name: name,
      Email: email,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to add to waitlist" });
  }
});

// For local development only
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the Express app for Vercel's serverless function
module.exports = app;
