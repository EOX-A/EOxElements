import "../src/main.js";

describe("Stacinfo", () => {
  const testBody = (json) => {
    cy.intercept("/collection*", {
      body: json,
    });
  };

  it("loads stacinfo", () => {
    testBody({
      type: "Collection",
    });
    cy.mount(
      `
      <eox-stacinfo for="/collection"></eox-stacinfo>`
    ).as("eox-stacinfo");
    cy.get("eox-stacinfo").shadow();
  });

  it("creates list items for all properties", () => {
    const body = {
      type: "Collection",
      title: "Foobar",
      id: "foobar",
    };
    testBody(body);
    cy.mount(
      `
      <eox-stacinfo for="/collection"></eox-stacinfo>`
    ).as("eox-stacinfo");
    cy.get("eox-stacinfo")
      .shadow()
      .within(() => {
        cy.get("li", { multiple: true }).should(
          "have.length",
          Object.keys(body).length
        );
      });
  });

  it("creates a single-property class if only one property is whitelisted", () => {
    testBody({
      type: "Collection",
      description: "Hello world!",
    });
    cy.mount(
      `
      <eox-stacinfo
        for="/collection"
        properties='["description"]'
      ></eox-stacinfo>`
    ).as("eox-stacinfo");
    cy.get("eox-stacinfo")
      .shadow()
      .within(() => {
        cy.get("#properties ul.single-property").should("exist");
      });
  });

  it("doesn't render HTML if not enabled", () => {
    testBody({
      type: "Collection",
      description: "<button>click me</button>",
    });
    cy.mount(
      `
      <eox-stacinfo
        for="/collection"
        properties='["description"]'
      ></eox-stacinfo>`
    ).as("eox-stacinfo");
    cy.get("eox-stacinfo")
      .shadow()
      .within(() => {
        cy.get("#properties button").should("not.exist");
      });
  });

  it("renders HTML if enabled", () => {
    testBody({
      type: "Collection",
      description: "<button>click me</button>",
    });
    cy.mount(
      `
      <eox-stacinfo
        for="/collection"
        allow-html
        properties='["description"]'
      ></eox-stacinfo>`
    ).as("eox-stacinfo");
    cy.get("eox-stacinfo")
      .shadow()
      .within(() => {
        cy.get("#properties eox-stacinfo-shadow")
          .shadow()
          .within(() => {
            cy.get("button").should("exist");
          });
      });
  });
});
