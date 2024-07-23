const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { writeEmailsToCSV } = require("../helpers");

function mergeLists(fileDirectory, outputPath) {
  fs.readdir(process.env.FILE_DIRECTORY ?? fileDirectory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    const csvFiles = files
      .filter((file) => path.extname(file) === ".csv")
      .map((file) => path.join(process.env.FILE_DIRECTORY ?? fileDirectory, file));

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
            writeEmailsToCSV(combinedData, process.env.MERGED_LIST ?? outputPath);
            console.log(`🔗 Merged email list has been written to \x1b[32mresults/${outputPath}\x1b[0m`);
          }
        })
        .on("error", (err) => {
          console.error(`Error processing file ${file}:`, err);
        });
    });
  });
}
module.exports = { mergeLists };