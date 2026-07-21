/**
 * Renders `GeoZarr` layer as `WebGLTile`
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const GeoZarrLayerStory = {
  args: {
    center: [1407372, 5701616],
    layers: [
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "OSM",
        },
      },
      {
        type: "WebGLTile",
        properties: {
          id: "sentinel-2-l2a",
          title: "Surface Reflectance",
        },
        source: {
          type: "GeoZarr",
          url: "https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2C_MSIL2A_20260716T100601_N0512_R022_T32TQR_20260716T154011.zarr/measurements/reflectance",
          bands: ["b04", "b03", "b02"],
        },
        style: {
          gamma: 1.5,
          color: [
            "color",
            ["interpolate", ["linear"], ["band", 1], 0, 0, 0.5, 255],
            ["interpolate", ["linear"], ["band", 2], 0, 0, 0.5, 255],
            ["interpolate", ["linear"], ["band", 3], 0, 0, 0.5, 255],
          ],
        },
      },
    ],
    zoom: 9,
    storyCodeBefore: `import "@eox/map/src/plugins/advancedLayersAndSources"`,
  },
};

export default GeoZarrLayerStory;
