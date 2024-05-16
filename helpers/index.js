const { readCSV } = require("./read-csv.js");
const { getDomain } = require("./get-domain.js");
const { runCheckDomains } = require("./temp-domains.js");
const { writeEmailsToCSV } = require("./write-to-csv.js");
// const { processEmails } = require("../utilities/process-emails.js");
// const { removeDuplicateEmails } = require("../utilities/remove-duplicates.js");

module.exports = {
  readCSV,
  getDomain,
  runCheckDomains,
  writeEmailsToCSV,
  // processEmails,
  // removeDuplicateEmails
};
