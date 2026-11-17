/**
 * MCP Apps (`io.modelcontextprotocol/ui`) preview resource helpers for `@eox/elements-mcp-server`.
 */

export const EOX_PREVIEW_RESOURCE_URI = "ui://eox-elements/preview";
export const MCP_APP_RESOURCE_MIME_TYPE = "text/html;profile=mcp-app";

export const EOX_PREVIEW_CSP_META = {
  ui: {
    csp: {
      connectDomains: [
        "https://tiles.maps.eox.at",
        "https://s2maps-tiles.eu",
        "https://eox-a.github.io",
      ],
      resourceDomains: [
        "https://tiles.maps.eox.at",
        "https://s2maps-tiles.eu",
        "https://cdn.jsdelivr.net",
        "blob:",
        "data:",
      ],
    },
    prefersBorder: true,
  },
};

/**
 * Build the self-contained HTML view for `ui://eox-elements/preview`.
 *
 * Implements the MCP Apps `postMessage` JSON-RPC 2.0 handshake and renders
 * EOxElements story snippets returned by `get_element_stories`.
 *
 * @returns {string}
 */
export function buildPreviewHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EOxElements Story Preview</title>
  <style>
    :root {
      color-scheme: light dark;
      --bg: var(--color-background-primary, #ffffff);
      --fg: var(--color-text-primary, #0f172a);
      --muted: var(--color-text-secondary, #475569);
      --border: var(--color-border-primary, #e2e8f0);
      --card: var(--color-background-secondary, #f8fafc);
      --accent: #004170;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 16px;
      font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
      background: var(--bg);
      color: var(--fg);
    }
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--border);
    }
    h1 { font-size: 1rem; margin: 0; }
    .badge {
      font-size: 0.75rem;
      padding: 2px 8px;
      border-radius: 999px;
      background: var(--card);
      border: 1px solid var(--border);
      color: var(--muted);
    }
    .stories { display: grid; gap: 12px; }
    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 12px;
    }
    .card h2 { font-size: 0.9rem; margin: 0 0 6px; }
    .card p { font-size: 0.82rem; color: var(--muted); margin: 0 0 8px; }
    pre {
      margin: 0;
      padding: 10px;
      border-radius: 6px;
      background: #0f172a;
      color: #e2e8f0;
      overflow-x: auto;
      font-size: 0.78rem;
      line-height: 1.45;
    }
    .empty { font-size: 0.875rem; color: var(--muted); padding: 12px 0; }
  </style>
</head>
<body>
  <header>
    <h1 id="title">EOxElements Story Preview</h1>
    <span class="badge" id="status">Connecting...</span>
  </header>
  <main id="root" class="stories">
    <div class="empty">Waiting for tool result...</div>
  </main>
  <script>
    (function () {
      const root = document.getElementById("root");
      const titleEl = document.getElementById("title");
      const statusEl = document.getElementById("status");
      let nextId = 1;

      function escapeHtml(str) {
        return String(str)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      }

      function renderStories(data) {
        const stories = Array.isArray(data)
          ? data
          : Array.isArray(data && data.stories)
            ? data.stories
            : [];
        const tag = (data && data.tagName) || (stories[0] && stories[0].element) || "EOxElement";
        titleEl.textContent = "<" + tag + "> Stories";

        if (stories.length === 0) {
          root.innerHTML = '<div class="empty">No stories found for this element.</div>';
          return;
        }

        root.innerHTML = stories
          .map(function (s) {
            const name = escapeHtml(s.name || s.story || "Story");
            const desc = s.description ? "<p>" + escapeHtml(s.description) + "</p>" : "";
            const code = escapeHtml(s.code || s.snippet || JSON.stringify(s, null, 2));
            return (
              '<article class="card">' +
              "<h2>" + name + "</h2>" +
              desc +
              "<pre><code>" + code + "</code></pre>" +
              "</article>"
            );
          })
          .join("");
      }

      function reportSize() {
        const height = Math.ceil(document.documentElement.scrollHeight);
        const width = Math.ceil(window.innerWidth);
        window.parent.postMessage(
          {
            jsonrpc: "2.0",
            method: "ui/notifications/size-changed",
            params: { width: width, height: height },
          },
          "*",
        );
      }

      window.addEventListener("message", function (event) {
        const msg = event.data;
        if (!msg || msg.jsonrpc !== "2.0") return;

        if (msg.id === 1 && msg.result) {
          statusEl.textContent = "Connected";
          window.parent.postMessage(
            { jsonrpc: "2.0", method: "ui/notifications/initialized", params: {} },
            "*",
          );
          reportSize();
          return;
        }

        if (msg.method === "ui/notifications/tool-result" && msg.params) {
          statusEl.textContent = "Loaded";
          let payload = msg.params.structuredContent;
          if (!payload && Array.isArray(msg.params.content)) {
            const textBlock = msg.params.content.find(function (b) {
              return b && b.type === "text" && typeof b.text === "string";
            });
            if (textBlock) {
              try { payload = JSON.parse(textBlock.text); } catch (_) {}
            }
          }
          renderStories(payload);
          reportSize();
        }
      });

      window.parent.postMessage(
        {
          jsonrpc: "2.0",
          id: nextId++,
          method: "ui/initialize",
          params: {
            appInfo: { name: "eox-elements-preview", version: "1.0.0" },
            appCapabilities: {},
            protocolVersion: "2026-01-26",
          },
        },
        "*",
      );

      if (typeof ResizeObserver !== "undefined") {
        new ResizeObserver(reportSize).observe(document.body);
      }
    })();
  </script>
</body>
</html>`;
}

/**
 * Register the `ui://eox-elements/preview` MCP App resource on an `McpServer` instance.
 *
 * @param {import("@modelcontextprotocol/sdk/server/mcp.js").McpServer} server
 */
export function registerEoxPreviewResource(server) {
  server.registerResource(
    "EOxElements Story Preview",
    EOX_PREVIEW_RESOURCE_URI,
    {
      mimeType: MCP_APP_RESOURCE_MIME_TYPE,
      description:
        "Interactive MCP App view for previewing EOxElements story snippets.",
      _meta: EOX_PREVIEW_CSP_META,
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: MCP_APP_RESOURCE_MIME_TYPE,
          text: buildPreviewHtml(),
          _meta: EOX_PREVIEW_CSP_META,
        },
      ],
    }),
  );
}
