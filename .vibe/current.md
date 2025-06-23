# Ship #2: Fix Critical Bugs

## 🎯 Goal
Fix the race condition in merge functionality and remove security vulnerabilities to make the tool production-ready.

## 🐛 Critical Issues to Fix

### 1. Race Condition in merge-lists.js:39-41
**Problem**: Using array index to determine when to write output, but streams are async
**Fix**: Use Promise.all or proper stream handling

### 2. Security Vulnerability
**Problem**: faker@6.6.6 has high severity vulnerability
**Fix**: Remove faker dependency (it's not used for email cleaning)

### 3. Test Code in Production
**Problem**: process-emails.js:20-21 contains hardcoded test values
**Fix**: Remove test code

### 4. Missing Results Directory
**Problem**: Scripts expect ./results/ but it doesn't exist
**Fix**: Create directory or handle dynamically

### 5. Remove Unrelated Code
**Problem**: click-script.js is unrelated to email cleaning
**Fix**: Remove the script

## ✅ Definition of Done
- [x] Race condition fixed in merge-lists.js
- [x] faker dependency removed from package.json
- [x] Test code removed from process-emails.js
- [x] Results directory handled properly
- [x] click-script.js removed
- [x] npm audit shows no high vulnerabilities
- [x] All pipeline scripts run without errors

## 📋 Tasks
1. Fix async handling in merge-lists.js
2. Remove faker from dependencies
3. Clean up process-emails.js
4. Add results directory creation
5. Remove click-script.js
6. Test full pipeline: merge → filter → clean

## 🚫 NOT This Ship
- Adding new features
- UI/UX improvements
- Performance optimizations
- Additional validation (Ship #4)

---

# Current Ship: #1 - Adopt Vibeship Framework

## 🚢 Ship Target: Today by 5 PM

### 🎯 Goal
Successfully integrate Vibeship into existing project and identify first real feature to ship

### ✅ Definition of Done
- [x] .vibe folder created
- [x] Current architecture documented in state.md
- [x] First real feature identified for Ship #2
- [x] Team onboarded (if applicable)
- [x] All existing tests pass (no tests exist yet)

### 📋 Acceptance Criteria
- [x] Can run 'npm run vibe' successfully
- [x] Next 3 ships identified in ideas.md
- [x] Existing functionality unaffected
- [x] Patterns documented in patterns.md

### 🚫 NOT This Ship (Stay Focused!)
- Refactoring existing code (later)
- Adding new features (Ship #2)
- Changing tech stack (later)

## 📊 Progress Tracking

**Status**: ✅ Complete

**Time Tracking**:
- Estimated: 2 hours
- Actual so far: 0 hours

---

*Ship started: $(date)*
