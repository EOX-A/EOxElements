import "cypress-network-idle";
import stories from "../../docs/index.json";

// const pathsChanged = `elements/drawtools/src/components/controller.js
// elements/chart/src/main.ts
// elements/jsonform/stories/public/basicSchema.json`;
const pathsChanged = Cypress.env("CI_PATHS_CHANGED");
let uniqueElementFolders = [];
describe("Stories test", () => {
  // only run stories from files that have been changed
  if (pathsChanged) {
    const changed = pathsChanged.split("\n");
    console.log(changed);
    if (!changed.some((item) => item.startsWith("cypress"))) {
      console.log("no cypress folder");
      const filteredElementsFolders = changed
        .filter((filePath) => filePath.startsWith("elements/"))
        .map((filePath) => filePath.split("/")[1]);
      uniqueElementFolders = [...new Set(filteredElementsFolders)];
      console.log(uniqueElementFolders);
    }
  }
  const filteredStories = Object.values(stories.entries).filter((obj) => {
    return uniqueElementFolders.some((folder) =>
      obj.importPath.includes(folder)
    );
  });
  filteredStories.forEach((story) => {
    if (story.type && story.type == "story") {
      it(`${story.id}`, () => {
        cy.visit(`../../docs/iframe.html?id=${story.id}`);
        cy.waitForNetworkIdle(1000);
      });
    }
  });
});
