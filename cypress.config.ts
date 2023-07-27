import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
    experimentalRunAllSpecs: true,
  },
});
