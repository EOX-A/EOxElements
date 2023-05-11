import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
  },
});
