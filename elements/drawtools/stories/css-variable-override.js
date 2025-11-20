/**
 * Component demonstrating css variable override inside <style>
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const CSSVariableOverride = {
  args: {
    for: "eox-map#css-var-override",
    "multiple-features": true,
    "show-list": true,
    style: "--primary: #ffa55c; --error: #00ff00;",
    storyAdditionalComponents: {
      "eox-map": {
        id: "css-var-override",
        layers: STORIES_LAYERS_ARRAY,
        style: STORIES_MAP_STYLE,
      },
    },
  },
  render: (args) => html`
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
    <eox-drawtools
      for=${args.for}
      ?multiple-features=${args["multiple-features"]}
      ?show-list=${args["show-list"]}
      style=${args.style}
    ></eox-drawtools>
  `,
};

export default CSSVariableOverride;
