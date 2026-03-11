# AI Agent Guidelines for EOxElements

This document provides essential context and instructions for AI agents working on the EOxElements repository. EOxElements is a monorepo containing a collection of web components built with Lit, designed primarily for geospatial and data-oriented applications.

## Repository Architecture

- **Monorepo Structure**: All primary web components (elements) are located in the `/elements` directory (e.g., `/elements/map`, `/elements/layercontrol`).
- **Web Component Framework**: Each element is a **Lit element**.
- **Shared Utilities**: Common logic and styles are located in the `/utils` and `/scripts` directories.

## Development Principles

### 1. Scope of Changes

- **Single Element Focus**: Changes (fixes, features) should ideally concern **only one element at a time**.
- **Atomic PRs**: Each pull request is squashed into a single commit. This commit is used by `release-please` to generate changelog entries and bump versions. Mixing changes from multiple elements in one PR can break this automated release process.

### 2. Commit & PR Conventions

- **Conventional Commits**: All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification (e.g., `feat(map): add new property`, `fix(layercontrol): resolve rendering issue`).
- **PR Titles**: Since PRs are squashed, the **PR title itself must follow the conventional commit format**, as it will become the final commit message in the main branch.

### 3. Documentation (Crucial for MCP Server)

EOxElements uses a Metadata Context Protocol (MCP) server to expose element information. High-quality JSDoc is mandatory.

- **Properties & Attributes**: Describe all properties and attributes in the main element file (usually `src/main.js` or `src/main.ts`).
  - **Attributes**: Use for HTML-compatible values (e.g., strings, numbers, booleans).
  - **Properties**: Use for complex JavaScript objects, arrays, or functions.
- **Methods**: All public methods must be documented with JSDoc, describing parameters and return values.
- **Events**: Events must be documented using the `@fires` tag in the class-level JSDoc. Additionally, ensure `this.dispatchEvent` calls are preceded by JSDoc comments so they are correctly picked up by documentation generators (like the Custom Elements Manifest).
- **Example Stories**: Features must include a descriptive example story in `stories/[element].stories.js`.
  - Use JSDoc at the story level to explain the use case.
  - Ensure the code example is fully functional and follows repository best practices.

### 4. Implementation Workflow & Quality Control

After implementing a fix or feature, you **must** run the following suite of checks to ensure code quality:

1.  **Component Tests**: Run tests specific to the element you modified (e.g., `cd elements/[element] && npm run test`).
2.  **Linting**: Run `npm run lint:fix` from the root to fix style issues.
3.  **Type Checking**: Run `npm run typecheck` to ensure type safety.
4.  **Formatting**: Run `npm run format` to ensure consistent code style.

## Technical Details

- **Custom Elements Manifest**: The project generates a `custom-elements.json` file. Ensure your JSDoc is compatible with `@custom-elements-manifest/analyzer`.
- **Storybook**: Documentation and examples are rendered via Storybook. Always check how your changes reflect in the Storybook args table.
