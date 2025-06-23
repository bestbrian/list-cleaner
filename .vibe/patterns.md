# Allowed Patterns

> Consistency matters. Use these patterns. Only these patterns.

## 🏗️ Architecture Patterns

### File Organization
```
✅ DO: Keep scripts in /scripts folder
✅ DO: Keep utilities in /utilities folder  
✅ DO: Keep data files in /data folder
✅ DO: Output to /results folder
✅ DO: Keep existing structure until Ship #10

❌ DON'T: Mix scripts and utilities
❌ DON'T: Change file structure mid-ship
❌ DON'T: Break existing patterns without planning
```

### Naming Conventions
```
✅ DO: Use kebab-case for file names (merge-lists.js)
✅ DO: Use camelCase for function names (mergeLists)
✅ DO: Use descriptive names (remove-bounced.js not rb.js)

❌ DON'T: Use spaces in filenames
❌ DON'T: Use unclear abbreviations
```

## 💻 Coding Patterns

### CSV Processing
```
✅ DO: Use csv-parser for reading CSV files
✅ DO: Use csv-writer for writing CSV files
✅ DO: Handle headers properly
✅ DO: Normalize email addresses (lowercase, trim)

❌ DON'T: Parse CSV manually
❌ DON'T: Assume CSV format without checking
```

### Async Operations
```
✅ DO: Use promises/async-await
✅ DO: Handle stream events properly
✅ DO: Wait for all operations to complete

❌ DON'T: Use callbacks for new code
❌ DON'T: Ignore async errors
```

## 🎨 UI Patterns

### Styling
```
[Your current styling approach]
[CSS/SCSS/Styled-components/etc.]
```

## 🚫 Project-Specific Rules

1. **Don't break existing functionality** - Ship #1 rule
2. **Use existing dependencies** until Ship #5
3. **Keep current architecture** until users complain
4. **No major refactors** until Ship #10
5. **Test everything** before shipping

## 📏 Ship Sizes

**Choose the right size:**
- 🟢 **Small (< 4 hours)**: Single component, clear scope
- 🟡 **Medium (4-8 hours)**: Multiple files, one feature  
- 🔴 **Large (> 8 hours)**: STOP! Break into smaller ships

---

*Add your own patterns as you establish them.*
