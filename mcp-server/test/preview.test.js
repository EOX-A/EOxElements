import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import {
  EOX_PREVIEW_CSP_META,
  EOX_PREVIEW_RESOURCE_URI,
  MCP_APP_RESOURCE_MIME_TYPE,
  registerEoxPreviewResource,
} from "../preview.js";

describe("mcp-server MCP App preview resource", () => {
  it("registers ui://eox-elements/preview with text/html;profile=mcp-app and CSP metadata", async () => {
    const server = new McpServer(
      { name: "eox-elements-test", version: "1.0.0" },
      { capabilities: { tools: { call: {} }, resources: {} } },
    );
    registerEoxPreviewResource(server);

    const client = new Client({ name: "test-client", version: "1.0.0" });
    const [clientTransport, serverTransport] =
      InMemoryTransport.createLinkedPair();

    await Promise.all([
      server.connect(serverTransport),
      client.connect(clientTransport),
    ]);

    const { resources } = await client.listResources();
    const preview = resources.find((r) => r.uri === EOX_PREVIEW_RESOURCE_URI);
    assert.ok(preview);
    assert.equal(preview.mimeType, MCP_APP_RESOURCE_MIME_TYPE);

    const readResult = await client.readResource({
      uri: EOX_PREVIEW_RESOURCE_URI,
    });
    assert.equal(readResult.contents.length, 1);
    assert.equal(readResult.contents[0].mimeType, MCP_APP_RESOURCE_MIME_TYPE);
    assert.ok(readResult.contents[0].text.includes("ui/initialize"));
    assert.ok(
      readResult.contents[0].text.includes("ui/notifications/tool-result"),
    );
    assert.deepEqual(readResult.contents[0]._meta, EOX_PREVIEW_CSP_META);

    await Promise.all([client.close(), server.close()]);
  });
});
