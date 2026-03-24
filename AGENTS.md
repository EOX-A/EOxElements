# AGENTS.md for EOxElements

Executable reference for AI agents working in this repo. Follow these rules literally.

---

## 1. Before Writing Any Code

Answer these questions in order. Stop if you can't answer one.

1.  **Which element is changing?** Identify the folder in `/elements/` (e.g., `elements/map`).
2.  **Is this a single-element change?** If the request touches multiple elements, state that you will split it into atomic PRs/commits.
3.  **New/changed attributes or properties?**
    - Attributes: strings, numbers, booleans (HTML compatible).
    - Properties: Objects, Arrays, Functions (Complex types).
4.  **What is the minimum change?** State it in one sentence.
5.  **Which existing pattern does this follow?** (e.g., "following logic extraction pattern in `src/methods/`").

If any answer is "I don't know," stop. Ask a clarifying question. Do not guess.

---

## 2. Project Overview

**EOxElements** is an npm workspaces monorepo containing **multiple published web component packages** under the `@eox/` scope, plus a shared utilities package (`@eox/elements-utils`) and an MCP server (`@eox/elements-mcp-server`).

- **Package name:** `@eox/elements` (private, not published)
- **Module system:** ESM (`"type": "module"`)
- **Node requirement:** `>=20.19.0` (enforced via `engine-strict=true` in `.npmrc`)
- **Component framework:** [Lit](https://lit.dev/) (v3.2+)
- **Language:** JavaScript with JSDoc type annotations (NOT TypeScript source files)

## 3. Technology Stack

| Category            | Technology                                      |
| ------------------- | ----------------------------------------------- |
| Component framework | Lit 3.2+ (LitElement)                           |
| Language            | JavaScript + JSDoc (type-checked by TypeScript) |
| Bundler             | Vite (library mode per element)                 |
| Type checker        | TypeScript (checkJs mode, no .ts source)        |
| Test runner         | Cypress (component + E2E)                       |
| Component mounting  | cypress-lit                                     |
| Coverage            | Istanbul (vite-plugin-istanbul) + NYC           |
| Storybook           | @storybook/web-components-vite (v10)            |
| Linting             | ESLint (flat config) + @eox/eslint-config       |
| Formatting          | Prettier                                        |
| Release             | release-please (per-package automated releases) |
| CI/CD               | GitHub Actions                                  |
| Design system       | @eox/ui (CSS variables + fonts)                 |

---

## 4. Architectural Boundaries & Patterns

### Element Anatomy

Every element follows a consistent directory layout:

```
elements/<name>/
├── package.json              # @eox/<name>, main: ./src/main.js
├── vite.config.js            # Vite library build config
├── tsconfig.build.json       # TypeScript config for .d.ts generation
├── src/
│   ├── main.js               # Main LitElement class + customElements.define()
│   ├── types.ts              # TypeScript type definitions (if needed)
│   ├── style.js              # Base/functional CSS (always applied)
│   ├── style.eox.js          # Branded/themed CSS (unless `unstyled`)
│   ├── enums/                # Constants and defaults (e.g. index.js, frozen objects)
│   ├── helpers/              # Pure utility functions
│   ├── methods/              # Extracted component logic (e.g., domain/index.js)
│   └── components/           # Sub-components (if decomposed)
├── stories/                  # Storybook stories (*.stories.js)
└── test/                     # Cypress component tests (*.cy.js)
    ├── cases/                # Test case implementations (extracted logic)
    └── fixtures/             # JSON/image test fixtures
```

### Web Component Definition Pattern

Every element follows this structure in `src/main.js`:

```javascript
import { LitElement, html, nothing } from "lit";
// ... imports

/**
 * @element eox-example
 * @fires {CustomEvent} change - Fired when the value changes
 */
export class EOxExample extends LitElement {
  static get properties() {
    return {
      prop: { attribute: false, type: Array },
      unstyled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.prop = [];
    this.unstyled = false;
  }

  // Lifecycle and Logic...

  render() {
    return html`
      <style>
        ${style} ${!this.unstyled && styleEOX}
      </style>
      <div>...</div>
    `;
  }
}

customElements.define("eox-example", EOxExample);
```

### Key Rules for Implementation

- **No TypeScript Code**: Use JSDoc for types. Do NOT use TypeScript decorators (`@property`, `@state`) or `.ts` files for logic. TypeScript is used only for type definitions (`types.ts`, `@typedef`).
- **Reactive Properties**: Always use `static get properties()` or `static properties = {}`. Lit decorators are NOT used anywhere in the codebase. Use `attribute: false` for complex Object/Array types.
- **Method Delegation (Most Important Pattern)**: Extract business logic to standalone functions in `src/methods/<domain>/` directories.
  - Functions MUST receive the component instance (`this`) as a parameter, e.g., `export function setCenterMethod(center, EOxMap) { ... }`.
  - The component class calls these from its setters/lifecycle, passing `this`.
  - Re-export methods via barrel `index.js` files.
- **Enums & Constants**: Do NOT use TypeScript enums. Constants live in `src/enums/` as frozen JavaScript objects with `SCREAMING_SNAKE_CASE` naming.
- **Inter-Component Communication**: Components depending on `<eox-map>` use a standardized `for` property (a CSS selector defaulting to `"eox-map"`). In `firstUpdated()`, call `getElement(this.for)` from `@eox/elements-utils` to resolve the reference, even across shadow boundaries. Address re-resolution on property change in `updated()`.
- **Styling**:
  - **EOxUI First**: This repository uses [EOxUI](https://github.com/EOX-A/EOxUI). Prefer using proper HTML structure and EOxUI classes over writing custom CSS.
  - **Minimal Custom CSS**: Only write custom CSS if the requirement cannot be solved using EOxUI.
  - **Common Styles**: Use `addCommonStylesheet()` from `@eox/elements-utils` in all elements.
  - **Isolation**: Prefer `css` literal for component-specific styles if absolutely necessary.
- **Shadow DOM**: Use `createRenderRoot() { return this.noShadow ? this : super.createRenderRoot(); }` if needed. Use `bubbles: true, composed: true` when events need to cross shadow DOM boundaries.
- **Testing Structure**: `.cy.js` files define `describe`/`it` structure only. Test logic MUST be extracted into standalone functions inside `test/cases/` and re-exported via barrier `index.js` files. There is no Jest/Vitest. Web components are mounted via `cypress-lit`.

### Documentation & Stories

#### Documentation (The "Doc-as-Source" Rule)

EOxElements is integrated with an **MCP Server**. Documentation is code.

- **Events**: You MUST use `@fires` in the class JSDoc AND include a JSDoc comment directly above the `dispatchEvent` call for it to be indexed.
- **Methods**: Public methods must have full JSDoc (params, return types).
- **Custom Elements Manifest**: Ensure your JSDoc is compatible with `@custom-elements-manifest/analyzer`.

#### Stories (`/elements/*/stories/`)

- Every new feature MUST have a story in `[element].stories.js`.
- Stories must include a **fully functional code example** in the description (rendered in Storybook Docs).
- **JSDoc at Story Level**: Use JSDoc to explain the specific use case the story demonstrates. The text must include enough information so that a coding agent can find and use the story as an example for including the EOxElement in a downstream application.

---

## 5. Implementation Workflow

**Touch only what the request requires.** Do not refactor adjacent components.

### Step-by-Step Execution Plan

Before starting, state your plan:

1.  [Logic] -> verify: [run component test]
2.  [UI/Styles] -> verify: [npm run lint:fix]
3.  [Docs/Stories] -> verify: [check JSDoc/story presence]

### Quality Control Pipeline

After every implementation, you **MUST** run:

1.  **Component Tests**: Run tests from the root level for the specific element workspace.
    - Run all component tests (if necessary): `npm run test:component`
    - Run tests for a specific element (preferred): `npx cypress run --component --spec "elements/[element]/test/*.cy.js"`
2.  **Linting**: Run `npm run lint:fix` from the root to fix style issues.
3.  **Type Checking**: Run `npm run typecheck` to ensure type safety.
4.  **Formatting**: Run `npm run format` to ensure consistent code style.

---

## 6. Commit & PR Rules (Strict)

We use `release-please`. Formatting errors here will break the release pipeline.

- **PR Title**: Must be in Conventional Commit format (e.g., `feat: add tooltip property`).
- **Commit Message**: Same as PR Title. Since we squash, the PR title becomes the commit.
- **One Element Per PR**: Never mix changes for e.g. `map` and `layercontrol` in one PR.

---

## 7. Troubleshooting (When things fail)

- **Lint failure**: Read the error message literally. Fix only the flagged line. Re-run `npm run lint:fix`.
- **Typecheck failure**: Ensure types are defined in `types.ts` or `src/main.js` using `@typedef`.
- **Event not showing in Storybook**: Ensure the `dispatchEvent` has a JSDoc block immediately above it.

---

## 8. Pre-Submission Checklist

- [ ] I changed only ONE element folder.
- [ ] Every property/attribute has a JSDoc description.
- [ ] Every new event has an `@fires` tag AND a JSDoc block above `dispatchEvent`.
- [ ] Functional story added to `stories/` with a code example.
- [ ] `npm run lint:fix`, `typecheck`, and `format` passed.
- [ ] PR title/commit message follows `type(scope): message` format.
- [ ] I have verified that `addCommonStylesheet()` is used for common styles.

---

## 9. Common Pitfalls

1. **Do NOT use TypeScript source files** — write `.js` with JSDoc annotations. Only use `.ts` for type definitions.
2. **Do NOT use Lit decorators** — use `static get properties()` or `static properties = {}` instead.
3. **Do NOT create custom base classes or mixins** — extend `LitElement` directly and use the method extraction pattern for shared logic.
4. **Do NOT use centralized state management** — use LitElement's reactive properties and custom events.
5. **Do NOT forget `addCommonStylesheet()`** — call it in `style.eox.js` for consistent global styles.
6. **Do NOT skip the `unstyled` property** — every component must support disabling branded styling.
7. **Do NOT register custom elements anywhere other than the bottom of `main.js`**.
8. **Do NOT use default exports for component classes** — use named exports.
9. **Always use barrel `index.js` files** in `helpers/`, `methods/`, and `enums/` directories.
10. **Always pass the component instance as a parameter** to extracted method functions (never rely on `this` binding in separate files).
