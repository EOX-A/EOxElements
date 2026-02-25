import { testBody } from "../general.cy.js";

/**
 * Tests whether Filter objects in configuration arrays work correctly
 */
const FilterPropertiesTest = () => {
  const body = {
    type: "Feature",
    id: "test-item-id",
    properties: {
      cloud_cover: 50,
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
      { rel: "foo", href: "bar", title: "Foo Link", type: "text/html" },
      { rel: "baz", href: "qux", title: "Baz Link", type: "application/json" },
    ],
  };
  testBody(body);

  cy.mount(
    `
      <eox-stacinfo for="/collection"></eox-stacinfo>`,
  ).as("eox-stacinfo");

  cy.get("eox-stacinfo").then(($el) => {
    // @ts-expect-error test
    $el[0].body = [
      "cloud_cover",
      {
        key: "assets",
        filter: (val) => {
          // Filter for only CSV assets
          return val.type === "text/csv";
        },
      },
    ];
    // @ts-expect-error test
    $el[0].footer = [
      {
        key: "links",
        filter: (val) => {
          // Filter for only HTML links
          return val.type === "text/html";
        },
      },
    ];
  });

  cy.get("eox-stacinfo")
    .shadow()
    .within(() => {
      // Check properties value
      cy.contains("#body .value", "50");

      // Check filtered assets (visual should be missing, data present)
      cy.contains("#body li a", "Data Asset");
      cy.get("#body").contains("Visual Asset").should("not.exist");

      // Check filtered links in footer (foo present, baz missing)
      cy.contains("footer li a", "Foo Link");
      cy.get("footer").contains("Baz Link").should("not.exist");
    });
};

export default FilterPropertiesTest;
