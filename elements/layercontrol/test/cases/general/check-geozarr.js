import { getStartVals, updateGeoZarrBand } from "../../../src/helpers";
import { discoverGeoZarrVariables } from "@eox/map/src/helpers";

/**
 * Cypress test logic to check GeoZarr layer metadata setup and band updating.
 */
const checkGeoZarr = () => {
  const mockGeoZarrSource = {
    getUrl: () =>
      "https://s3.waw4-1.cloudferro.com/EarthCODE/OSCAssets/sea-ice-cube/sea-ice-cube-geozarr-v2.zarr",
    getBands: () => ["sss"],
    setBands: cy.stub().as("setBands"),
    getDimensions: async () => ({
      time: {
        size: 2,
        attributes: { units: "days since 2020-01-01 00:00:00" },
      },
      depth: {
        size: 5,
        attributes: { units: "m", long_name: "Depth" },
      },
    }),
    getValue: async (dim, idx) => idx,
    updateDimensions: cy.stub().as("updateDimensions"),
  };

  const mockLayer = {
    get: (key) => {
      if (key === "type") return "GeoZarr";
      return mockLayer[key];
    },
    set: (key, val) => {
      mockLayer[key] = val;
    },
    getSource: () => mockGeoZarrSource,
    updateStyleVariables: cy.stub().as("updateStyleVariables"),
    style_: {
      variables: { min: 0, max: 40 },
    },
    layerConfig: {
      type: "style",
      style: true,
      autofill: true,
      schema: {
        type: "object",
        properties: {
          variable: {
            type: "string",
            enum: ["sss", "floes_density"],
            default: "sss",
          },
          min: { type: "number", default: 0 },
          max: { type: "number", default: 40 },
        },
      },
    },
    _geozarrVariables: {
      sss: { valid_range: [0, 40] },
      floes_density: { valid_range: [0, 1] },
    },
  };

  cy.wrap(updateGeoZarrBand(mockLayer, "floes_density"))
    .then(() => {
      expect(mockLayer.layerDatetime).to.exist;
      expect(mockLayer.layerDatetime.controlValues).to.have.lengthOf(2);
      expect(mockLayer.layerConfig).to.exist;
      expect(mockLayer.layerConfig.min).to.eq(0);
      expect(mockLayer.layerConfig.max).to.eq(1);
      expect(mockLayer.layerConfig.band).to.eq("floes_density");
      expect(mockLayer.layerConfig.bands).to.deep.eq(["floes_density"]);
      // min and max must be updated from valid_range [0, 1]
      expect(mockLayer.layerConfig.schema.properties.min.default).to.eq(0);
      expect(mockLayer.layerConfig.schema.properties.max.default).to.eq(1);
      expect(mockLayer.layerConfig.schema.properties.min.format).to.eq(
        "number",
      );
      expect(mockLayer.layerConfig.schema.properties.max.format).to.eq(
        "number",
      );
      expect(mockLayer.layerConfig.schema.properties.min.minimum).to.eq(0);
      expect(mockLayer.layerConfig.schema.properties.min.maximum).to.eq(1);
      expect(mockLayer.layerConfig.schema.properties.min.step).to.eq(0.01);
      expect(mockLayer.layerConfig.schema.properties.max.minimum).to.eq(0);
      expect(mockLayer.layerConfig.schema.properties.max.maximum).to.eq(1);
      expect(mockLayer.layerConfig.schema.properties.max.step).to.eq(0.01);
      expect(mockLayer.style_.variables.min).to.eq(0);
      expect(mockLayer.style_.variables.max).to.eq(1);
      // variable default updates to selected band
      expect(mockLayer.layerConfig.schema.properties.variable.default).to.eq(
        "floes_density",
      );
      // extra dimension slider (depth) is dynamically injected
      expect(mockLayer.layerConfig.schema.properties.depth).to.exist;
      expect(mockLayer.layerConfig.schema.properties.depth.format).to.eq(
        "range",
      );
      expect(mockLayer.layerConfig.schema.properties.depth.maximum).to.eq(4);

      const startValsWithDepth = getStartVals(mockLayer, mockLayer.layerConfig);
      expect(startValsWithDepth).to.exist;
      expect(startValsWithDepth.depth).to.eq(0);

      const layerConfigWithVariable = {
        type: "style",
        style: true,
        schema: {
          type: "object",
          properties: {
            variable: {
              type: "string",
              enum: ["sss"],
              default: "sss",
            },
            min: { type: "number", default: 0 },
            max: { type: "number", default: 40 },
          },
        },
      };

      const variableStartVals = getStartVals(
        mockLayer,
        layerConfigWithVariable,
      );
      expect(variableStartVals).to.exist;
      expect(variableStartVals.variable).to.eq("sss");
      expect(variableStartVals.min).to.eq(0);
      expect(variableStartVals.max).to.eq(1);

      // Test fallback when a band has no valid_range
      mockLayer._geozarrVariables.sea_ice_thickness = { valid_range: null };
      return updateGeoZarrBand(mockLayer, "sea_ice_thickness");
    })
    .then(() => {
      expect(mockLayer.layerConfig.band).to.eq("sea_ice_thickness");
      expect(mockLayer.layerConfig.bands).to.deep.eq(["sea_ice_thickness"]);
      expect(mockLayer.layerConfig.min).to.eq(0);
      expect(mockLayer.layerConfig.max).to.eq(1);
      expect(mockLayer.layerConfig.schema.properties.variable.default).to.eq(
        "sea_ice_thickness",
      );
      expect(mockLayer.layerConfig.schema.properties.min.default).to.eq(0);
      expect(mockLayer.layerConfig.schema.properties.max.default).to.eq(1);
      expect(mockLayer.layerConfig.schema.properties.min.format).to.eq("range");
      expect(mockLayer.layerConfig.schema.properties.max.format).to.eq("range");
      expect(mockLayer.layerConfig.schema.properties.min.minimum).to.eq(0);
      expect(mockLayer.layerConfig.schema.properties.min.maximum).to.eq(1);
      expect(mockLayer.layerConfig.schema.properties.min.step).to.eq(0.01);
      expect(mockLayer.layerConfig.schema.properties.max.minimum).to.eq(0);
      expect(mockLayer.layerConfig.schema.properties.max.maximum).to.eq(1);
      expect(mockLayer.layerConfig.schema.properties.max.step).to.eq(0.01);

      const layerConfigWithChannels = {
        type: "style",
        style: true,
        schema: {
          type: "object",
          properties: {
            red: { type: "number", default: 1 },
            green: { type: "number", default: 2 },
            blue: { type: "number", default: 1 },
            redMax: { type: "number", default: 0.4 },
            greenMax: { type: "number", default: 0.1 },
            blueMax: { type: "number", default: 0.4 },
            gamma: { type: "number", default: 1.2 },
          },
        },
      };

      const channelStartVals = getStartVals(mockLayer, layerConfigWithChannels);
      expect(channelStartVals).to.exist;
      expect(channelStartVals.red).to.eq(1);
      expect(channelStartVals.green).to.eq(2);
      expect(channelStartVals.blue).to.eq(1);
      expect(channelStartVals.redMax).to.eq(0.4);
      expect(channelStartVals.greenMax).to.eq(0.1);
      expect(channelStartVals.blueMax).to.eq(0.4);
      expect(channelStartVals.gamma).to.eq(1.2);

      // Test layer WITHOUT autofill: custom schema properties only, no injected depth or min/max
      const mockLayerNoAutofill = {
        ...mockLayer,
        layerConfig: {
          type: "style",
          style: true,
          schema: {
            type: "object",
            properties: {
              red: { type: "number", default: 1 },
              green: { type: "number", default: 2 },
            },
          },
        },
      };

      return updateGeoZarrBand(mockLayerNoAutofill, "sss").then(() => {
        expect(mockLayerNoAutofill.layerConfig.min).to.not.exist;
        expect(mockLayerNoAutofill.layerConfig.max).to.not.exist;
        const noAutofillStartVals = getStartVals(
          mockLayerNoAutofill,
          mockLayerNoAutofill.layerConfig,
        );
        expect(noAutofillStartVals).to.deep.eq({ red: 1, green: 2 });

        // Test discoverGeoZarrVariables ignores coordinate arrays (e.g. depth, time) and 1D arrays
        const mockDiscoveryLayer = {
          get: () => null,
          set: (key, val) => {
            mockDiscoveryLayer[key] = val;
          },
        };
        const mockDiscoverySource = {
          consolidatedMetadata_: {
            "0/depth": {
              node_type: "array",
              shape: [18],
              dimension_names: ["depth"],
              attributes: { units: "m", long_name: "Depth" },
            },
            "0/time": {
              node_type: "array",
              shape: [100],
              dimension_names: ["time"],
              attributes: { units: "days since 2020-01-01" },
            },
            "0/thetao": {
              node_type: "array",
              shape: [100, 18, 500, 500],
              dimension_names: ["time", "depth", "lat", "lon"],
              attributes: {
                units: "degrees_C",
                long_name: "Potential temperature",
                valid_range: [-2, 35],
              },
            },
          },
        };

        return discoverGeoZarrVariables(
          mockDiscoveryLayer,
          mockDiscoverySource,
        ).then((vars) => {
          expect(vars.depth).to.not.exist;
          expect(vars.time).to.not.exist;
          expect(vars.thetao).to.exist;
          expect(vars.thetao.valid_range).to.deep.eq([-2, 35]);
          expect(vars.thetao.units).to.eq("degrees_C");
        });
      });
    });
};

export default checkGeoZarr;
