Authentication Management

Overview

Authentication is a key part of API automation because most modern applications require secure access before APIs can be tested.

This framework currently supports Bearer token authentication, where a successful login request returns an access token that is used in subsequent API requests.

The authentication process has been separated from individual tests to improve maintainability and reduce duplication.

Authentication Flow

The standard authentication flow is:

1. The test requests authentication.
2. The authentication layer sends login credentials to the authentication endpoint.
3. The API returns an access token.
4. The token is added to subsequent API requests.
5. The test continues with the required validation.

Example flow:

Test
 |
 v
Auth.ts
 |
 v
Login API
 |
 v
Access Token
 |
 v
Authenticated API Request

Bearer Token Authentication

Bearer token authentication works by sending the access token in the HTTP Authorization header.

Example:

Authorization: Bearer <access_token>

The API uses this token to identify and authorise the user making the request.

Why Authentication Is Separated

Authentication logic is separated from tests because authentication is a framework responsibility rather than a test responsibility.

A test should focus on validating business behaviour, for example:

* Creating a customer.
* Updating an account.
* Generating a report.

The test should not need to understand:

* How login works.
* Where credentials are stored.
* How tokens are generated.
* How tokens are refreshed.

Benefits

Separating authentication provides several advantages:

Maintainability

If the authentication mechanism changes, only the authentication layer needs updating.

Example:

Changing from:

POST /login

to:

POST /oauth/token

should not require changes to every API test.

Reusability

Multiple tests can use the same authentication process rather than implementing login independently.

Scalability

As the framework grows, authentication can be extended to support:

* Token caching.
* Token refresh.
* Multiple user roles.
* Different authentication providers.

Future Improvements

Future versions of the framework can introduce a dedicated Session Manager.

The Session Manager would be responsible for:

* Storing active tokens.
* Checking token expiry.
* Requesting refreshed tokens when required.

This would allow long-running test suites to continue running without authentication failures.

Future authentication methods may include:

* OAuth 2.0.
* API keys.
* Microsoft Entra ID authentication.
* Other enterprise identity providers.
