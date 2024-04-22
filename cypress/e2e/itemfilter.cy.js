import "cypress-network-idle";

describe("Stories test", () => {
  it("Should go through every story", () => {
    cy.request("/index.json").as("stories");
    cy.get("@stories").then((response) => {
      console.log(response.body);
      let count = 0;
      Object.values(response.body.entries).forEach((element) => {
        if (element.type && element.type == "story") {
          count += 1;
          cy.visit(`/iframe.html?id=${element.id}`);
          cy.waitForNetworkIdle(1000);
        }
      });
      console.log(count);
    });
  });
});
