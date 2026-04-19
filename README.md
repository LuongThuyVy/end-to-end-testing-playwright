# Playwright E2E Automation Framework

**End-to-End (E2E) test automation framework** built with **Playwright** for validating real user workflows on web applications.

This project focuses on automating core scenarios on the Automation Exercise website.

---

## Overview

* Covers multiple **user workflows**
* Uses **step-based execution** for clarity and debugging

---

## Tech Stack

| Tool       | Purpose                   |
| ---------- | ------------------------- |
| Playwright | **E2E Testing Framework** |
| Node.js    | **Runtime Environment**   |
| JavaScript | **Test Implementation**   |

---

## Project Structure

```bash
playwright-test/
├── tests/                 # E2E test cases
│   ├── auth/              # Authentication flows
│   ├── shopping/          # Shopping flows (planned)
│
├── utils/                 # Reusable helpers
├── playwright.config.js   # Global configuration
├── package.json
```

---

## Installation

Install dependencies:

```bash
npm install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/automation_exercise/authencation/authencation.spec.js
```

---

## Test Reporting

View HTML report:

```bash
npx playwright show-report
```

The report provides:

* **Step-by-step execution details**
* **Failure insights and logs**
* **Screenshots**

---

## Key Features

* **Structured test design** using `test.describe`, `test`, `test.step`
* **Reusable utilities** for cleaner test code
* **Readable test flow** aligned with real user behavior
* **Built-in reporting** for debugging and analysis
* **Scalable architecture** for future expansion

---

## Testing Strategy

* **End-to-End testing** simulating real user behavior
* **Step-based execution** for better traceability
* Assertions using **Playwright `expect`**
* Focus on **stability and readability**

---

## Notes

* Requires **unique test data** (e.g., email)
* Depends on **external website availability**
* UI changes may affect locators

---

## Author

**Luong Thuy Vy**
