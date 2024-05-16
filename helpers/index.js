const { readCSV } = require("./read-csv.js");
const { getDomain } = require("./utils.js");
const { removeBouncedEmails } = require("./clean-bounced.js");
const { removeTempDomains } = require("./clean-temp-domains.js");
const { runCheckDomains } = require("./temp-domains.js");
const { writeEmailsToCSV } = require("./write-to-csv.js");

module.exports = {
  readCSV,
  getDomain,
  removeBouncedEmails,
  removeTempDomains,
  runCheckDomains,
  writeEmailsToCSV,
};
