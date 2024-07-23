require('dotenv').config(); 
const path = require('path');
const { extractUniqueDomains } = require('../helpers/unique-domains');

const inputCsvPath = path.join(__dirname, '..', 'results/cleaned.csv');

extractUniqueDomains(inputCsvPath, 'unique-domains.csv');