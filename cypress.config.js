import { defineConfig } from "cypress";
const pathsChanged = process.env.CI_PATHS_CHANGED;

// by default all component tests are run
let specPatternComponentTests = ["**/*.cy.{js,jsx,ts,tsx}"];
if (pathsChanged) {
  const changed = pathsChanged.split("\n");
  // if cypress folder changed, always run all component tests
  if (!changed.some((item) => item.startsWith("cypress"))) {
    // otherwise filter the tests to run specs only for that component based on list of changed paths
    const filteredElementsFolders = changed
      .filter((filePath) => filePath.startsWith("elements/"))
      .map((filePath) => filePath.split("/")[1]);
    const uniqueElementFolders = [...new Set(filteredElementsFolders)];
    // if only one folder was modified update spec
    if (uniqueElementFolders.length > 0) {
      specPatternComponentTests = uniqueElementFolders.map(
        (item) => `elements/${item}/**/*.cy.{js,jsx,ts,tsx}`,
      );
    }
  }
}
export default defineConfig({
  env: {
    CI_PATHS_CHANGED: pathsChanged,
    codeCoverage: {
      exclude: [
        "cypress/**/*.*",
        "**/stories/**/*.*",
        "**/*.stories.js",
        "**/*.stories.ts",
      ],
    },
  },
  e2e: {
    // specPattern: "**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    experimentalRunAllSpecs: true,
  },
  component: {
    supportFile: "cypress/support/component.js",
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
    devServer: {
      bundler: "vite",
    },
    fixturesFolder: "./elements", // changes fixture folder location from ./cypress/fixtures for component tests
    specPattern: specPatternComponentTests,
    excludeSpecPattern: ["**/chart"],
    indexHtmlFile: "cypress/support/component-index.html",
  },
  retries: {
    runMode: 2,
  },
});
