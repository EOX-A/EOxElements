import "cypress-network-idle";
import stories from "../../docs/index.json";

const pathsChanged = Cypress.env(CI_PATHS_CHANGED);

describe("Stories test", () => {
  console.log(pathsChanged);
  Object.values(stories.entries).forEach((story) => {
    if (story.type && story.type == "story") {
      it(`${story.id}`, () => {
        cy.visit(`../../docs/iframe.html?id=${story.id}`);
        cy.waitForNetworkIdle(1000);
      });
    }
  });
});
