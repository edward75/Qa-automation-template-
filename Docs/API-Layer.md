API Automation Layer

Overview

The API automation layer provides reusable components for communicating with backend services.

The purpose of this layer is to separate API communication logic from individual test scenarios.

Tests should focus on validating business behaviour rather than managing HTTP requests, authentication, and endpoint details.

API Layer Structure

The API layer contains the following components:

api/
├── ApiClient.ts
├── Auth.ts
└── Endpoints.ts

ApiClient

ApiClient.ts is responsible for handling communication with APIs.

Responsibilities include:

* Sending HTTP requests.
* Managing request methods such as GET, POST, PUT, and DELETE.
* Handling common request configuration.
* Processing API responses.

The purpose of ApiClient is to avoid duplicating request logic across multiple tests.

Example:

Without an API client:

Test 1
 └── Create request
Test 2
 └── Create request
Test 3
 └── Create request

With an API client:

Tests
  |
  v
ApiClient
  |
  v
API

All tests use the same communication layer.

Auth

Auth.ts manages authentication functionality.

Responsibilities include:

* Sending authentication requests.
* Obtaining access tokens.
* Providing authentication details for API requests.

Authentication is kept separate from ApiClient because they have different responsibilities.

ApiClient answers:

“How do I send a request?”

Auth answers:

“How do I become authorised to send a request?”

Endpoints

Endpoints.ts centralises API endpoint definitions.

Example:

export const Endpoints = {
    users: "/users",
    reports: "/reports"
};

Centralising endpoints prevents hard-coded values being repeated throughout tests.

Benefits:

* Easier maintenance.
* Reduced duplication.
* Faster updates when APIs change.

API Test Structure

API tests are organised separately from UI tests.

Example:

tests/
├── api/
└── ui/

This separation makes it clear which layer is being tested.

API Testing Benefits

API automation provides several advantages:

Faster Feedback

API tests usually execute faster than UI tests because they do not require browser interaction.

Better Coverage

APIs can be tested independently from the user interface.

Earlier Defect Detection

API tests can identify backend issues before they become visible through the UI.

Future Improvements

The API layer can be extended with:

* Response schema validation.
* Request logging.
* Retry handling.
* API performance checks.
* Improved error handling.
* Authentication session management.

Design Principles Applied

Separation of Concerns

API communication is separated from test scenarios.

Reusability

Common API functionality is written once and reused.

Maintainability

Changes to API communication can be made in one location without updating every test.

:::
---
