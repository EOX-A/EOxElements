# AGENTS.md for EOxElements

Executable reference for AI agents working in this repo. Follow these rules literally.

---

## 1. Before Writing Any Code

Answer these questions in order. Stop if you can't answer one.

1.  **Which element is changing?** Identify the folder in `/elements/` (e.g., `elements/map`).
2.  **Is this a single-element change?** If the request touches multiple elements, state that you will split it into atomic PRs/commits.
3.  **Attributes or Properties?**
    -   Attributes: strings, numbers, booleans (HTML compatible).
    -   Properties: Objects, Arrays, Functions (Complex types).
4.  **What is the minimum change?** State it in one sentence.
5.  **Which existing pattern does this follow?** (e.g., "following logic extraction pattern in `src/methods/`").

If any answer is "I don't know," stop. Ask a clarifying question. Do not guess.

---

## 2. Architectural Boundaries — Rules

### Lit Components (`/elements/*/src/`)

-   **Logic Isolation**: Large methods should be moved to `src/methods/` and imported in the main element class.
-   **Properties & Attributes**:
    -   Always define in the `static get properties()` block.
    -   Use `@property` or `@state` decorators if using TypeScript.
    -   **JSDoc Mandatory**: Every property must have a JSDoc description for the Custom Elements Manifest.
-   **Styles**:
    - **EOxUI First**: This repository uses [EOxUI](https://github.com/EOX-A/EOxUI). Prefer using proper HTML structure and EOxUI classes over writing custom CSS.
    - **Minimal Custom CSS**: Only write custom CSS if the requirement cannot be solved using EOxUI.
    - **Common Styles**: Use `addCommonStylesheet()` from `@eox/elements-utils` in all elements.
    - **Isolation**: Prefer `css` literal for component-specific styles if absolutely necessary.

### Documentation (The "Doc-as-Source" Rule)

EOxElements is integrated with an **MCP Server**. Documentation is code.

-   **Events**: You MUST use `@fires` in the class JSDoc AND include a JSDoc comment directly above the `dispatchEvent` call for it to be indexed.
-   **Methods**: Public methods must have full JSDoc (params, return types).
-   **Custom Elements Manifest**: Ensure your JSDoc is compatible with `@custom-elements-manifest/analyzer`.

### Stories (`/elements/*/stories/`)

-   Every new feature MUST have a story in `[element].stories.js`.
-   Stories must include a **fully functional code example** in the description (rendered in Storybook Docs).
-   **JSDoc at Story Level**: Use JSDoc to explain the specific use case the story demonstrates.

---

## 3. Implementation Workflow

**Touch only what the request requires.** Do not refactor adjacent components.

### Step-by-Step Execution Plan

Before starting, state your plan:
1.  [Logic] -> verify: [run component test]
2.  [UI/Styles] -> verify: [npm run lint:fix]
3.  [Docs/Stories] -> verify: [check JSDoc/story presence]

### Quality Control Pipeline

After every implementation, you **MUST** run:

1.  **Component Tests**: Run tests specific to the element you modified (e.g., `cd elements/[element] && npm run test`).
2.  **Linting**: Run `npm run lint:fix` from the root to fix style issues.
3.  **Type Checking**: Run `npm run typecheck` to ensure type safety.
4.  **Formatting**: Run `npm run format` to ensure consistent code style.

---

## 4. Commit & PR Rules (Strict)

We use `release-please`. Formatting errors here will break the release pipeline.

-   **PR Title**: Must be in Conventional Commit format (e.g., `feat(map): add tooltip property`).
-   **Commit Message**: Same as PR Title. Since we squash, the PR title becomes the commit.
-   **One Element Per PR**: Never mix changes for `map` and `layercontrol` in one PR.

---

## 5. Troubleshooting (When things fail)

-   **Lint failure**: Read the error message literally. Fix only the flagged line. Re-run `npm run lint:fix`.
-   **Typecheck failure**: Ensure types are defined in `types.ts` or `src/main.js` using `@typedef`.
-   **Event not showing in Storybook**: Ensure the `dispatchEvent` has a JSDoc block immediately above it.

---

## 6. Pre-Submission Checklist

- [ ] I changed only ONE element folder.
- [ ] Every property/attribute has a JSDoc description.
- [ ] Every new event has an `@fires` tag AND a JSDoc block above `dispatchEvent`.
- [ ] Functional story added to `stories/` with a code example.
- [ ] `npm run lint:fix`, `typecheck`, and `format` passed.
- [ ] PR title/commit message follows `type(scope): message` format.
- [ ] I have verified that `addCommonStylesheet()` is used for common styles.
