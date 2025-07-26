const express = require('express');
const fs = require('fs');
const Papa = require('papaparse');
const cors = require('cors');

const app = express();
const PORT = 8080;

// Enable CORS so frontend (localhost:3000) can access this
app.use(cors());

// Route to parse CSV and return JSON
app.get('/api/data', (req, res) => {
  const csvFile = fs.readFileSync('data.csv', 'utf8');
  
  const parsed = Papa.parse(csvFile, {
    header: true, // First row is used as keys
    skipEmptyLines: true
  });

  res.json(parsed.data); // Return parsed data
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
