import { html } from "lit";
import {
  geoZarrLayerDefinition,
  interceptGeoZarrStore,
} from "../../utils/geozarr";

/**
 * Tests that `setupGeoZarrLayer` resolves `valid_range` into style variables
 * before firing the `layerConfig` `propertychange` event, and generates a
 * `minmax` range slider schema property.
 */
const autofillMinmaxBeforeLayerconfig = () => {
  interceptGeoZarrStore();
  cy.fixture("./map/test/fixtures/geozarr/descending/zarr.json").then(
    (zarrJson) => {
      const withRange = structuredClone(zarrJson);
      const vvMeta = withRange.consolidated_metadata?.metadata?.["r720m/vv"];
      if (vvMeta) {
        vvMeta.attributes = {
          ...(vvMeta.attributes || {}),
          valid_range: [-25, 5],
        };
      }
      cy.intercept("**/descending/zarr.json", { body: withRange });
    },
  );

  const observedStyleVarsOnChange = [];

  const layerDef = {
    ...geoZarrLayerDefinition({
      layerConfig: {
        type: "style",
        schema: {
          type: "object",
          autofill: true,
          properties: {},
        },
      },
    }),
    style: {
      variables: { min: 0, max: 1 },
      color: [
        "interpolate",
        ["linear"],
        ["band", 1],
        ["var", "min"],
        ["color", 0, 0, 0, 1],
        ["var", "max"],
        ["color", 255, 255, 255, 1],
      ],
    },
  };

  cy.mount(html`<eox-map .layers=${[layerDef]}></eox-map>`).as("eox-map");

  cy.get("eox-map").then(($el) => {
    const layer = $el[0].getLayerById("cube");
    layer.on("propertychange", (e) => {
      if (e.key === "layerConfig") {
        const styleVars =
          layer.styleVariables_ ||
          layer.style_?.variables ||
          layer.get("style")?.variables;
        observedStyleVarsOnChange.push({
          min: styleVars?.min,
          max: styleVars?.max,
        });
      }
    });
  });

  cy.get("eox-map").should(($el) => {
    const layer = $el[0].getLayerById("cube");
    const minmax = layer.get("layerConfig")?.schema?.properties?.minmax;
    expect(minmax).to.exist;
    expect(minmax.format).to.equal("minmax");
    expect(minmax.properties.min.default).to.equal(-25);
    expect(minmax.properties.min.minimum).to.equal(-25);
    expect(minmax.properties.min.maximum).to.equal(5);
    expect(minmax.properties.max.default).to.equal(5);
    expect(minmax.properties.max.minimum).to.equal(-25);
    expect(minmax.properties.max.maximum).to.equal(5);
    expect(observedStyleVarsOnChange.length).to.be.greaterThan(0);
    expect(observedStyleVarsOnChange[0]).to.deep.equal({ min: -25, max: 5 });
  });
};

export default autofillMinmaxBeforeLayerconfig;
