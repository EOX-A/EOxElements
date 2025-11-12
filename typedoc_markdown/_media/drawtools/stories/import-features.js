import { html } from "lit";
import { STORIES_LAYERS_ARRAY } from "../src/enums";

/**
 * Component demonstrating the ability to update map through shape file drag-drop, copy-paste and upload
 */
export const ImportFeaturesWithEditor = {
  args: {
    for: "eox-map#import",
    "multiple-features": true,
    "import-features": true,
    "show-editor": true,
    "show-list": true,
    storyAdditionalComponents: {
      "eox-map": {
        id: "import",
        style: "width:100%; height:400px;",
        layers: STORIES_LAYERS_ARRAY,
      },
    },
  },
  render: (args) => html`
    <eox-drawtools
      for=${args.for}
      ?multiple-features=${args["multiple-features"]}
      ?import-features=${args["import-features"]}
      ?show-editor=${args["show-editor"]}
      ?show-list=${args["show-list"]}
    ></eox-drawtools>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
      style=${args.storyAdditionalComponents["eox-map"].style}
    ></eox-map>
  `,
};

export default ImportFeaturesWithEditor;
