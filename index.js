require("dotenv").config();
const {
  readCSV,
  removeBouncedEmails,
  removeTempDomains,
  writeEmailsToCSV,
} = require("./helpers");

const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const blockListPath = "./data/disposable_email_blocklist.csv";
const outputPath = "./cleaned-list.csv";

// fs.readdir(process.env.FILE_DIRECTORY, (err, files) => {
//   if (err) {
//     console.error("Error reading directory:", err);
//     return;
//   }

//   const csvFiles = files
//     .filter((file) => path.extname(file) === ".csv")
//     .map((file) => path.join(process.env.FILE_DIRECTORY, file));

//   let combinedData = [];

//   csvFiles.forEach((file, index) => {
//     fs.createReadStream(file)
//       .pipe(csv())
//       .on("data", (row) => {
//         if (row.email) {
//           const cleanedEmail = row.email.toLowerCase().trim();
//           combinedData.push({ ...row, email: cleanedEmail });
//         } else {
//           console.warn(
//             `Skipping row with missing email data: ${JSON.stringify(row)}`
//           );
//         }
//       })
//       .on("end", () => {
//         if (index === csvFiles.length - 1) {
//           writeEmailsToCSV(combinedData, "./combined.csv");
//         }
//       })
//       .on("error", (err) => {
//         console.error(`Error processing file ${file}:`, err);
//       });
//   });
// });

// // Main function to perform the operations
async function processEmails() {
  try {
    // Read the CSV files
    const emails = await readCSV("./combined.csv");

    // Remove bounced emails
    const validEmails = await removeBouncedEmails(
      emails,
      process.env.BOUNCED_LIST
    );

    // Remove emails with temporary domains
    const finalEmails = await removeTempDomains(validEmails, blockListPath);

    writeEmailsToCSV(finalEmails, process.env.OUTPUT_PATH ?? outputPath);
  } catch (err) {
    console.error("Error processing emails:", err.message);
  }
}

processEmails();
