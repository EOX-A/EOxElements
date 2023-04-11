import { createServer, build } from "vite";

/**
 * @type {(server: import('vite').ViteDevServer) => Promise<import('rollup').RollupWatcher>}
 */
function watchInterface(server) {
  return build({
    configFile: "vite.config.interface.ts",
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
await watchInterface(server); // outputs to public/interface.js, so run first
await watchMain(server);
