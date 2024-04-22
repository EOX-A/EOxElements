import "cypress-network-idle";
import stories from "../../docs/index.json";
describe("Stories test", () => {
  console.log(stories);
  Object.values(stories.entries).forEach((story) => {
    console.log(story.id);
    if (story.type && story.type == "story") {
      it(`${story.id}`, () => {
        cy.visit(`/iframe.html?id=${story.id}`);
        cy.waitForNetworkIdle(1000);
      });
    }
  });
});
