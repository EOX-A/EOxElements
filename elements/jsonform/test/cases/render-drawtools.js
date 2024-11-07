import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";
import schemaFixture from "../fixtures/spatialSchema.json";
// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const checkDrawtoolsForTypeSpatial = () => {
  cy.intercept("**/spatialSchema.json", (req) => {
    req.reply(schemaFixture);
  });

  cy.mount(
    html` <eox-jsonform .schema=${"/spatialSchema.json"}></eox-jsonform>`,
  ).as(jsonForm);
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get('eox-drawtools[id="root[bbox]"]').then(($el) => {
        // Check if the drawtools are rendered
        expect($el[0]).to.exist;
        // Check if the drawtools have the correct `for` attribute
        expect($el[0].getAttribute("for")).to.equal(
          schemaFixture.properties.bbox.options.for,
        );
        // Check if the drawtools have the correct `type` attribute
        expect($el[0].getAttribute("type")).to.equal("Box");
      });

      cy.get('eox-drawtools[id="root[polygons]"]').then(($el) => {
        // check if the drawtools are rendered
        expect($el[0]).to.exist;
        // check if the drawtools have the correct `type` attribute
        expect($el[0].getAttribute("type")).to.equal("Polygon");
        // check if the drawtools have the correct `for` attribute
        expect($el[0].getAttribute("for")).to.equal(
          schemaFixture.properties.polygons.options.for,
        );
        // check if the drawtools `multiple-features`
        // and `show-list` attributes are set in case of a plural format
        expect($el[0].getAttribute("multiple-features")).to.equal("true");
        expect($el[0].getAttribute("show-list")).to.equal("true");
      });
    });
};

export default checkDrawtoolsForTypeSpatial;
