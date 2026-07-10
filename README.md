QA Automation Template

A scalable Playwright + TypeScript automation framework designed for UI and API testing.

This repository demonstrates a maintainable automation architecture using:

* Playwright for UI automation
* TypeScript for strong typing and maintainability
* Page Object Model (POM)
* API testing layer
* Environment configuration
* Reusable utilities
* GitHub Actions CI/CD ready

⸻

## Quick Start

Clone the repository:

```bash
git clone https://github.com/edward75/Qa-automation-template-.git
cd Qa-automation-template-
```

Run the setup script:

```bash
chmod +x setup.sh
./setup.sh
```

Run the tests:

```bash
npm test
```

Project Structure

qa-automation-template/
│
├── api/
│   ├── ApiClient.ts
│   ├── ApiClient.js
│   ├── Auth.ts
│   └── Endpoints.ts
│
├── pages/
│   ├── BasePage.ts
│   └── LoginPage.ts
│
├── tests/
│   ├── api/
│   │   └── api-example.spec.ts
│   └── ui/
│       └── example.spec.ts
│
├── environments/
│   └── test.json
│
├── utils/
├── data/
├── fixtures/
├── schemas/
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── setup.sh

⸻

Features

UI Automation

* Page Object Model structure
* Reusable base page
* Headless Chromium execution
* HTML reporting

API Automation

* Reusable API client
* GET / POST / PUT / DELETE support
* Authentication layer
* Centralised endpoint management

Configuration

* Environment-specific URLs
* Test data separation
* TypeScript configuration included

⸻

Getting Started

Clone the repository

git clone https://github.com/edward75/Qa-automation-template-.git
cd Qa-automation-template-

Install dependencies

npm install

Install Playwright browsers

npx playwright install

Run all tests

npm test

Run tests in headed mode

npm run test:headed

Open the HTML report

npm run report

⸻

Environment Configuration

Edit:

environments/test.json

Example:

{
  "baseUrl": "https://your-website.com",
  "apiUrl": "https://api.your-website.com"
}

Replace these values with the URLs for your project.

⸻

Example API Usage

const response = await api.get('/users');
expect(response.status()).toBe(200);

⸻

Example UI Usage

await basePage.navigate('https://playwright.dev');
await expect(page).toHaveTitle(/Playwright/);

⸻

CI/CD

The repository includes a GitHub Actions workflow to:

* Install dependencies
* Install Playwright browsers
* Execute tests
* Publish HTML reports

⸻

Future Enhancements

* Authentication token refresh
* JSON schema validation
* Docker support
* Parallel execution
* Visual testing
* Accessibility testing
* Test data factories
* Allure reporting

⸻

About

This repository is being developed as a reusable enterprise-style QA automation template suitable for:

* UI testing
* API testing
* CI/CD pipelines
* Interview demonstrations
* Automation framework bootstrapping

Created by Edward Hiland as a reusable Playwright automation framework template.
