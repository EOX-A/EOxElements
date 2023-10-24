import "../src/main";

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
});
