import { html } from "lit";
import { STORIES_MAP_STYLE, STORIES_GREY_VECTOR_LAYERS } from "../src/enums";
import featureSchema from "./public/featureSchema.json";

export default {
  args: {
    schema: featureSchema,
    change: (e) => console.info("New value:", e.detail),
    storyAdditionalComponents: {
      "eox-map": {
        id: "features",
        style: STORIES_MAP_STYLE,
        layers: STORIES_GREY_VECTOR_LAYERS,
      },
    },
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema} @change=${args.change}></eox-jsonform>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};
