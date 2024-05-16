require('dotenv').config();
const { processEmails } = require('../utilities/process-emails');

// Define the input and output file paths
const targetFile = process.env.MERGED_LIST || './results/merged.csv';
const outputFile = process.env.FILTERED_LIST || './results/filtered.csv';

processEmails(targetFile, outputFile);