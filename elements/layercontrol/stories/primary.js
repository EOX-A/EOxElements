import { html } from "lit";
import {
  STORIES_MAIN_MAP_LAYERS,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
} from "../src/enums";

const PrimaryStory = {
  args: {
    style: STORIES_LAYERCONTROL_STYLE,
    storyAdditionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        zoom: 3,
        layers: STORIES_MAIN_MAP_LAYERS,
      },
    },
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol .style=${args.style}></eox-layercontrol>
      <eox-map
        .style=${args.storyAdditionalComponents["eox-map"].style}
        .zoom=${args.storyAdditionalComponents["eox-map"].zoom}
        .layers=${args.storyAdditionalComponents["eox-map"].layers}
      ></eox-map>
    </div>
  `,
};

export default PrimaryStory;
