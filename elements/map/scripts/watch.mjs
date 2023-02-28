import { createServer, build } from "vite";

/**
 * @type {(server: import('vite').ViteDevServer) => Promise<import('rollup').RollupWatcher>}
 */
function watchProtocol(server) {
  return build({
    configFile: "vite.config.protocol.ts",
    mode: "development",
    build: {
      watch: {},
    },
  });
}

/**
 * @type {(server: import('vite').ViteDevServer) => Promise<import('rollup').RollupWatcher>}
 */
function watchMain(server) {
  return build({
    configFile: "vite.config.map.ts",
    mode: "development",
    build: {
      watch: {},
    },
  });
}

// bootstrap
const server = await createServer({ configFile: "vite.config.map.ts" });

await server.listen();
await watchProtocol(server); // outputs to public/protocol.js, so run first
await watchMain(server);
