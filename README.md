# Playwright Learning with JS

![Playwright](https://img.shields.io/badge/Playwright-Automation-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)

---

## Overview

This repository contains a Playwright automation testing framework built using JavaScript and Page Object Model (POM).

The framework includes automation scenarios for:

- Login validation
- QA playground navigation
- Practice card interactions
- File upload testing
- Alert dialog handling
- Input field automation
- Multi-tab handling

---

## Tech Stack

- Playwright
- JavaScript (ES6)
- Node.js
- Page Object Model (POM)
- Git & GitHub

---

## Features

- Page Object Model Framework
- JSON Test Data Handling
- Reusable Utility Methods
- File Upload Automation
- Alert Handling
- Multi Tab Handling
- Assertions using Playwright Expect
- HTML Reporting
- Browser Context Handling

---

## Folder Structure

```text
playwright-learning
│
├── tests
│   ├── specs
│   │   └── practise.spec.js
│   │
│   ├── pageObjectModal
│   │   ├── loginPage.js
│   │   └── dashboardPage.js
│   │
│   └── testData
│       ├── file.json
│       └── sample.pdf
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Prerequisites

Before running the project, ensure the following are installed:

- Node.js (Recommended: v18+)
- npm
- Playwright browsers

Install Playwright browsers:

```bash
npx playwright install
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/nayanas98/Playwright-Learning-With-Js.git
```

Navigate to project directory:

```bash
cd Playwright-Learning-With-Js
```

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
npx playwright test tests/specs/practise.spec.js
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

---

## Reports

Generate HTML report:

```bash
npx playwright show-report
```

Run tests with HTML reporter:

```bash
npx playwright test --reporter=html
```

---

## Implemented Test Scenarios

### Login Validation
- Valid login verification
- Assertion for successful login

### Input Field Automation
- Text input handling
- Keyboard interaction using Tab key

### Alert Handling
- Browser alert handling
- Accepting dialogs

### File Upload
- Uploading PDF files using `setInputFiles()`

### Multi Tab Handling
- Opening and handling new browser tabs

---

## Playwright Concepts Used

- `beforeEach` Hooks
- Browser Context
- New Tab Handling
- Locators
- Assertions
- File Upload
- Alert/Dialog Handling
- JSON Test Data
- Page Object Model
- Reusable Methods
- Test Grouping using `describe`

---

## Notes

- Chromium execution currently runs in headed mode.
- `slowMo` is enabled for better execution visibility.
- Each new tab test creates a fresh browser context.
- File upload uses dynamically generated file path.

---

## Troubleshooting

### File Upload Issues
Verify the file exists:

```text
tests/testData/sample.pdf
```

### Tests Passing Individually but Failing Together
Use isolated browser contexts and proper `beforeEach` setup.

---

## Future Enhancements

- API Testing with Playwright
- Storage State Authentication
- CI/CD Integration
- Cross Browser Execution
- Parallel Execution
- Allure Reporting
- Network Mocking
- TypeScript Migration

---

## Author

### Nayana S

GitHub:
https://github.com/nayanas98

Repository:
https://github.com/nayanas98/Playwright-Learning-With-Js

---

## Learning Purpose

This project is created for learning and practicing Playwright automation using JavaScript with real-world automation framework concepts.
