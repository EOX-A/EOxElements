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
        (item) => `elements/${item}/**/*.cy.{js,jsx,ts,tsx}`
      );
    }
  }
}
export default defineConfig({
  env: {
    CI_PATHS_CHANGED: pathsChanged,
    codeCoverage: {
      url: 'http://localhost:3000/__coverage__',
      exclude: ['cypress/**/*.*', '**/stories/**/*.*', '**/*.stories.js', '**/*.stories.ts'],
    }
  },
  e2e: {
    // specPattern: "**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
  },
  component: {
    supportFile: "cypress/support/component.ts",
    devServer: {
      bundler: "vite",
    },
    fixturesFolder: "./elements", // changes fixture folder location from ./cypress/fixtures for component tests
    specPattern: specPatternComponentTests,
    indexHtmlFile: "cypress/support/component-index.html",
  },
  retries: {
    runMode: 2,
  },
});
