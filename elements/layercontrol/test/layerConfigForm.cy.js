import "color-legend-element";
import "../src/main";
import "@eox/jsonform";
import { html } from "lit";
import BaseObject from "ol/Object.js";
import {
  buildMinMaxProperties,
  buildDimensionProperty,
} from "@eox/elements-utils";
import { updateGeoZarrBand } from "../src/helpers/update-geozarr-band.js";
import { applyUpdatedStyles } from "../src/methods/layer-config";

describe("LayerControl: LayerConfig form", () => {
  it("keeps the fields of the first anyOf branch after a re-render", () => {
    // no start values can be read from this layer, like a style with only anyOf branches
    const mockLayer = {
      get: () => undefined,
      on: () => {},
      un: () => {},
      getSource: () => ({}),
      updateStyleVariables: cy.spy(),
    };
    const layerConfig = {
      type: "style",
      schema: {
        type: "object",
        options: { keep_oneof_values: false, no_additional_properties: true },
        anyOf: [
          {
            type: "object",
            title: "First",
            options: { no_additional_properties: true },
            properties: {
              gain: { type: "number", default: 1 },
              label: { type: "string", default: "a" },
            },
          },
          {
            type: "object",
            title: "Second",
            options: { no_additional_properties: true },
            properties: {
              offset: { type: "number", default: 0 },
            },
          },
        ],
      },
    };

    cy.mount(html`
      <eox-layercontrol-layerconfig
        .layer=${mockLayer}
        .layerConfig=${layerConfig}
      ></eox-layercontrol-layerconfig>
    `);

    const gainField = () =>
      cy
        .get("eox-layercontrol-layerconfig")
        .shadow()
        .find("eox-jsonform")
        .find('[name="root[gain]"]');

    gainField().should("exist");

    cy.get("eox-layercontrol-layerconfig").then(async ($el) => {
      $el[0].requestUpdate();
      await $el[0].updateComplete;
    });

    gainField().should("exist");
  });

  it("renders minmax slider for valid_range and toggles between minmax and number inputs on band switch", () => {
    class FakeGeoZarrSource {
      constructor(opts) {
        this.url = opts.url;
        this.bands_ = opts.bands || [];
      }
      getBands() {
        return this.bands_;
      }
      async ready() {}
      async getDimensions() {
        return {};
      }
    }

    const layer = new BaseObject({
      id: "geozarr-layer",
      _geozarrSourceUrl: "https://example.com/cube.zarr",
      _geozarrVariables: {
        bandA: { name: "bandA", valid_range: [-10, 20] },
        bandB: { name: "bandB", valid_range: null },
      },
      _lastVariable: "bandA",
      layerConfig: {
        type: "style",
        autofill: true,
        band: "bandA",
        bands: ["bandA"],
        min: -10,
        max: 20,
        schema: {
          type: "object",
          autofill: true,
          properties: {
            variable: {
              type: "string",
              enum: ["bandA", "bandB"],
              default: "bandA",
            },
            minmax: {
              type: "object",
              title: "Value Range",
              format: "minmax",
              properties: {
                min: {
                  type: "number",
                  format: "range",
                  default: -10,
                  minimum: -10,
                  maximum: 20,
                  step: 1,
                },
                max: {
                  type: "number",
                  format: "range",
                  default: 20,
                  minimum: -10,
                  maximum: 20,
                  step: 1,
                },
              },
            },
          },
        },
      },
    });
    const source = new FakeGeoZarrSource({
      url: "https://example.com/cube.zarr",
      bands: ["bandA"],
    });
    const layerAny = /** @type {any} */ (layer);
    layerAny.style_ = { variables: { min: -10, max: 20 } };
    layerAny.getSource = () => source;
    layerAny.setSource = () => {};
    layerAny.updateStyleVariables = cy.spy((vars) => {
      Object.assign(layerAny.style_.variables, vars);
    });

    cy.mount(html`
      <eox-layercontrol-layerconfig
        .layer=${layer}
        .layerConfig=${layer.get("layerConfig")}
      ></eox-layercontrol-layerconfig>
    `);

    cy.get("eox-layercontrol-layerconfig")
      .shadow()
      .find("eox-jsonform")
      .find("tc-range-slider")
      .should("exist")
      .and(($slider) => {
        expect(Number($slider[0].getAttribute("value1"))).to.equal(-10);
        expect(Number($slider[0].getAttribute("value2"))).to.equal(20);
      });

    cy.wrap(null)
      .then(() => updateGeoZarrBand(layer, "bandB"))
      .then(() => {
        const props = layer.get("layerConfig").schema.properties;
        expect(props.minmax).to.be.undefined;
        expect(props.min.format).to.equal("number");
        expect(props.max.format).to.equal("number");
      })
      .then(() => updateGeoZarrBand(layer, "bandA"))
      .then(() => {
        const props = layer.get("layerConfig").schema.properties;
        expect(props.min).to.be.undefined;
        expect(props.max).to.be.undefined;
        expect(props.minmax.format).to.equal("minmax");
        expect(props.minmax.properties.min.default).to.equal(-10);
        expect(props.minmax.properties.max.default).to.equal(20);
      });
  });

  it("rounds unrounded valid_range bounds for minmax slider and sets dynamic legend tickFormat", () => {
    const { minProp, maxProp } = buildMinMaxProperties(
      undefined,
      undefined,
      [33.897999999999996, 40.352000000000004],
    );
    expect(minProp.minimum).to.equal(33.8);
    expect(maxProp.maximum).to.equal(40.4);
    expect(minProp.step).to.equal(0.1);

    const mockLayer = new BaseObject({
      id: "rounded-geozarr",
    });
    const layerAny = /** @type {any} */ (mockLayer);
    layerAny.style_ = { variables: { min: 33.8, max: 40.4 } };
    layerAny.getSource = () => ({});
    layerAny.updateStyleVariables = cy.spy();

    const layerConfig = {
      type: "style",
      legend: {
        title: "Salinity",
        range: ["#440154", "#fde725"],
        domainProperties: ["min", "max"],
      },
      schema: {
        type: "object",
        properties: {
          minmax: {
            type: "object",
            title: "Value Range",
            format: "minmax",
            properties: {
              min: minProp,
              max: maxProp,
            },
          },
        },
      },
    };

    cy.mount(html`
      <eox-layercontrol-layerconfig
        .layer=${mockLayer}
        .layerConfig=${layerConfig}
      ></eox-layercontrol-layerconfig>
    `);

    cy.get("eox-layercontrol-layerconfig")
      .shadow()
      .find("color-legend")
      .should("exist")
      .and(($legend) => {
        expect($legend[0].getAttribute("tickFormat")).to.equal(".1f");
        expect(/** @type {any} */ ($legend[0]).domain).to.deep.equal([
          33.8, 40.4,
        ]);
      });

    cy.get("eox-layercontrol-layerconfig")
      .shadow()
      .find("eox-jsonform")
      .find("tc-range-slider")
      .should("exist")
      .and(($slider) => {
        expect($slider[0].getAttribute("min")).to.equal("33.8");
        expect($slider[0].getAttribute("max")).to.equal("40.4");
      });
  });

  it("builds range slider for uniform depth coordinates and enum dropdown for non-uniform coordinates, mapping values to slice indices", () => {
    const uniformProp = buildDimensionProperty("depth", {
      size: 4,
      attributes: { long_name: "Depth", units: "m" },
      coordinates: [0n, 50n, 100n, 150n],
    });
    expect(uniformProp).to.deep.equal({
      type: "number",
      title: "Depth (m)",
      default: 0,
      minimum: 0,
      maximum: 150,
      step: 50,
      format: "range",
    });

    const nonUniformProp = buildDimensionProperty("depth", {
      size: 5,
      attributes: { long_name: "Depth below sea surface", units: "m" },
      coordinates: [3, 5, 7, 10, 135],
    });
    expect(nonUniformProp).to.deep.equal({
      type: "number",
      title: "Depth below sea surface (m)",
      default: 3,
      enum: [3, 5, 7, 10, 135],
    });

    const updateDimensionsSpy = cy.spy().as("updateDimensionsSpy");
    const mockLayer = new BaseObject({
      id: "depth-geozarr",
      _geozarrDimensions: {
        depth: {
          size: 5,
          coordinates: [3, 5, 7, 10, 135],
        },
      },
    });
    const layerAny = /** @type {any} */ (mockLayer);
    layerAny.style_ = { variables: { min: 0, max: 1 } };
    layerAny.getSource = () => ({ updateDimensions: updateDimensionsSpy });
    layerAny.updateStyleVariables = cy.spy();

    cy.wrap(null)
      .then(() =>
        applyUpdatedStyles(
          { depth: 10 },
          layerAny,
          /** @type {any} */ ({ type: "style" }),
        ),
      )
      .then(() => {
        expect(updateDimensionsSpy).to.have.been.calledWith({ depth: 3 });
      });
  });
});
