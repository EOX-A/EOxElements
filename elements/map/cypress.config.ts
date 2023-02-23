import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/",
    setupNodeEvents(on) {
      on("file:preprocessor", vitePreprocessor());
    },
    supportFile: false,
    experimentalRunAllSpecs: true
  },
});
