import {
  setupGeoZarrLayer,
  isGeoZarrLayer,
  getStartVals,
} from "../../../src/helpers";

/**
 * Cypress test logic to check GeoZarr layer metadata setup.
 */
const checkGeoZarr = () => {
  const mockGeoZarrSource = {
    getUrl: () =>
      "https://s3.waw4-1.cloudferro.com/EarthCODE/OSCAssets/sea-ice-cube/sea-ice-cube-geozarr-v2.zarr",
    getBands: () => ["sss"],
    getDimensions: async () => ({
      time: {
        size: 2,
        attributes: { units: "days since 2020-01-01 00:00:00" },
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
  };

  expect(isGeoZarrLayer(mockLayer)).to.be.true;

  cy.wrap(setupGeoZarrLayer(mockLayer)).then(() => {
    expect(mockLayer.layerDatetime).to.exist;
    expect(mockLayer.layerDatetime.controlValues).to.have.lengthOf(2);
    expect(mockLayer.layerConfig).to.exist;
    expect(mockLayer.layerConfig.schema.properties.min).to.exist;
    expect(mockLayer.layerConfig.schema.properties.max).to.exist;

    const layerConfigWithVariable = {
      type: "style",
      style: true,
      schema: {
        type: "object",
        properties: {
          variable: {
            type: "string",
            enum: ["vv", "vh"],
            default: "vv",
          },
          min: { type: "number", default: 0 },
          max: { type: "number", default: 40 },
        },
      },
    };

    const variableStartVals = getStartVals(mockLayer, layerConfigWithVariable);
    expect(variableStartVals).to.exist;
    expect(variableStartVals.variable).to.eq("sss");
    expect(variableStartVals.min).to.eq(0);
    expect(variableStartVals.max).to.eq(40);

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
  });
};

export default checkGeoZarr;
