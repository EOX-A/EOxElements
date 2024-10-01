/**
 * Loading Indicators can also be centered over the entire map by setting the option `type` to `'fullscreen'`, adapting the opacity is adviced when doing so.
 * Custom rotating SVG-Icons can be used by setting the svg data as the `spinnerSvg`-option.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const CustomFullScreenLoadingIndicatorStory = {
  args: {
    zoom: 9,
    center: [0, 51.5],
    controls: {
      LoadingIndicator: {
        type: "fullscreen",
        opacity: 0.2,
        spinnerSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="120 50" r="30" stroke-width="22" stroke="#cd4609" fill="none" cy="50" cx="50">
        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.4s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>`,
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

export default CustomFullScreenLoadingIndicatorStory;
