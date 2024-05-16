const createCsvWriter = require("csv-writer").createObjectCsvWriter;

function writeEmailsToCSV(emails, outputPath) {
  const csvWriter = createCsvWriter({
    path: outputPath,
    header: [{ id: "email", title: "email" }],
  });

  const records = emails.map((email) => ({ email: email.email }));

  csvWriter
    .writeRecords(records)
    .then(() =>
      console.log("Cleaned email list has been written to " + outputPath)
    )
    .catch((err) => console.error("Failed to write cleaned email list:", err));
}

module.exports = { writeEmailsToCSV };
