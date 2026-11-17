# @eox/elements-mcp-app

MCP Apps (`io.modelcontextprotocol/ui`) adapter and `<eox-mcp-app>` custom element for **EOxElements**.

Allows EOxElements (`<eox-map>`, `<eox-layercontrol>`, `<eox-chart>`, `<eox-drawtools>`, and A2UI surfaces via `@eox/elements-a2ui`) to run inside any MCP Apps-compatible host (Claude.ai, ChatGPT, VS Code, etc.) using the official `@modelcontextprotocol/ext-apps` SDK.

## How It Complements `@eox/elements-a2ui`

- **`@eox/elements-a2ui`** handles declarative **UI composition** — rendering A2UI v0.9 JSON streams (`createSurface`, `updateComponents`, `updateDataModel`) into EOxElements via `<eox-a2ui-wrapper>`.
- **`@eox/elements-mcp-app`** handles the **MCP Apps transport & host bridge** — performing the `ui/initialize` handshake over `PostMessageTransport`, forwarding host theme/resize updates, receiving `toolresult` (`structuredContent`) payloads, and sending user interactions (`sendMessage`, `callServerTool`) back to the host.

`<eox-mcp-app>` automatically bridges both worlds:

1. If `structuredContent` contains an A2UI `stream`, `messages`, `components`, or A2UI array, it delegates rendering to `<eox-a2ui-wrapper>`.
2. If `structuredContent` contains direct geospatial or chart payloads (`layers`, `center`, `zoom`, `tile_url`, `bbox`, `geojson`, or `vega_lite_spec` / `spec`), it configures a slotted or auto-instantiated `<eox-map>` (with optional `<eox-layercontrol>`) or `<eox-chart>`.

---

## Installation

```bash
npm install @eox/elements-mcp-app @modelcontextprotocol/ext-apps lit
```

Install the EOxElements you intend to render in your view (for example `@eox/map`, `@eox/layercontrol`, `@eox/chart`, or `@eox/elements-a2ui`).

---

## Usage

### 1. Declarative `<eox-mcp-app>` Custom Element (Zero-Config Auto-Stage)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <eox-mcp-app forward-drawend show-layercontrol></eox-mcp-app>

    <script type="module">
      import "@eox/map";
      import "@eox/layercontrol";
      import "@eox/chart";
      import "@eox/elements-a2ui";
      import "@eox/elements-mcp-app";
    </script>
  </body>
</html>
```

When the MCP host delivers `ui/notifications/tool-result` with `structuredContent`:

- **Geospatial payload**:
  ```json
  {
    "tile_url": "https://titiler.example.com/cog/tiles/{z}/{x}/{y}.png?url=...",
    "bbox": [15.8, 47.9, 16.6, 48.4],
    "layerControl": true
  }
  ```
- **Chart payload**:
  ```json
  {
    "vega_lite_spec": {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "mark": "bar",
      "data": { "values": [{ "a": "A", "b": 28 }] },
      "encoding": { "x": { "field": "a" }, "y": { "field": "b" } }
    }
  }
  ```
- **A2UI payload**:
  ```json
  {
    "components": [
      {
        "id": "root",
        "component": "EOxMap",
        "zoom": 6,
        "center": [16.37, 48.21]
      }
    ]
  }
  ```

### 2. Slotted Composition with Custom Elements

Provide your own slotted `<eox-map>`, `<eox-layercontrol>`, `<eox-chart>`, or `<eox-a2ui-wrapper>` children and `<eox-mcp-app>` will configure them in place:

```html
<eox-mcp-app forward-drawend draw-tool="search_stac_items">
  <eox-map style="height: 460px; display: block;">
    <eox-drawtools
      slot="top-right"
      type="Polygon"
      format="geojson"
    ></eox-drawtools>
  </eox-map>
  <eox-layercontrol></eox-layercontrol>
</eox-mcp-app>
```

### 3. Interactive Event Forwarding

Child elements (slotted or auto-instantiated) can send interactions back to the MCP host:

- **`a2ui-action`** (from `<eox-a2ui-wrapper>`): forwarded via `callServerTool(...)` when `detail.toolName` / `detail.tool` is present, or `sendMessage(...)` otherwise. Disable with `forward-a2ui-actions="false"`.
- **`eox-mcp-message`**: dispatches `sendMessage(event.detail)` (accepts a string, content array, or `{ role, content }`).
- **`eox-mcp-tool-call`**: dispatches `callServerTool(event.detail.name, event.detail.arguments)` and emits `eox-mcp-tool-result` with the response (and updates the view if `detail.updateView` is true).
- **`drawend` / `drawupdate`** (opt-in via `forward-drawend` attribute): sends the drawn GeoJSON + computed `bbox` back via `callServerTool(drawTool, ...)` if `draw-tool` is set, or `sendMessage(...)` otherwise.

### 4. Functional Bridge API

For imperative apps or custom UIs (inspired by `@developmentseed/mcp-view`):

```javascript
import {
  connectMcpApp,
  onToolResult,
  sendMessage,
  callServerTool,
} from "@eox/elements-mcp-app";

const unsubscribe = onToolResult((structuredContent, rawParams) => {
  if (structuredContent?.layers) {
    document.querySelector("eox-map").layers = structuredContent.layers;
  }
});

await connectMcpApp({
  name: "eo-explorer",
  version: "1.0.0",
  autoResize: true, // ResizeObserver height reporting (default: true)
});

// Later, on user interaction:
await sendMessage("User selected Sentinel-2 scene S2A_MSIL2A...");
const stacResult = await callServerTool("search_stac", {
  bbox: [15.8, 47.9, 16.6, 48.4],
});
```

### 5. Standalone Vite `ui://` Single-File Bundle

Build a self-contained HTML bundle for MCP servers (`mimeType: "text/html;profile=mcp-app"`) using Vite + `vite-plugin-singlefile`:

```javascript
// vite.config.js
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
  },
});
```

### 6. Server-Side CSP Metadata (`buildEoxCspMeta`)

MCP servers serving `ui://` resources must declare allowed origins in `_meta.ui.csp`. Use `buildEoxCspMeta(extraOrigins?)` on your server:

```javascript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  registerAppResource,
  registerAppTool,
} from "@modelcontextprotocol/ext-apps/server";
import {
  buildEoxCspMeta,
  MCP_APP_RESOURCE_MIME_TYPE,
} from "@eox/elements-mcp-app";

const server = new McpServer({ name: "eo-server", version: "1.0.0" });

registerAppResource(
  server,
  "EO Map View",
  "ui://eo/map.html",
  { description: "Interactive EOxMap view" },
  async () => ({
    contents: [
      {
        uri: "ui://eo/map.html",
        mimeType: MCP_APP_RESOURCE_MIME_TYPE,
        text: bundledHtml,
        _meta: buildEoxCspMeta([
          "https://earth-search.aws.element84.com",
          "https://titiler.xyz",
        ]),
      },
    ],
  }),
);
```

`buildEoxCspMeta` includes `https://tiles.maps.eox.at`, `https://s2maps-tiles.eu`, `blob:`, and `data:` in `resourceDomains` (and the EOX basemap origins in `connectDomains`), merged with your STAC / TiTiler origins. You can also pass an options object (`{ connectDomains, resourceDomains, frameDomains, baseUriDomains, prefersBorder, domain }`).
