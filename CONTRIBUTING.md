# Contributing to EOxElements

Thank you for your interest in contributing to EOxElements! This document outlines the process for contributing to our collection of web components.

## 1. Repository Overview

EOxElements is a monorepo containing various web components (stored in the `/elements` folder) built with [Lit](https://lit.dev/). Each element is an independent package but shares common utilities and deployment processes.

## 2. Development Workflow

### 1. Initial Setup

In order to use npm workspaces and all the elements properly, please use **Node.js >= 20.19.0 LTS**.

Install all root and all element dependencies:

```bash
npm install
```

### 2. Monorepo Structure

- Each package (element) is located in the `/elements` directory.
- **Run all commands from the root level**: This repository uses npm workspaces, but testing is handled via a root Cypress configuration.
- To run component tests for a specific element: `npx cypress run --component --spec "elements/[element-name]/test/*.cy.js"`.
- To build an element: `npm run build -w @eox/<element-name>`.

### 3. Branching & Changes

- **Focus on One Element**: Each PR should ideally address changes for a single element. This ensures that the generated changelogs (managed by `release-please`) are accurate and that version bumps are correctly applied.
- **Branch naming convention**: inspired by [this article](https://betterprogramming.pub/enabling-monorepo-with-a-simple-single-github-repository-39bc6347abba#391d). Please name your branches `<element>/<changetype>/<name>`:
  - `map/feature/new-feature`
  - `map/fix/some-fix`
  - `chart/feature/new-feature`
  - `chart/fix/some-fix`

### 4. Development Commands

#### Dev server (Storybook)

To start the storybook dev server, use:

```bash
npm start
```

This opens the storybook server on localhost (port 6006). Edit the corresponding element `*.stories.js` files to create and work on multiple states of an element.

#### Testing

You can run individual tests using the Cypress testing GUI or CLI:

**CLI (Component Tests):**

```bash
npx cypress run --component --spec "elements/[element-name]/test/*.cy.js"
```

**GUI:**

```bash
npm run cypress
```

**Automated tests:**

```bash
npm run test:all       # Both component & E2E
npm run test:component # Only component tests
npm run test:e2e       # Only E2E tests (requires build/watch)
```

#### Useful commands

- **Format**: `npm run format`
- **Lint/Fix**: `npm run lint:fix`
- **Type checking**: `npm run typecheck`
- **Generate types**: `npm run types:generate:all`

### 5. Bootstrapping a new element

In essence, all what is needed is a new subfolder in the [`/elements` directory](./elements/). Additionally, it is recommended to also add the corresponding entries in [preview.js](./.storybook/preview.js) (to have a centralized place for all the element imports into storybook) and [release-please-config.json](./release-please-config.json) (for release automation). Some more recommendations include:

- the preferred language for new elements is JS + [JSDoc](https://jsdoc.app/) (for type checking with TypeScript)
- the preferred bundler is [Vite](https://github.com/vitejs/vite)
- component tests (done via [Cypress](https://github.com/cypress-io/cypress)) should only test the specific element, everything else is ideally mocked
- if needed, webcomponent-creating frameworks such as [lit](https://github.com/lit/lit) are handy

Some things are handled by the root "system":

- testing (centralized Cypress setup, automatically looking for `*.cy.js` files inside `elements` subfolder)
- linting & formatting (scripts in root [package.json](./package.json) - see section above)
- storybook (centralized Storybook setup, automatically looking for `*.stories.js` files inside `elements` subfolder)

### 6. Code Standards & Documentation

- **Styling with EOxUI**: We use the [EOxUI](https://github.com/EOX-A/EOxUI) style framework.
  - **No Custom CSS by Default**: Prefer using standard HTML structure and EOxUI classes. Custom CSS should only be added if the requirement cannot be solved using EOxUI.
  - **Common Styles**: Always include `addCommonStylesheet()` from `@eox/elements-utils` in all elements.
- **JSDoc**: All public properties, attributes, methods, and events must be documented using JSDoc in the main component file.
  - **Attributes**: Used for string, number, and boolean values compatible with HTML attributes.
  - **Properties**: Used for complex objects, arrays, and functions.
- **Example Stories**: Features should include a functional, well-documented story in `stories/[element].stories.js`. This is essential for both Storybook documentation and our Metadata Context Protocol (MCP) server integration.
- **Tests**: Fixes should include additional tests, and features should come with comprehensive test coverage and descriptive example stories.

### 7. Post-Development Checklist

Before submitting your PR, ensure the following pass:

1.  **Component Tests**: `npx cypress run --component --spec "elements/[element-name]/test/*.cy.js"` from the root.
2.  **Linting**: `npm run lint:fix` (from the root).
3.  **Type Checking**: `npm run typecheck` (from the root).
4.  **Formatting**: `npm run format` (from the root).

## 4. AI Use Policy

AI tools are part of modern development workflows and contributors may use them. However, all contributions must meet EOxElements quality standards regardless of how they were created.

### Guidelines

AI-assisted development is acceptable when used responsibly. Contributors must:

- **Test all code thoroughly**: Submit only code you have verified works correctly (Cypress tests, Storybook stories).
- **Understand your contributions**: You must be able to explain the Lit lifecycle, JSDoc metadata, and element-specific code (e.g. Vega-, OpenLayers, JSON Editor-specific logic) you submit.
- **Write clear, concise PR descriptions** in your own words. Automated AI-generated descriptions that are overly verbose or generic are not acceptable.
- **Take responsibility** for code quality, correctness, and maintainability.

### Unacceptable Submissions

Pull requests may be closed without review if they contain:

- Untested code or logic.
- Verbose AI-generated descriptions.
- Incorrect JSDoc that breaks the Custom Elements Manifest or MCP server.
- Evidence that the contributor does not understand the submitted logic.

## 5. Getting Help

- **Questions?** Open an [issue](https://github.com/EOX-A/EOxElements/issues) or start a discussion.
- **Found a bug?** Open an [issue](https://github.com/EOX-A/EOxElements/issues) with a reproduction case.

## 6. Licensing

By contributing to EOxElements, you agree that your contributions will be licensed under the repository's [LICENSE](LICENSE).
