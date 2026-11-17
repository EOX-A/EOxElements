import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

const { jsonForm } = TEST_SELECTORS;

const schema = {
  type: "object",
  properties: {
    Bbox: {
      type: "array",
      format: "bounding-box",
      options: {
        drawtools: {
          for: "eox-map#main",
        },
      },
    },
  },
};

const updatedValue = {
  Bbox: [10, 10, 20, 20],
};

const setSpatialValueTest = () => {
  cy.intercept("**/setSpatialSchema.json", (req) => {
    req.reply(schema);
  });

  cy.mount(
    html` <eox-jsonform .schema=${"/setSpatialSchema.json"}></eox-jsonform>`,
  ).as(jsonForm);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get("eox-drawtools").should("exist");
    });

  cy.get(jsonForm).then(($el) => {
    // Set value programmatically using json-editor's setValue
    $el[0].editor.setValue(updatedValue);
  });

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get("eox-drawtools")
        .should(($el) => {
          expect($el[0]._features).to.exist;
        })
        .then(($el) => {
          const features = JSON.parse($el[0]._features);
          expect(features.type).to.equal("FeatureCollection");
          expect(features.features).to.have.length(1);
          expect(features.features[0].geometry.type).to.equal("Polygon");
          const coords = features.features[0].geometry.coordinates[0];
          expect(coords[0]).to.deep.equal([10, 10]);
          expect(coords[2]).to.deep.equal([20, 20]);
        });
    });
};

export default setSpatialValueTest;
