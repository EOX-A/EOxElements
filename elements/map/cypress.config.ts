import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/",
    setupNodeEvents(on) {
      on("file:preprocessor", vitePreprocessor());
    },
  },
});
