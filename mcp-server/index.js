#!/usr/bin/env node
import { z } from "zod";
import { randomUUID } from "crypto";
import express from "express";

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

  // Create an MCP server and register tools
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
      description: "Get the events for a specific EOxElements custom element.",
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
      description: "Get the methods for a specific EOxElements custom element.",
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
          { type: "text", text: JSON.stringify(element?.slots || [], null, 2) },
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

  // Create the express app from scratch
  const app = express();
  app.use(express.json()); // IMPORTANT: To parse JSON request bodies

  app.get("/", (req, res) => {
    res.json({ message: "EOxElements MCP Server is running" });
  });

  const transports = {};

  // MCP routes
  app.post("/mcp", async (req, res) => {
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

  app.get("/mcp", async (req, res) => {
    const sessionId = req.headers["mcp-session-id"];
    const transport = transports[sessionId];
    if (!transport) {
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      });
      res.write(": welcome\n\n");
      res.end();
      return;
    }
    await transport.handleRequest(req, res);
  });

  app.delete("/mcp", async (req, res) => {
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

main();
