/**
 * Renders Geolocation Control in `eox-map`
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const GeolocationStory = {
  args: {
    zoom: 7,
    controls: {
      Geolocation: {
        tracking: true,
        trackHeading: true,
        centerWhenReady: false,
        highAccuracy: true,
        trackAccuracy: true,
        style: {
          "circle-radius": 10,
          "circle-fill-color": "red",
          "circle-stroke-color": "white",
          "circle-stroke-width": 2,
        },
        buttonIcon:
          "https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png",
      },
      Zoom: {},
    },
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
    ],
  },
};

export default GeolocationStory;
