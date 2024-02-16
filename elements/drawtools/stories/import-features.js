import { html } from "lit";
import "../../map/main";
import "../src/main";
import { STORIES_LAYERS_ARRAY } from "../src/enums";

/**
 * Component demonstrating the ability to update map through shape file drag-drop, copy-paste and upload
 */
export const ImportFeaturesWithEditor = {
  render: () => html`
    <!-- Render eox-map component with ID "import" -->
    <eox-map
      id="import"
      style="width:100%; height:400px;"
      .layers=${STORIES_LAYERS_ARRAY}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list". "editor" and "import" features -->
    <eox-drawtools
      for="eox-map#import"
      multiple-features
      import-features
      show-editor
      show-list
    ></eox-drawtools>
  `,
};

export default ImportFeaturesWithEditor;
