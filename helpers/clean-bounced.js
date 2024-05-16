const { readCSV } = require("./read-csv.js");

async function removeBouncedEmails(emails, bouncedListPath) {
  const bouncedEmails = await readCSV(bouncedListPath);
  const bouncedSet = new Set(bouncedEmails.map((row) => row.email));
  return emails.filter((emailRow) => !bouncedSet.has(emailRow.email));
}

module.exports = { removeBouncedEmails };
