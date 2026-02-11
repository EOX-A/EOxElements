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
          id: "geozarrLayer",
        },
        source: {
          type: "GeoZarr",
          url: "https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2A_MSIL2A_20251107T100231_N0511_R122_T32TQR_20251107T115310.zarr",
          group: "measurements/reflectance",
          bands: ["b04", "b03", "b02", "b05"],
        },
        style: {
          gamma: 1.5,
          color: [
            "color",
            ["interpolate", ["linear"], ["band", 1], 0, 0, 0.5, 255],
            ["interpolate", ["linear"], ["band", 2], 0, 0, 0.5, 255],
            ["interpolate", ["linear"], ["band", 3], 0, 0, 0.5, 255],
            [
              "case",
              ["==", ["+", ["band", 1], ["band", 2], ["band", 3]], 0],
              0,
              1,
            ],
          ],
        },
      },
    ],
    zoom: 9,
    storyCodeBefore: `import "@eox/map/src/plugins/advancedLayersAndSources"`,
  },
};

export default GeoZarrLayerStory;
