require("dotenv").config();

const { mergeLists } = require("/utilities");

mergeLists(process.env.FILE_DIRECTORY, process.env.MERGED_LIST);
// // processEmails();

// // #3 Remove All Duplicates
// removeDuplicateEmails(
//   `./results/${process.env.FILTERED_LIST}`,
//   process.env.CLEANED_LIST
// );


// 1. merge (combine lists, return "merged.csv"), 
// 2. remove (remove bounced, bad domains, return "filtered.csv" that shows emails removed), 
// 3. filter (remove duplicates, return "cleaned.csv" that shows final list)