import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// json-schema-ref-parser requires polyfills and
// the only way to get storybook to use those polyfills
// is to import them in the root vite.config.js
export default defineConfig({
  plugins: [nodePolyfills()],
});
