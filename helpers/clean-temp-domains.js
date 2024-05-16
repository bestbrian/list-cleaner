const { readCSV } = require("./read-csv.js");
const { getDomain } = require("./utils.js");
// Function to remove emails with temporary domains from the list
async function removeTempDomains(emails, blockListPath) {
  const tempDomains = await readCSV(blockListPath);
  const tempDomainSet = new Set(tempDomains.map((row) => row.domains));
  const removedEmails = [];

  const filteredEmails = emails.filter((emailRow) => {
    const domain = getDomain(emailRow.email);
    const isTempDomain = tempDomainSet.has(domain);
    if (isTempDomain) {
      removedEmails.push(emailRow.email);
    }
    return !isTempDomain;
  });

  if (removedEmails.length > 0) {
    console.log("Removed emails with temporary domains:", removedEmails);
  }

  return filteredEmails;
}

module.exports = { removeTempDomains };
