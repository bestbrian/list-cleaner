const { readCSV } = require("./read-csv.js");
const { getDomain } = require("./get-domain.js");
const { writeEmailsToCSV } = require("../helpers");

async function extractUniqueDomains(csvFilePath, outputPath) {
  try {
    // Read the CSV file
    const emails = await readCSV(csvFilePath);

    // Extract unique domains from emails
    const uniqueDomains = new Set(
      emails.map((emailRow) => getDomain(emailRow.email))
    );

    // Convert the Set to an array of objects
    const domainsArray = Array.from(uniqueDomains).map((domain) => ({ domain }));

    // Write the unique domains to a new CSV file
    writeEmailsToCSV(domainsArray, outputPath);

    console.log(`Unique domains have been written to ${outputPath}`);
  } catch (err) {
    console.error("Error extracting unique domains:", err.message);
  }
}

module.exports = { extractUniqueDomains };
