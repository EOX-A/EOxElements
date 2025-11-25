import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key: "select_prop",
  value: "option2",
  enums: ["option1", "option2", "option3"],
  titles: ["Choice A", "Choice B", "Choice C"],
};

const loadButtonsTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        properties: {
          [testVals.key]: {
            type: "string",
            format: "buttons",
            enum: testVals.enums,
            options: {
              enum_titles: testVals.titles,
            },
          },
        },
      }}
      .value=${{
        [testVals.key]: testVals.value,
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".btn-group button").as("myButtons");

      cy.get("@myButtons").should("have.length", 3);

      // Check global button classes
      cy.get("@myButtons").each(($btn) => {
        cy.wrap($btn).should("have.class", "small");
        cy.wrap($btn).should("have.class", "no-round");
      });

      // Check specific round classes
      cy.get("@myButtons").first().should("have.class", "left-round");
      cy.get("@myButtons").last().should("have.class", "right-round");

      // Check Initial State
      cy.get("@myButtons").eq(1).should("have.class", "active");
      cy.get("@myButtons").eq(1).should("have.class", "btn-primary");
      cy.get("@myButtons").eq(1).should("contain.text", testVals.titles[1]);

      // Test Interaction
      cy.get("@myButtons").first().click();
      cy.get("@myButtons").first().should("have.class", "active");
      cy.get("@myButtons").eq(1).should("not.have.class", "active");
    });

  cy.get(jsonForm).and(($el) => {
    const editorValue = $el[0].editor.getValue();
    expect(editorValue[testVals.key]).to.eq(testVals.enums[0]);
  });
};

export default loadButtonsTest;
