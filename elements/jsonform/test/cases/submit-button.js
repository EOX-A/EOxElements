import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

/**
 * Test to verify if the jsonform component loads successfully.
 */
const submitButtonTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        required: ["foo"],
        properties: {
          foo: {
            type: "boolean",
            format: "checkbox",
            const: true,
          },
          button: {
            format: "button",
            options: {
              button: {
                text: "Submit",
                action: "onSubmit",
                validated: true,
              },
            },
          },
        },
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);

  const clickEventHandlerSpy = cy.spy();
  cy.get(jsonForm).and(($jsonForm) => {
    $jsonForm.get(0).addEventListener("submit", clickEventHandlerSpy);
  });

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".json-editor-btn-").should("be.disabled");
      cy.get("input[type=checkbox]").click();
      cy.get(".json-editor-btn-").should("be.enabled");
      // eslint-disable-next-line cypress/unsafe-to-chain-command
      cy.get(".json-editor-btn-")
        .click()
        .then(() => {
          expect(clickEventHandlerSpy).to.be.calledOnce;
        });
    });
};

export default submitButtonTest;
