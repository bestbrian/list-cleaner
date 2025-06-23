# Project State: list-cleaner

> The single source of truth for architecture, decisions, and progress.

## 🎯 Project Overview

**Purpose**: Clean and merge email lists by removing bounced emails, disposable domains, and duplicates.

**Current Status**: Adopting Vibeship Framework

**Tech Stack**: Node.js
- **Runtime**: Node.js
- **CSV Processing**: csv-parser, csv-writer
- **Environment**: dotenv
- **HTTP**: axios
- **Validation**: fakefilter

## 🏗️ Current Architecture

### Pipeline Architecture (3 stages):
1. **Merge** (`scripts/merge.js`) - Combines multiple CSV email lists
2. **Filter** (`scripts/filter.js`) - Removes bounced emails and disposable domains
3. **Clean** (`scripts/clean.js`) - Removes duplicate emails

### Directory Structure:
```
├── data/          # Input data (bounced lists, blocklists)
├── helpers/       # Utility functions
├── results/       # Output directory (missing - needs creation)
├── scripts/       # Main pipeline scripts
└── utilities/     # Core processing logic
```

## 📦 Existing Dependencies

```json
"@faker-js/faker": "^8.4.1",
"axios": "^1.7.2",
"csv-parser": "^3.0.0",
"csv-writer": "^1.6.0",
"dotenv": "^16.4.5",
"fakefilter": "^0.1.840",
"faker": "^6.6.6"  ⚠️ HIGH SECURITY VULNERABILITY
```

## 🚢 Migration to Vibeship

### Pre-Vibeship State
- Last commit: 2024-07-23
- Files:     5897
- TODOs:        7

### First Ships Planned
1. [First small improvement]
2. [Second small improvement]

---

*Vibeship adopted: 2025-06-22*
