# Automated accessibility testing.

This is a project demonstrating strategies for writing tests for the accessibility of the user interface.

The code stack is React with NextJS.

## Getting Started

To install:
```bash
npm install
```

The project contains a couple of test pages. Start the development server and visit http://localhost:3000 to see them. 

```bash
npm run dev
```

## Linting
The linter plugin [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) asserts 
accessibility best practices purely on the code basis and supports during coding.

```bash
npm run lint
```

## Unit tests

The unit test use [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). 
They also demonstrate the usage of [axe-core](https://github.com/dequelabs/axe-core), an automated accessibility testing tool.
To run:

```bash
npm run test
```

## E2E tests

The E2E tests use [Playwright](https://playwright.dev/) (main branch) 
or [Cypress](https://www.cypress.io/) (cypress branch).

They need a running dev server.

Like the unit tests, they also demonstrate the usage of [axe-core](https://github.com/dequelabs/axe-core).
Note that some tests fail intentionally. This is documented in the code.
To run:

```bash
npm run test:e2e
```

## CI tests

Automated accessibility tests can be run in the pipeline with [Pa11y](https://pa11y.org/). 
The automated testing tool used is [HTML_CodeSniffer](https://github.com/squizlabs/HTML_CodeSniffer). 
They need a running dev server.
To run:

```bash
npm run test:ci
```
