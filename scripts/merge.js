require('dotenv').config(); 
const path = require('path');
const { mergeLists } = require("../utilities"); 

// Define the file directory and merged file paths
const fileDirectory = path.join(__dirname, '..', process.env.FILE_DIRECTORY);
const mergedFile = path.join(__dirname, process.env.MERGED_LIST);

mergeLists(fileDirectory, mergedFile);