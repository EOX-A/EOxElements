import stories from "../../docs/index.json";

export function getFilteredStories() {
  const pathsChanged = Cypress.env("CI_PATHS_CHANGED");
  let uniqueElementFolders = [];
  let cypressChanged = false;

  if (!pathsChanged) {
    cypressChanged = true;
  } else {
    const changed = pathsChanged.split("\n");
    if (!changed.some((item) => item.startsWith("cypress"))) {
      const filteredElementsFolders = changed
        .filter((filePath) => filePath.startsWith("elements/"))
        .map((filePath) => filePath.split("/")[1]);
      uniqueElementFolders = [...new Set(filteredElementsFolders)];
    } else {
      cypressChanged = true;
    }
  }

  return (
    cypressChanged
      ? Object.values(stories.entries)
      : Object.values(stories.entries).filter((obj) =>
          uniqueElementFolders.some((folder) => obj.importPath.includes(folder))
        )
  ).filter((s) => s.type === "story");
}

export function runBatch(batch) {
  Cypress.on(
    "uncaught:exception",
    (err) => !err.message.includes("ResizeObserver loop")
  );

  batch.forEach((story) => {
    it(`${story.id}`, () => {
      cy.visit(`../../docs/iframe.html?id=${story.id}`);
      cy.waitForNetworkIdle(1000);
    });
  });
}