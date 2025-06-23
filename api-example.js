// Example Express.js API endpoint
const express = require('express');
const multer = require('multer');
const { mergeLists, processEmails, removeDuplicateEmails } = require('./utilities');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/api/clean-emails', upload.single('emailList'), async (req, res) => {
  try {
    // 1. Save uploaded file
    const uploadedFile = req.file;
    
    // 2. Process through pipeline
    // ... merge, filter, clean logic here ...
    
    // 3. Return cleaned CSV
    res.download('results/cleaned.csv');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Frontend would look like:
// <form action="/api/clean-emails" method="POST" enctype="multipart/form-data">
//   <input type="file" name="emailList" accept=".csv" />
//   <button type="submit">Clean Email List</button>
// </form>