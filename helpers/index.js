const { readCSV } = require("./read-csv.js");
const { getDomain } = require("./utils.js");
const { removeBouncedEmails } = require("./clean-bounced.js");
const { removeTempDomains } = require("./clean-temp-domains.js");
const { runCheckDomains } = require("./temp-domains.js");
const { writeEmailsToCSV } = require("./write-to-csv.js");
const { mergeLists } = require("./merge-lists.js");

module.exports = {
  readCSV,
  getDomain,
  mergeLists,
  removeBouncedEmails,
  removeTempDomains,
  runCheckDomains,
  writeEmailsToCSV,
};
