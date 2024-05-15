import "cypress-network-idle";
import stories from "../../docs/index.json";

describe("Stories test", () => {
  const pathsChanged = Cypress.env("CI_PATHS_CHANGED");
  let uniqueElementFolders = [];
  let cypressChanged = false;
  // only run stories from files that have been changed
  if (pathsChanged) {
    const changed = pathsChanged.split("\n");
    // if cypress folder changed => run all tests
    if (!changed.some((item) => item.startsWith("cypress"))) {
      const filteredElementsFolders = changed
        .filter((filePath) => filePath.startsWith("elements/"))
        .map((filePath) => filePath.split("/")[1]);
      uniqueElementFolders = [...new Set(filteredElementsFolders)];
      console.log(uniqueElementFolders);
    } else {
      cypressChanged = true;
    }
  }
  const filteredStories = cypressChanged
    ? Object.values(stories.entries)
    : Object.values(stories.entries).filter((obj) => {
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
