const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { writeEmailsToCSV } = require("./write-to-csv.js");

function mergeLists(fileDirectory, outputPath) {
  fs.readdir(fileDirectory ?? process.env.FILE_DIRECTORY, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    const csvFiles = files
      .filter((file) => path.extname(file) === ".csv")
      .map((file) => path.join(process.env.FILE_DIRECTORY, file));

    let combinedData = [];

    csvFiles.forEach((file, index) => {
      fs.createReadStream(file)
        .pipe(csv())
        .on("data", (row) => {
          if (row.email) {
            const cleanedEmail = row.email.toLowerCase().trim();
            combinedData.push({ ...row, email: cleanedEmail });
          } else {
            console.warn(
              `Skipping row with missing email data: ${JSON.stringify(row)}`
            );
          }
        })
        .on("end", () => {
          if (index === csvFiles.length - 1) {
            writeEmailsToCSV(combinedData, outputPath);
          }
        })
        .on("error", (err) => {
          console.error(`Error processing file ${file}:`, err);
        });
    });
  });
}
module.exports = { mergeLists };