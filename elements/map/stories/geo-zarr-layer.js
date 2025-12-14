/**
 * Renders `GeoZarr` layer as `WebGLTile`
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const GeoZarrLayerStory = {
  args: {
    center: [3737055, 1886786],
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
          url: 'https://storage.googleapis.com/open-cogs/geozarr/S2A_MSIL2A_20250922T112131_N0511_R037_T29SMD_20250922T160420.zarr',
          group: 'measurements/reflectance',
          bands: ['b04', 'b03', 'b02', 'b05'],
        },
      },
    ],
    zoom: 8,
    storyCodeBefore: `import "@eox/map/src/plugins/advancedLayersAndSources"`,
  },
};

export default GeoZarrLayerStory;
