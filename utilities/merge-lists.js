const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { writeEmailsToCSV } = require("../helpers");

async function mergeLists(fileDirectory, outputPath) {
  try {
    const files = await fs.promises.readdir(process.env.FILE_DIRECTORY ?? fileDirectory);
    
    const csvFiles = files
      .filter((file) => path.extname(file) === ".csv")
      .map((file) => path.join(process.env.FILE_DIRECTORY ?? fileDirectory, file));

    if (csvFiles.length === 0) {
      console.log("No CSV files found in directory");
      return;
    }

    let combinedData = [];

    // Process all files and wait for completion
    const promises = csvFiles.map((file) => {
      return new Promise((resolve, reject) => {
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
            console.log(`✓ Processed ${file}`);
            resolve();
          })
          .on("error", (err) => {
            console.error(`Error processing file ${file}:`, err);
            reject(err);
          });
      });
    });

    // Wait for all files to be processed
    await Promise.all(promises);
    
    // Write combined data after all files are processed
    writeEmailsToCSV(combinedData, process.env.MERGED_LIST ?? outputPath);
    console.log(`🔗 Merged email list has been written to \x1b[32mresults/${outputPath}\x1b[0m`);
    console.log(`📊 Total emails merged: ${combinedData.length}`);
    
  } catch (err) {
    console.error("Error in mergeLists:", err);
    throw err;
  }
}
module.exports = { mergeLists };