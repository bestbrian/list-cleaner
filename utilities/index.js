const { mergeLists } = require('./merge-lists.js');
const { removeBouncedEmails } = require('./remove-bounced.js');
const { removeTempDomains } = require('./remove-temp-domains.js');
const { processEmails } = require('./process-emails.js');
const { removeDuplicateEmails } = require('./remove-duplicates.js');

module.exports = {
  mergeLists,
  removeBouncedEmails,
  removeTempDomains,
  processEmails,
  removeDuplicateEmails
};