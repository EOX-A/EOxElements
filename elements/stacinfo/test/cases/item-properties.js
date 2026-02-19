import { testBody } from "../general.cy.js";

/**
 * Tests whether Items top-level properties are parsed and formatted correctly
 */
const ItemProperties = () => {
  const body = {
    type: "Feature",
    id: "test-item-id",
    properties: {
      "test:prop": 123,
    },
    assets: {
      visual: {
        href: "visual.tif",
        type: "image/tiff",
        title: "Visual Asset",
      },
      data: {
        href: "data.csv",
        type: "text/csv",
        title: "Data Asset",
      },
    },
    links: [
      { rel: "example", href: "bar", title: "Foo Link", type: "text/html" },
      {
        rel: "example",
        href: "qux",
        title: "Baz Link",
        type: "application/json",
      },
    ],
  };
  testBody(body);

  cy.mount(
    `
      <eox-stacinfo for="/collection"></eox-stacinfo>`,
  ).as("eox-stacinfo");

  cy.get("eox-stacinfo").then(($el) => {
    $el[0].header = ["id"];
    $el[0].body = ["test:prop"];
    $el[0].featured = ["assets", "links"];
  });

  cy.get("eox-stacinfo")
    .shadow()
    .within(() => {
      // Check header for ID
      cy.contains("header", "test-item-id");

      // Check body for test property
      // cy.contains("#body", "test:prop");
      cy.contains("#body", "123");
      // Check assets list (all should be present by default)
      cy.contains("section#featured a", "Visual Asset");
      cy.contains("section#featured a", "Data Asset");

      // Check links list
      cy.contains("section#featured a", "Foo Link");
      cy.contains("section#featured a", "Baz Link");
    });
};

export default ItemProperties;
