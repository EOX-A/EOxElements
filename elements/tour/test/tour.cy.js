import "../src/main.js";

describe("eox-tour", () => {
  it("renders and starts the tour", () => {
    cy.mount(
      `<div id="target">Target</div>
       <eox-tour show-every-time></eox-tour>`,
    ).as("mount");
    cy.get("eox-tour").and(($el) => {
      const tour = $el[0];
      tour.config = {
        steps: [
          {
            element: "#target",
            popover: {
              title: "Test",
              description: "Test description",
            },
          },
        ],
      };
      tour.start();
    });
    // Check if the driver.js popover is rendered in the body
    cy.document().find(".driver-popover").should("exist");
  });
});
