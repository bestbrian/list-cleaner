const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const path = require("path");

function writeEmailsToCSV(emails, outputPath) {
  // Ensure results directory exists
  const resultsDir = path.dirname(`./results/${outputPath}`);
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
  }

  const csvWriter = createCsvWriter({
    path: `./results/${outputPath}`,
    header: [{ id: "email", title: "email" }],
  });

  const records = emails.map((email) => ({ email: email.email }));

  csvWriter
    .writeRecords(records)
    .then(() =>
      console.log(`\x1b[32mCompleted.\x1b[0m`)
    )
    .catch((err) => console.error("Failed to write merged email list:", err));
}

module.exports = { writeEmailsToCSV };
