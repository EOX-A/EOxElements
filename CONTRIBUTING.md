# Contributing to EOxElements

Thank you for your interest in contributing to EOxElements! This document outlines the process for contributing to our collection of web components.

## Repository Overview

EOxElements is a monorepo containing various web components (stored in the `/elements` folder) built with [Lit](https://lit.dev/). Each element is an independent package but shares common utilities and deployment processes.

## Development Workflow

### 1. Monorepo Structure

- Each package (element) is located in the `/elements` directory.
- Run commands from the root for global tasks (linting, formatting).
- Run commands from individual element directories for package-specific tasks (testing, building).

### 2. Making Changes

- **Focus on One Element**: Each PR should ideally address changes for a single element. This ensures that the generated changelogs (managed by `release-please`) are accurate and that version bumps are correctly applied.
- **Branching Strategy**: Create a feature or fix branch from the main branch.

### 3. Commit & PR Guidelines

- **Conventional Commits**: We use [Conventional Commits](https://www.conventionalcommits.org/).
  - Example: `feat(map): add support for new layer type`
  - Example: `fix(layercontrol): resolved z-index issue`
- **PR Titles**: Since all PRs are **squashed**, the **PR title must follow the conventional commit format**. The title will be the commit message that triggers the release.

### 4. Code Standards & Documentation

- **Styling with EOxUI**: We use the [EOxUI](https://github.com/EOX-A/EOxUI) style framework.
  - **No Custom CSS by Default**: Prefer using standard HTML structure and EOxUI classes. Custom CSS should only be added if the requirement cannot be solved using EOxUI.
  - **Common Styles**: Always include `addCommonStylesheet()` from `@eox/elements-utils` in all elements.
- **JSDoc**: All public properties, attributes, methods, and events must be documented using JSDoc in the main component file.
  - **Attributes**: Used for string, number, and boolean values compatible with HTML attributes.
  - **Properties**: Used for complex objects, arrays, and functions.
- **Example Stories**: Features should include a functional, well-documented story in `stories/[element].stories.js`. This is essential for both Storybook documentation and our Metadata Context Protocol (MCP) server integration.
- **Tests**: Fixes should include additional tests, and features should come with comprehensive test coverage and descriptive example stories.

### 5. Post-Development Checklist

Before submitting your PR, ensure the following pass:

1.  **Component Tests**: `npm run test` (within the specific element folder).
2.  **Linting**: `npm run lint:fix` (from the root).
3.  **Type Checking**: `npm run typecheck` (from the root).
4.  **Formatting**: `npm run format` (from the root).

## Licensing

By contributing to EOxElements, you agree that your contributions will be licensed under the repository's [LICENSE](LICENSE).
