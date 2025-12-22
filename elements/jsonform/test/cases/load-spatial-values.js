import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

const { jsonForm } = TEST_SELECTORS;

const schema = {
  type: "object",
  properties: {
    Bbox: {
      anyOf: [
        {
          type: "array",
          format: "bounding-box",
        },
        {
          type: "array",
          minItems: 4,
          maxItems: 4,
          items: {
            type: "number",
          },
        },
      ],
    },
  },
};

const value = {
  Bbox: [10, 10, 20, 20],
};

const loadSpatialValuesTest = () => {
  cy.intercept("**/spatialSchema.json", (req) => {
    req.reply(schema);
  });
  cy.intercept("**/spatialValue.json", (req) => {
    req.reply(value);
  });

  cy.mount(
    html` <eox-jsonform
      .schema=${"/spatialSchema.json"}
      .value=${"/spatialValue.json"}
    ></eox-jsonform>`,
  ).as(jsonForm);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      // Trigger loadend on the map to simulate map loading
      cy.get("eox-map").then(($el) => {
        $el[0].dispatchEvent(new CustomEvent("loadend"));
      });

      cy.get("eox-drawtools").then(($el) => {
        // Check if handleFeatureChange was called with the correct features
        // The mock stores it in _features
        // The value passed to handleFeatureChange is a JSON string
        const features = JSON.parse($el[0]._features);
        expect(features.type).to.equal("FeatureCollection");
        expect(features.features).to.have.length(1);
        expect(features.features[0].geometry.type).to.equal("Polygon");
        // [10, 10, 20, 20] -> Polygon coordinates
        const coords = features.features[0].geometry.coordinates[0];
        expect(coords[0]).to.deep.equal([10, 10]);
        expect(coords[2]).to.deep.equal([20, 20]);
      });
    });
};

export default loadSpatialValuesTest;
