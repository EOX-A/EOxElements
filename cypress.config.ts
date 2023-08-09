import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // specPattern: "**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
    experimentalRunAllSpecs: true,
  },
  component: {
    supportFile: "cypress/support/component.ts",
    devServer: {
      bundler: "vite",
    },
    specPattern: "**/*.cy.{js,jsx,ts,tsx}",
    indexHtmlFile: "cypress/support/component-index.html",
  },
});
