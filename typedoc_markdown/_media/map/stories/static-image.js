/**
 * Renders a static image layer
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const StaticImageLayerStory = {
  args: {
    center: [-10997148, 4569099],
    layers: [
      {
        type: "Image",
        properties: {
          id: "regions",
        },
        source: {
          type: "ImageStatic",
          imageExtent: [
            -20037508.342789244, -15028131.257091934, 20037508.342789244,
            15028131.257091934,
          ],
          url: "https://imgs.xkcd.com/comics/online_communities.png",
        },
      },
    ],
    zoom: 0,
  },
};

export default StaticImageLayerStory;
