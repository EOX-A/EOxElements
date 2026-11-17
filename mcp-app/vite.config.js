import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.js"),
      name: "eox-elements-mcp-app",
      fileName: "eox-elements-mcp-app",
    },
  },
});
