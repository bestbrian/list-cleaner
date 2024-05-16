// Function to get the domain from an email address
function getDomain(email) {
  return email.split("@")[1];
}

module.exports = { getDomain };
