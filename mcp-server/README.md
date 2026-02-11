# EOxElements MCP Server

This server provides a set of tools for a coding agent to get information about the EOxElements custom elements. It uses the [@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/typescript-sdk) to expose the tools.

## Getting Started

### Hosted Endpoint

To use the MCP server without installing anything locally, you can point your coding agent to our hosted endpoint:

`https://elements.mcp.eox.at`

### For Users

Alternatively, you can run the server locally.

Install the package globally from npm:

```bash
npm install -g @eox/elements-mcp-server
```

Then, run the server:

```bash
eox-elements-mcp-server
```

The server will fetch the latest `custom-elements.json` from the EOxElements GitHub repository and start on `http://localhost:3000`.

### For Developers

If you are working on the EOxElements project itself, you will want to run the server with a local `custom-elements.json` file.

1.  **Installation:**
    From the root of the `EOxElements` project, install all dependencies:

```bash
npm install
```

2.  **Generate the manifest:**
    Make sure the `custom-elements.json` file is up-to-date:

```bash
npm run generate-manifest
```

3.  **Run the server:**
    Run the server with the `--manifest` flag, pointing to the generated `custom-elements.json` file:

```bash
node mcp-server/index.js --manifest ./custom-elements.json
```

You can also provide a local path to the story snippets file using the `--snippets` flag:

```bash
node mcp-server/index.js --manifest ./custom-elements.json --snippets ./story-snippets.json
```

The server will start on `http://localhost:3000` and can be consumed by pointing a coding agent to it (or `http://localhost:3000/` with a slash at the end if a path is required).
