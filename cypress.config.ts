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
    specPattern: specPatternComponentTests,
    indexHtmlFile: "cypress/support/component-index.html",
  },
});
