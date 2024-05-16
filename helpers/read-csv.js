const fs = require("fs");
const csv = require("csv-parser");

// Function to read a CSV file and return a Promise that resolves with the parsed data
function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (err) => reject(err));
  });
}

module.exports = { readCSV };
