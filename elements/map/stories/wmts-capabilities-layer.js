/**
 * Renders `WMTSCapabilities` layer.
 * A source with type `WMTSCapabilities` automatically fetches the provided capabilities url
 * and renders the specified layer.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const WMTSCapabilitiesLayerStory = {
  args: {
    center: [20, 40],
    layers: [
      {
        type: "Tile",
        properties: {
          id: "customId",
        },
        source: {
          type: "WMTSCapabilities",
          url: "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
          layer: "s2cloudless-2017",
        },
      },
    ],
    zoom: 5,
  },
};

export default WMTSCapabilitiesLayerStory;
