const { readCSV, writeEmailsToCSV } = require("../helpers");

async function removeDuplicateEmails(inputFile, outputPath) {
  try {
    // Read the input CSV file
    const emails = await readCSV(`./results/${process.env.FILTERED_LIST}` ?? inputFile);

    // Create a Set to store unique email addresses
    const uniqueEmails = new Set();

    let duplicateCount = 0;
    // Filter out duplicate emails
    const filteredEmails = emails.filter((emailRow) => {
      if (uniqueEmails.has(emailRow.email)) {
        duplicateCount++;
        return false;
      } else {
        uniqueEmails.add(emailRow.email);
        return true;
      }
    });

    // Write the filtered emails to the output CSV file
    await writeEmailsToCSV(filteredEmails, outputPath);

    console.log(
      `🧹 Removed \x1b[32m${duplicateCount}\x1b[0m duplicate email(s). \nUnique emails saved to ${outputPath}`
    );
  } catch (err) {
    console.error("Error removing duplicate emails:", err.message);
  }
}

module.exports = { removeDuplicateEmails };