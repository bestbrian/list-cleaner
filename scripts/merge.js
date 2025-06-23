require('dotenv').config(); 
const path = require('path');
const { mergeLists } = require("../utilities"); 

// Define the file directory and merged file paths
const fileDirectory = process.env.FILE_DIRECTORY;
const mergedFile = process.env.MERGED_LIST;

// Handle async function
(async () => {
  try {
    await mergeLists(fileDirectory, mergedFile);
  } catch (error) {
    console.error('Failed to merge lists:', error);
    process.exit(1);
  }
})();