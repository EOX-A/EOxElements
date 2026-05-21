#!/usr/bin/env node
import { z } from "zod";
import { randomUUID } from "crypto";
import express from "express";
import cors from "cors";

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js";
import fs from "fs";

const port = 3000;

async function main() {
  let elementsData;
  const manifestArgIndex = process.argv.indexOf("--manifest");
  let manifestPath;

  if (manifestArgIndex > -1) {
    // Get the file path from the next argument
    manifestPath = process.argv[manifestArgIndex + 1];
  }

  if (manifestPath) {
    try {
      const data = fs.readFileSync(manifestPath, "utf8");
      elementsData = JSON.parse(data);
    } catch (err) {
      console.log(`Error reading or parsing ${manifestPath}:`, err);
      elementsData = { modules: [] };
    }
  } else {
    try {
      const response = await fetch(
        "https://eox-a.github.io/EOxElements/custom-elements.json",
      );
      elementsData = await response.json();
    } catch (err) {
      console.log("Error fetching or parsing custom-elements.json:", err);
      elementsData = { modules: [] };
    }
  }

  // Load snippets data
  let snippetsData;
  const snippetsArgIndex = process.argv.indexOf("--snippets");
  let snippetsPath;

  if (snippetsArgIndex > -1) {
    snippetsPath = process.argv[snippetsArgIndex + 1];
  }

  if (snippetsPath) {
    try {
      const data = fs.readFileSync(snippetsPath, "utf8");
      snippetsData = JSON.parse(data);
    } catch (err) {
      console.log(`Error reading or parsing ${snippetsPath}:`, err);
      snippetsData = [];
    }
  } else {
    // Try to find story-snippets.json in the current working directory
    const localSnippetsPath = "story-snippets.json";
    if (fs.existsSync(localSnippetsPath)) {
      try {
        const data = fs.readFileSync(localSnippetsPath, "utf8");
        snippetsData = JSON.parse(data);
        console.log(`Loaded snippets from local ${localSnippetsPath}`);
      } catch (err) {
        console.log(
          `Error reading or parsing local ${localSnippetsPath}:`,
          err,
        );
        snippetsData = [];
      }
    } else {
      try {
        const response = await fetch(
          "https://eox-a.github.io/EOxElements/story-snippets.json",
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        snippetsData = await response.json();
      } catch (err) {
        console.log("Error fetching or parsing story-snippets.json:", err);
        snippetsData = [];
      }
    }
  }

  const getElementData = (tagName) => {
    if (!elementsData || !elementsData.modules) {
      return null;
    }
    for (const module of elementsData.modules) {
      for (const declaration of module.declarations) {
        if (declaration.tagName === tagName) {
          return declaration;
        }
      }
    }
    return null;
  };

  // Create an MCP server factory and register tools
  const createMcpServer = () => {
    const server = new McpServer(
      {
        name: "eox-elements-mcp-server",
        version: "1.0.0",
        instructions:
          "These tools provide information about EOxElements custom elements. You can list all elements, get details about a specific element, and more.",
      },
      {
        capabilities: {
          tools: {
            call: {},
          },
        },
      },
    );

    server.registerTool(
      "list_elements",
      {
        description: "List all available EOxElements custom elements.",
        inputSchema: z.object({}),
      },
      async () => ({
        content: [
          {
            type: "text",
            text: elementsData.modules
              .flatMap((m) => m.declarations)
              .map((d) => d.tagName)
              .filter(Boolean)
              .join("\n"),
          },
        ],
      }),
    );

    server.registerTool(
      "get_element_details",
      {
        description:
          "Get the full details for a specific EOxElements custom element.",
        inputSchema: z.object({
          tagName: z.string().describe("The tag name of the element."),
        }),
      },
      async ({ tagName }) => ({
        content: [
          {
            type: "text",
            text: JSON.stringify(getElementData(tagName), null, 2),
          },
        ],
      }),
    );

    server.registerTool(
      "get_element_stories",
      {
        description:
          "Get the stories (examples/snippets) for a specific EOxElements custom element. This includes descriptions and vanilla JS code snippets.",
        inputSchema: z.object({
          tagName: z.string().describe("The tag name of the element."),
        }),
      },
      async ({ tagName }) => {
        const stories = snippetsData.filter((s) => s.element === tagName);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(stories, null, 2),
            },
          ],
        };
      },
    );

    server.registerTool(
      "get_element_attributes",
      {
        description:
          "Get the attributes for a specific EOxElements custom element.",
        inputSchema: z.object({
          tagName: z.string().describe("The tag name of the element."),
        }),
      },
      async ({ tagName }) => {
        const element = getElementData(tagName);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(element?.attributes || [], null, 2),
            },
          ],
        };
      },
    );

    server.registerTool(
      "get_element_properties",
      {
        description:
          "Get the properties for a specific EOxElements custom element.",
        inputSchema: z.object({
          tagName: z.string().describe("The tag name of the element."),
        }),
      },
      async ({ tagName }) => {
        const element = getElementData(tagName);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                element?.members?.filter((m) => m.kind === "field") || [],
                null,
                2,
              ),
            },
          ],
        };
      },
    );

    server.registerTool(
      "get_element_events",
      {
        description:
          "Get the events for a specific EOxElements custom element.",
        inputSchema: z.object({
          tagName: z.string().describe("The tag name of the element."),
        }),
      },
      async ({ tagName }) => {
        const element = getElementData(tagName);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(element?.events || [], null, 2),
            },
          ],
        };
      },
    );

    server.registerTool(
      "get_element_methods",
      {
        description:
          "Get the methods for a specific EOxElements custom element.",
        inputSchema: z.object({
          tagName: z.string().describe("The tag name of the element."),
        }),
      },
      async ({ tagName }) => {
        const element = getElementData(tagName);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                element?.members?.filter((m) => m.kind === "method") || [],
                null,
                2,
              ),
            },
          ],
        };
      },
    );

    server.registerTool(
      "get_element_slots",
      {
        description: "Get the slots for a specific EOxElements custom element.",
        inputSchema: z.object({
          tagName: z.string().describe("The tag name of the element."),
        }),
      },
      async ({ tagName }) => {
        const element = getElementData(tagName);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(element?.slots || [], null, 2),
            },
          ],
        };
      },
    );

    server.registerTool(
      "get_element_css_properties",
      {
        description:
          "Get the CSS custom properties for a specific EOxElements custom element.",
        inputSchema: z.object({
          tagName: z.string().describe("The tag name of the element."),
        }),
      },
      async ({ tagName }) => {
        const element = getElementData(tagName);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(element?.cssProperties || [], null, 2),
            },
          ],
        };
      },
    );

    server.registerTool(
      "get_element_css_parts",
      {
        description:
          "Get the CSS shadow parts for a specific EOxElements custom element.",
        inputSchema: z.object({
          tagName: z.string().describe("The tag name of the element."),
        }),
      },
      async ({ tagName }) => {
        const element = getElementData(tagName);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(element?.cssParts || [], null, 2),
            },
          ],
        };
      },
    );

    return server;
  };

  // Create the express app from scratch
  const app = express();
  app.use(
    cors({
      origin: "*",
      exposedHeaders: ["mcp-session-id", "Mcp-Session-Id"],
    }),
  );
  app.use(express.json()); // IMPORTANT: To parse JSON request bodies

  app.get("/health", (req, res) => {
    res.json({ message: "EOxElements MCP Server is running" });
  });

  const transports = {};

  // MCP routes
  app.post("/", async (req, res) => {
    const sessionId = req.headers["mcp-session-id"];
    let transport = transports[sessionId];

    if (!transport) {
      if (isInitializeRequest(req.body)) {
        transport = new StreamableHTTPServerTransport({
          sessionIdGenerator: () => {
            const newId = randomUUID();
            return newId;
          },
          onsessioninitialized: (newSessionId) => {
            transports[newSessionId] = transport;
            transport.onclose = () => {
              delete transports[newSessionId];
            };
          },
        });
        const server = createMcpServer();
        await server.connect(transport);
        await transport.handleRequest(req, res, req.body);
        return;
      } else {
        res.status(400).json({ error: "No session found" });
        return;
      }
    }
    await transport.handleRequest(req, res, req.body);
  });

  app.get("/", async (req, res) => {
    const sessionId = req.headers["mcp-session-id"];
    const transport = transports[sessionId];
    if (!transport) {
      const accept = req.headers.accept || "";
      if (accept.includes("text/event-stream")) {
        res.writeHead(200, {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        });
        res.write(": welcome\n\n");
        res.end();
        return;
      }

      res.setHeader("Content-Type", "text/html");
      res.send(generateLandingPage(elementsData, snippetsData));
      return;
    }
    await transport.handleRequest(req, res);
  });

  app.delete("/", async (req, res) => {
    const sessionId = req.headers["mcp-session-id"];
    const transport = transports[sessionId];
    if (!transport) {
      res.status(400).send("No session found");
      return;
    }
    await transport.handleRequest(req, res);
  });

  app.listen(port, () => {
    console.log(`MCP server listening at http://localhost:${port}`);
  });
}

function generateLandingPage(elementsData, snippetsData) {
  const elements = elementsData?.modules
    ? elementsData.modules
        .flatMap((m) => m.declarations || [])
        .filter((d) => d.tagName)
    : [];

  const totalElements = elements.length;
  const totalSnippets = snippetsData?.length || 0;

  // List elements nicely
  const elementCards = elements
    .map((el) => {
      return `
      <div class="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between">
        <div>
          <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-3">&lt;${el.tagName}&gt;</span>
          <h3 class="text-base font-semibold text-slate-900 mb-1">${el.name || el.tagName}</h3>
          <p class="text-xs text-slate-500 line-clamp-2 mb-4">${el.description || "No description available."}</p>
        </div>
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>${el.attributes?.length || 0} attributes</span>
          <span>${el.events?.length || 0} events</span>
        </div>
      </div>
    `;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="en" class="h-full bg-slate-50">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EOxElements MCP Server</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
    }
    code, pre {
      font-family: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body class="min-h-full flex flex-col">
  <!-- Header -->
  <header class="bg-slate-900 text-white py-6 shadow-md border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <div class="bg-blue-600 text-white font-black p-2 rounded-lg text-lg tracking-wider">EOX</div>
        <div>
          <h1 class="text-xl font-bold tracking-tight">Elements MCP Server</h1>
          <p class="text-xs text-slate-400">Model Context Protocol for Web Components</p>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <span class="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
          Active
        </span>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
    <!-- Intro and Stats -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
        <div>
          <h2 class="text-lg font-semibold text-slate-950 mb-3">About this Server</h2>
          <p class="text-sm text-slate-600 leading-relaxed mb-4">
            This server implements the <a href="https://modelcontextprotocol.io" target="_blank" class="text-blue-600 hover:underline font-medium">Model Context Protocol (MCP)</a>, providing a bridge between LLMs (like Claude, GPT, etc.) and the <strong>EOxElements</strong> component library.
          </p>
          <p class="text-sm text-slate-600 leading-relaxed">
            Through rich metadata, descriptions, real-world stories, and usage code snippets, coding agents can effortlessly explore, instantiate, configure, and troubleshoot EOxElements custom elements in any web environment.
          </p>
        </div>
        <div class="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-3">
          <a href="https://github.com/EOX-A/EOxElements" target="_blank" class="inline-flex items-center text-xs font-medium text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-md transition-colors">
            <svg class="h-4 w-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
            GitHub Repository
          </a>
          <a href="https://eox-a.github.io/EOxElements/" target="_blank" class="inline-flex items-center text-xs font-medium text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-md transition-colors">
            <svg class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9m-1.35 18.663a17.57 17.57 0 0 0 2.7 0" /></svg>
            Live Documentation & Storybook
          </a>
        </div>
      </div>

      <!-- Quick Stats Card -->
      <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white shadow-lg flex flex-col justify-between">
        <h2 class="text-sm font-semibold text-slate-400 tracking-wider uppercase mb-4">Registry Overview</h2>
        <div class="grid grid-cols-2 gap-4 my-auto">
          <div class="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <div class="text-2xl font-bold text-blue-400">${totalElements}</div>
            <div class="text-xs text-slate-400 mt-1">Custom Elements</div>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <div class="text-2xl font-bold text-teal-400">${totalSnippets}</div>
            <div class="text-xs text-slate-400 mt-1">Story Snippets</div>
          </div>
        </div>
        <div class="mt-4 pt-4 border-t border-slate-700/40 text-xs text-slate-400 flex justify-between items-center">
          <span>Manifest mode:</span>
          <span class="font-mono text-slate-200 bg-slate-800 px-2 py-0.5 rounded">${elementsData?.modules ? "Local File/Loaded" : "Remote Fetch"}</span>
        </div>
      </div>
    </div>

    <!-- How to use -->
    <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <h2 class="text-lg font-semibold text-slate-950 mb-4">Connect EOxElements to your Coding Agent</h2>
      <p class="text-sm text-slate-600 mb-6">
        To use these tools with <strong>Claude Desktop</strong>, add the following configuration to your <code>claude_desktop_config.json</code>:
      </p>
      <div class="relative bg-slate-900 rounded-lg p-4 overflow-x-auto text-xs text-slate-300">
        <pre><code class="language-json">{
  "mcpServers": {
    "eox-elements": {
      "command": "node",
      "args": [
        "/absolute/path/to/EOxElements/mcp-server/index.js",
        "--manifest",
        "/absolute/path/to/EOxElements/custom-elements.json",
        "--snippets",
        "/absolute/path/to/EOxElements/story-snippets.json"
      ]
    }
  }
}</code></pre>
      </div>
    </div>

    <!-- Registered Tools -->
    <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <h2 class="text-lg font-semibold text-slate-950 mb-4">Supported MCP Tools</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="border border-slate-100 bg-slate-50/50 rounded-lg p-4">
          <span class="font-mono text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">list_elements</span>
          <p class="text-xs text-slate-600 mt-2">List all available EOxElements custom elements.</p>
        </div>
        <div class="border border-slate-100 bg-slate-50/50 rounded-lg p-4">
          <span class="font-mono text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">get_element_details</span>
          <p class="text-xs text-slate-600 mt-2">Get the full custom-elements-manifest details for a specific tag name.</p>
        </div>
        <div class="border border-slate-100 bg-slate-50/50 rounded-lg p-4">
          <span class="font-mono text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">get_element_stories</span>
          <p class="text-xs text-slate-600 mt-2">Get stories/snippets (descriptions and functional code) for an element.</p>
        </div>
        <div class="border border-slate-100 bg-slate-50/50 rounded-lg p-4">
          <span class="font-mono text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">get_element_attributes</span>
          <p class="text-xs text-slate-600 mt-2">Get the HTML attributes supported by a specific element.</p>
        </div>
        <div class="border border-slate-100 bg-slate-50/50 rounded-lg p-4">
          <span class="font-mono text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">get_element_properties</span>
          <p class="text-xs text-slate-600 mt-2">Get reactive JS properties (and their type JSDocs) for an element.</p>
        </div>
        <div class="border border-slate-100 bg-slate-50/50 rounded-lg p-4">
          <span class="font-mono text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">get_element_events</span>
          <p class="text-xs text-slate-600 mt-2">Get all custom events dispatched by a specific element.</p>
        </div>
      </div>
    </div>

    <!-- Registered Elements -->
    <div>
      <h2 class="text-lg font-semibold text-slate-950 mb-4">Available Components (${totalElements})</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${elementCards || '<div class="col-span-full text-center text-sm text-slate-500 py-6">No elements loaded. Check your custom-elements.json path.</div>'}
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-slate-100 border-t border-slate-200 py-6 text-center text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p>&copy; ${new Date().getFullYear()} EOX IT Services GmbH. Released under the MIT License.</p>
    </div>
  </footer>
</body>
</html>`;
}

main();
