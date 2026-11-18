import { html } from "lit";

/**
 * Test to ensure the minmax editor correctly handles the step and round attributes
 */
const loadMinMaxEditorTest = () => {
  const schema = {
    type: "object",
    properties: {
      vminmax: {
        type: "object",
        format: "minmax",
        properties: {
          vmin: {
            type: "number",
            minimum: 0,
            default: 0,
            step: 0.001,
            format: "range",
          },
          vmax: {
            type: "number",
            maximum: 0.0075,
            default: 0.005,
            step: 0.001,
            format: "range",
          },
        },
      },
    },
  };

  cy.mount(html`<eox-jsonform .schema=${schema}></eox-jsonform>`);

  cy.get("eox-jsonform").should(([$el]) => {
    expect($el.editor).to.not.be.undefined;
  });

  cy.get("eox-jsonform")
    .shadow()
    .within(() => {
      cy.get("tc-range-slider")
        .should("have.attr", "step", "0.001")
        .and("have.attr", "round", "3")
        .and("have.attr", "value1", "0")
        .and("have.attr", "value2", "0.005");
    });
};

export default loadMinMaxEditorTest;
