# Email List Cleaner

A Node.js tool to clean and merge email lists by removing bounced emails, disposable domains, and duplicates.

## Features

- 🔗 **Merge** multiple CSV email lists into one
- 🚫 **Filter** out bounced emails and disposable email domains
- 🧹 **Remove** duplicate email addresses
- 📊 **Simple** command-line interface

## Installation

```bash
git clone https://github.com/yourusername/list-cleaner.git
cd list-cleaner
npm install
```

## Setup

1. Create a `.env` file (see `.env.example`)
2. Add your email lists to `data/email-lists/` as CSV files with an "email" column
3. Update `data/master-bounced.csv` with your bounced emails (optional)

## Usage

Run the complete pipeline:
```bash
npm run merge   # Combine all email lists
npm run filter  # Remove bounced/disposable emails  
npm run clean   # Remove duplicates
```

Or run individual steps as needed.

## Input/Output

- **Input**: CSV files in `data/email-lists/` with "email" column
- **Output**: Clean email list in `results/cleaned.csv`

## Configuration

Edit `.env` to customize:
- `FILE_DIRECTORY` - Directory containing email lists to merge
- `MERGED_LIST` - Output filename for merged list
- `FILTERED_LIST` - Output filename for filtered list
- `CLEANED_LIST` - Output filename for final clean list

## Data Files

- `data/master-bounced.csv` - List of bounced email addresses to remove
- `data/disposable_email_blocklist.csv` - List of disposable email domains to block

## License

MIT