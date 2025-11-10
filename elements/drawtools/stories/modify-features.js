/**
 * Component demonstrating the capability to modify features after drawing on the eox-map.
 * This component exhibits the usage of eox-drawtools with allow-modify attribute/property
 * set to enable the modification functionality for the drawn features on the map.
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const ModifyFeatures = {
  args: {
    for: "eox-map#modify",
    multipleFeatures: true,
    allowModify: true,
    storyAdditionalComponents: {
      "eox-map": {
        id: "modify",
        style: STORIES_MAP_STYLE,
        layers: STORIES_LAYERS_ARRAY,
      },
    },
    drawupdate: `(e) => { console.log('drawupdate', e.detail); }`,
  },
  render: (args) => html`
    <eox-drawtools
      for="${args.for}"
      ?multiple-features="${args.multipleFeatures}"
      ?allow-modify="${args.allowModify}"
      @drawupdate=${eval(args.drawupdate)}
    ></eox-drawtools>
    <eox-map
      id="${args.storyAdditionalComponents["eox-map"].id}"
      style="${args.storyAdditionalComponents["eox-map"].style}"
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default ModifyFeatures;
