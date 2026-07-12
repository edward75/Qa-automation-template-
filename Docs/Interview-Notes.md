Interview Notes - QA Automation Framework

Project Overview

This repository contains a scalable Playwright and TypeScript automation framework designed to support UI and API automation testing.

The framework was created to demonstrate modern Quality Engineering practices, including:

* Test automation architecture.
* Page Object Model design.
* API automation.
* Authentication management.
* Environment configuration.
* CI/CD integration.
* Maintainable and reusable test components.

The main objective was to create a framework that can grow as application complexity and test coverage increase.

⸻

Explaining the Framework

“Can you talk me through this project?”

Example answer:

“I created this framework to provide a reusable foundation for automation testing using Playwright and TypeScript.

I separated the framework into different layers so each component has a clear responsibility. The API layer handles backend communication, Page Objects handle UI interaction, authentication is managed separately, and tests focus on validating business behaviour.

The aim was to create something maintainable and scalable rather than just a collection of automated scripts.”

⸻

Architecture Decisions

Why did you separate the framework into different layers?

Answer:

“I wanted to follow separation of concerns so that each part of the framework has one clear responsibility.

For example, tests should not contain authentication logic, API request handling, or UI selectors. Those responsibilities belong in dedicated framework components.

This makes the framework easier to maintain and allows changes to be isolated.”

⸻

Single Responsibility Principle

Why is this important?

Answer:

“I designed classes so they have one clear responsibility.

For example:

* ApiClient handles API communication.
* Auth handles authentication.
* Environment handles configuration.
* Page Objects handle UI interactions.

If one area changes, only the relevant component needs updating.”

⸻

API Automation

Why did you create an API layer?

Answer:

“I wanted to avoid duplicating API request logic across tests.

By creating an API client, tests can focus on validating behaviour rather than handling HTTP requests.

It also means improvements such as logging, retries, or error handling can be added centrally.”

⸻

Authentication

Why separate authentication from tests?

Answer:

“Authentication is a framework concern rather than a business test concern.

A test should not need to know how a token is generated. It should simply request an authenticated session and then perform the required validation.

Separating authentication reduces duplication and makes future changes easier.”

⸻

Bearer Token Authentication

Explain the authentication flow.

Answer:

“The framework currently supports Bearer token authentication.

The process is:

1. Send login credentials.
2. Receive an access token.
3. Add the token to subsequent API requests using the Authorization header.
4. Execute authenticated API tests.

A future improvement would be adding session management to handle token expiry and refresh automatically.”

⸻

Page Object Model

Why use Page Objects?

Answer:

“I use the Page Object Model because it separates UI interaction from test scenarios.

Instead of having selectors and actions repeated across tests, they are stored in reusable page classes.

This improves readability and means UI changes can be handled in one location.”

⸻

Environment Management

Why not store URLs directly in tests?

Answer:

“I wanted tests to be independent from the environment they run against.

By centralising configuration, the same tests can run against different environments without code changes.

If configuration storage changes in the future, only the environment layer needs updating.”

⸻

API Testing vs UI Testing

How do you decide what to automate?

Answer:

“I follow a risk-based approach.

API tests are preferred where possible because they provide faster feedback and are less fragile.

UI tests are used for critical user journeys where validating the complete user experience is important.”

⸻

CI/CD

Why include GitHub Actions?

Answer:

“Automation provides the most value when it gives fast feedback.

By integrating tests into CI/CD, every change can be validated automatically and issues can be identified earlier in the development process.”

⸻

Improvements I Would Add

If asked:

“What would you improve next?”

Possible answers:

Authentication

* Add session management.
* Implement token refresh.
* Support multiple authentication providers.

Reporting

* Add Allure reporting.
* Add improved failure diagnostics.
* Capture screenshots and traces automatically.

Test Data

* Add test data builders.
* Introduce Faker for dynamic data generation.

API Testing

* Add JSON schema validation.
* Add contract testing.
* Improve response validation.

Infrastructure

* Add Docker support.
* Expand CI/CD pipelines.
* Add parallel execution.

⸻

Key Messages

Remember:

* I built a framework, not just scripts.
* I designed for maintainability.
* I considered scalability.
* I separated responsibilities.
* I understand the reasons behind my design choices.

The important part is not knowing every line of code.

The important part is being able to explain:

“What problem was I solving, and why did I choose this approach?”
