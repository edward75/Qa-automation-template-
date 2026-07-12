Now create:
```text
docs/Page-Object-Model.md

Paste:

:::writing{variant=“document” id=“84620”}

Page Object Model (POM)

Overview

The Page Object Model is a design pattern used for UI automation that separates page interaction logic from test scenarios.

This framework uses Page Objects to make UI tests more maintainable, readable, and easier to update.

Why Use Page Objects?

Without Page Objects, tests often contain:

* Locators.
* Click actions.
* Input handling.
* Navigation logic.

Example:

await page.locator("#username").fill("user");
await page.locator("#password").fill("password");
await page.locator("#login").click();

When the application changes, every test containing those locators needs updating.

With Page Objects

The UI behaviour is moved into dedicated classes.

Example:

pages/
├── BasePage.ts
└── LoginPage.ts

The test becomes focused on behaviour:

await loginPage.login(username, password);

The test does not need to know how login works internally.

BasePage

BasePage.ts provides common functionality shared across multiple pages.

Potential responsibilities:

* Navigation.
* Common waits.
* Browser interactions.
* Shared helper methods.

Example:

All pages may need:

* Navigate to a URL.
* Wait for elements.
* Take screenshots.

These actions can exist in one reusable location.

Page Classes

Each application page has its own class.

Example:

LoginPage.ts
DashboardPage.ts
ReportsPage.ts

Each page contains:

* Locators.
* Actions.
* Page-specific behaviour.

Benefits

Maintainability

If a locator changes, only the page object requires updating.

Readability

Tests describe user behaviour rather than technical implementation.

Example:

Instead of:

click("#submit")

A test can say:

loginPage.submitLogin()

Reusability

The same page actions can be reused across multiple tests.

Relationship Between Tests and Pages

The relationship should be:

Test
 |
 v
Page Object
 |
 v
Application UI

Tests should not directly interact with page locators.

Playwright Code Generation

Playwright Codegen can be used to quickly create initial UI automation flows.

Generated scripts should then be reviewed and refactored into Page Objects.

Code generation helps with:

* Finding selectors.
* Understanding user flows.
* Creating initial automation.

However, generated scripts should not become the final framework design.

Future Improvements

The Page Object layer can be extended with:

* Component objects.
* Better selector strategies.
* Accessibility-based locators.
* Visual testing support.
* Additional reusable UI components.

Design Principles Applied

Separation of Concerns

UI interaction is separated from test scenarios.

Maintainability

Application changes can be handled within page classes.

Scalability

New pages and features can be added without affecting existing tests.

:::
---
Once these two are committed, your `docs` folder will be:
```text
docs/
├── Architecture.md
├── Authentication.md
├── API-Layer.md
└── Page-Object-Model.md

At that point, you have documented the core architecture.

The next document I would add before moving into Playwright Codegen is:

docs/Test-Strategy.md

because this will let you explain why you choose UI vs API tests, smoke vs regression, and where automation adds the most value — which is very relevant for Senior QA interviews.

Then we can start the fun part: opening Playwright Codegen and turning real user journeys into proper Page Objects. 🙂

