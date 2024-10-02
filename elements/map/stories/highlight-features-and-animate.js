import { html } from "lit";

/**
 * Renders `Select` with `animation` to the selection.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const HighlightFeaturesAndAnimateStory = {
  args: {
    config: {
      layers: [
        {
          type: "Vector",
          background: "lightgrey",
          properties: {
            id: "regions",
          },
          source: {
            type: "Vector",
            url: "https://openlayers.org/data/vector/ecoregions.json",
            format: "GeoJSON",
            attributions: "Regions: @ openlayers.org",
          },
          style: {
            "stroke-color": "black",
            "stroke-width": 1,
            "fill-color": "darkgrey",
          },
          interactions: [
            {
              type: "select",
              options: {
                id: "selectInteraction",
                condition: "click",
                style: {
                  "stroke-color": "white",
                  "stroke-width": 3,
                },
              },
            },
          ],
        },
      ],
    },
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      id="highlightAndAnimate"
      style="width: 100%; height: 300px;"
      .config=${args.config}
      @loadend=${() => {
        /** @type {import("../src/main").EOxMap} **/ (
          /** @type {any} **/ document.querySelector(
            "eox-map#highlightAndAnimate"
          )
        ).selectInteractions.selectInteraction.highlightById([664, 795, 789], {
          duration: 400,
          padding: [50, 50, 50, 50],
        });
      }}
    ></eox-map>
  `,
};

export default HighlightFeaturesAndAnimateStory;
