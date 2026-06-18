# @eox/elements-a2ui

A2UI compatibility integration for EOxElements.

Allows rendering any EOxElement (like `<eox-map>`, `<eox-chart>`, `<eox-layercontrol>`, etc.) dynamically from an A2UI JSON stream using `@a2ui/lit` and `@a2ui/web_core`.

## Features

- **Generic Wrapper Custom Element**: Renders and dynamically binds all A2UI evaluated properties and attributes to the underlying EOxElement.
- **Auto-generated Custom Catalog**: Automatically parses `custom-elements.json` metadata to generate a highly precise A2UI custom catalog containing strict Zod property schemas and annotations.
- **Combined Catalog**: Pre-configured merged catalog of standard A2UI `basicCatalog` and `eoxCatalog` for seamless multi-catalog applications.
- **Wrapper Custom Element**: Exported as `<eox-a2ui-wrapper>`, allowing you to easily pass an A2UI JSON stream of actions/updates directly to render EOxElements in your page.
- **Markdown Rendering Support**: Integrates `@a2ui/markdown-it` out of the box to render rich text blocks (such as headings `h1`, `h2`, etc.) as styled DOM elements rather than raw markdown.

---

## Installation

Install `@eox/elements-a2ui` alongside `@a2ui/lit` and `@a2ui/web_core`:

```bash
npm install @eox/elements-a2ui @a2ui/lit @a2ui/web_core
```

---

## Usage

### 1. Using `<eox-a2ui-wrapper>` (Simplest Method)

Simply place `<eox-a2ui-wrapper>` in your HTML and set its `stream` or `messages` property (or attribute as a JSON string) with the A2UI message list.

```html
<script type="module">
  import "@eox/elements-a2ui";
  import "@eox/elements/map"; // Make sure the actual EOxElements are loaded
</script>

<!-- Alternatively, to load directly from a CDN (bundled self-contained version): -->
<!--
<script type="module" src="https://cdn.jsdelivr.net/npm/@eox/elements-a2ui/dist/eox-elements-a2ui.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@eox/map/dist/eox-map.js"></script>
-->

<eox-a2ui-wrapper id="my-a2ui-renderer"></eox-a2ui-wrapper>

<script>
  const renderer = document.getElementById("my-a2ui-renderer");

  // A2UI JSON stream/messages
  renderer.stream = [
    {
      createSurface: {
        surfaceId: "main_surface",
        catalogId: "https://eox.at/specification/v0_9/combined_catalog.json",
        sendDataModel: true,
      },
    },
    {
      updateComponents: {
        surfaceId: "main_surface",
        components: [
          {
            id: "root",
            component: "EOxMap",
            zoom: 6,
            center: [16.37, 48.21], // Vienna
            unstyled: false,
          },
        ],
      },
    },
  ];
</script>
```

### 2. Custom Integration in an existing `@a2ui/lit` application

To add EOxElements support to your existing `@a2ui/lit` application, use the exported `combinedCatalog` or `mergeCatalogs` helper:

```javascript
import { MessageProcessor } from "@a2ui/web_core/v0_9";
import { combinedCatalog } from "@eox/elements-a2ui";

// Register the generic EOxA2uiElement wrapper
import "@eox/elements-a2ui";

// Initialize MessageProcessor with the combined catalog
const processor = new MessageProcessor([combinedCatalog]);
```

Then render it in your Lit template:

```javascript
import { html, LitElement } from "lit";

class MyPage extends LitElement {
  render() {
    const surface = processor.model.getSurface("main_surface");
    return html` <a2ui-surface .surface=${surface}></a2ui-surface> `;
  }
}
```

---

## Development & Catalog Generation

To update or regenerate the catalog definition from `custom-elements.json`, run the build script:

```bash
# In the repository root
npm run build -w @eox/elements-a2ui
```

This reads `custom-elements.json` and updates `src/generated-catalog.js` with all current EOxElements and their schemas.
