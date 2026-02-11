import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

const { jsonForm } = TEST_SELECTORS;

const loadGridTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        format: "grid",
        properties: {
          name: { type: "string" },
          email: { type: "string" },
          phone: { type: "string" },
        },
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      // Find the row containing the properties
      cy.get(".grid").should("exist");
      // With 3 items, it should be s12, m4, l4 (responsive)
      cy.get("[data-schemapath='root.name']").should("have.class", "s12");
      cy.get("[data-schemapath='root.name']").should("have.class", "m4");
      cy.get("[data-schemapath='root.name']").should("have.class", "l4");
    });
};

export const loadGridStrictTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        format: "grid-strict",
        properties: {
          a: {
            title: "a",
            type: "string",
            options: {
              grid_columns: 4,
            },
          },
          b: {
            title: "b",
            type: "string",
            options: {
              grid_columns: 4,
              grid_break: true,
            },
          },
          c: {
            title: "c",
            type: "string",
            options: {
              grid_columns: 6,
            },
          },
        },
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get("[data-schemapath='root.a']").should("have.class", "s12");
      cy.get("[data-schemapath='root.a']").should("have.class", "m4");
      cy.get("[data-schemapath='root.a']").should("have.class", "l4");

      cy.get("[data-schemapath='root.b']").should("have.class", "s12");
      cy.get("[data-schemapath='root.b']").should("have.class", "m4");
      cy.get("[data-schemapath='root.b']").should("have.class", "l4");

      cy.get("[data-schemapath='root.c']").should("have.class", "s12");
      cy.get("[data-schemapath='root.c']").should("have.class", "m6");
      cy.get("[data-schemapath='root.c']").should("have.class", "l6");
    });
};

export default loadGridTest;
