import { html } from "lit";

/**
 * Renders `eox-map` with a custom `Tooltip` hover feature
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const CustomTooltipStory = {
  args: {
    storySlotContent: `<custom-tooltip is="eox-map-tooltip"></custom-tooltip>`,
    storyCodeBefore: `// Create custom-tooltip element \n customElements.define(
      "custom-tooltip",
      class extends HTMLElement {
        constructor() {
          super();
        }
        set feature(newFeature) {
          this.innerHTML = \`
          <div class="surface-container-lowest large-padding small-round large-elevate">
            <h6 class="small bold">\${newFeature.get("ECO_NAME")}</h6>
            <hr class="medium" style="background-color: \${newFeature.get("COLOR_BIO")};" />
            <p class="small-text">
              <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg></i>
              \${newFeature.get("BIOME_NAME")}
            </p>
            <p class="small-text">
              <i class="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg></i>
              \${newFeature.get("REALM")}
            </p>
          </div>
        \`;
        }
      },
    )`,
    layers: [
      {
        type: "Vector",
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
        },
        interactions: [
          {
            type: "select",
            options: {
              id: "selectInteraction",
              condition: "pointermove",
              style: {
                "stroke-color": "red",
                "stroke-width": 3,
              },
            },
          },
        ],
      },
    ],
    center: [15, 48],
    zoom: 4,
    style: "width: 100%; height: 300px;",
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <script>
      ${args.storyCodeBefore};
    </script>
    <eox-map
      .center=${args.center}
      .controls=${args.controls}
      .layers=${args.layers}
      .zoom=${args.zoom}
      style=${args.style}
    >
      <custom-tooltip is="eox-map-tooltip"></custom-tooltip>
    </eox-map>
  `,
};

export default CustomTooltipStory;
