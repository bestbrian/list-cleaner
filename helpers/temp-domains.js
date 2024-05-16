const { readCSV } = require("./read-csv.js");
const { getDomain } = require("./utils.js");

async function checkDomains(listPath, blockListPath) {
  try {
    // Read the CSV files
    const emails = await readCSV(listPath);
    const tempDomains = await readCSV(blockListPath);

    // Extract domains from emails
    const emailDomains = new Set(
      emails.map((emailRow) => getDomain(emailRow.email))
    );

    // Find the first domain from tempDomains that exists in emailDomains
    const existingDomain = tempDomains.find((tempDomainRow) =>
      emailDomains.has(tempDomainRow.domains)
    );

    return existingDomain ? existingDomain.domains : null;
  } catch (err) {
    console.error("Error checking domains:", err.message);
  }
}

async function runCheckDomains(listPath, blockListPath) {
  const existingDomain = await checkDomains(listPath, blockListPath);
  if (existingDomain) {
    console.log(
      `The domain ${existingDomain} from tempDomains exists in emails`
    );
  } else {
    console.log("No domain from tempDomains exists in emails");
  }
}

module.exports = { runCheckDomains };
