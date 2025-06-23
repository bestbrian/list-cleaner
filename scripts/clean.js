require('dotenv').config();
const { removeDuplicateEmails } = require('../utilities/remove-duplicates');

// Define the input and output file paths
const inputFile = `./results/${process.env.FILTERED_LIST}` || './results/filtered.csv';
const outputFile = process.env.CLEANED_LIST || './results/cleaned.csv';

removeDuplicateEmails(inputFile, outputFile);