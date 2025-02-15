const express = require('express');
const cors = require('cors');
const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize the sheet
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const CREDENTIALS = {
  client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n')
};

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const init = async () => {
  try {
    // Initialize Auth
    await doc.useServiceAccountAuth(CREDENTIALS);
    
    // Load the sheet
    await doc.loadInfo();
    
    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];
    
    // Make sure we have the headers
    await sheet.setHeaderRow(['Timestamp', 'Name', 'Email']);
    
    console.log('Google Sheets connected!');
  } catch (error) {
    console.error('Error connecting to Google Sheets:', error);
    console.error('Credentials being used:', {
      spreadsheetId: SPREADSHEET_ID,
      clientEmail: CREDENTIALS.client_email,
      privateKeyLength: CREDENTIALS.private_key ? CREDENTIALS.private_key.length : 0
    });
  }
};

init();

app.post('/api/waitlist', async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const sheet = doc.sheetsByIndex[0];
    
    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Name: name,
      Email: email
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error adding row:', error);
    res.status(500).json({ error: 'Failed to add to waitlist' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});