const { readCSV, writeEmailsToCSV } = require("../helpers");
const { removeBouncedEmails } = require("./remove-bounced");
const { removeTempDomains } = require("./remove-temp-domains");

// Main function to perform the operations
async function processEmails(targetFile, outputFile) {
  try {
    // Read the CSV files
    const emails = await readCSV(`./results/${process.env.MERGED_LIST}` ?? targetFile);

    // Remove bounced emails
    const validEmails = await removeBouncedEmails(
      emails,
      process.env.BOUNCED_LIST
    );

    // Remove emails with temporary domains
    const finalEmails = await removeTempDomains(validEmails, process.env.BLOCKED_DOMAINS);

    // Write the filtered emails to the output file
    writeEmailsToCSV(finalEmails, process.env.FILTERED_LIST ?? outputFile);
    console.log(`☕ Filtered email list has been written to \x1b[32mresults/${process.env.FILTERED_LIST ?? outputFile}\x1b[0m`);
  } catch (err) {
    console.error("Error processing emails:", err.message);
  }
}

module.exports = { processEmails };

