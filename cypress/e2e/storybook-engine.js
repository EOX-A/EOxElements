import "cypress-network-idle";
import stories from "../../docs/index.json";

describe("Stories test", () => {
  const pathsChanged = Cypress.env("CI_PATHS_CHANGED");
  const specFilter = Cypress.env("SPEC_FILTER");
  let uniqueElementFolders = [];
  let cypressChanged = false;
  // only run stories from files that have been changed (on CI)
  // locally we run all tests
  if (!pathsChanged) {
    cypressChanged = true;
  } else {
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

  let filteredStories = [];
  if (specFilter) {
    const filters = specFilter.split(",");
    filteredStories = Object.values(stories.entries).filter((obj) => {
      // support both folder name (e.g. "map") and full path check
      return filters.some(
        (filter) =>
          obj.importPath.includes(`/${filter}/`) ||
          obj.importPath.includes(`elements/${filter}/`),
      );
    });
  } else if (cypressChanged) {
    filteredStories = Object.values(stories.entries);
  } else {
    filteredStories = Object.values(stories.entries).filter((obj) => {
      return uniqueElementFolders.some((folder) =>
        obj.importPath.includes(folder),
      );
    });
  }

  /**
   * Since Storybook 9, stories fail that previously passed fine.
   * Error: "ResizeObserver loop completed with undelivered notifications."
   * Preventing this error here, until it is clearer what causes the issue.
   */
  Cypress.on(
    "uncaught:exception",
    (err) => !err.message.includes("ResizeObserver loop"),
  );

  filteredStories.forEach((story) => {
    if (story.type && story.type == "story") {
      it(`${story.id}`, () => {
        cy.visit(`../../docs/iframe.html?id=${story.id}`);
        cy.waitForNetworkIdle(1000);
      });
    }
  });

  afterEach(() => {
    cy.window().then((win) => {
      win.location.replace("about:blank");
    });
  });
});
