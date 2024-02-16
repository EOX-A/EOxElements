/**
 *
 */
import { html } from "lit";
import "../../map/main";
import "../src/main";
import { STORIES_LAYERS_ARRAY } from "../src/enums";

export const ImportFeaturesWithEditor = {
  render: () => html`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="list"
      style="width:100%; height:400px;"
      .layers=${STORIES_LAYERS_ARRAY}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list". "editor" and "import" features -->
    <eox-drawtools
      for="eox-map#list"
      multiple-features
      import-features
      show-editor
      show-list
    ></eox-drawtools>
  `,
};

export default ImportFeaturesWithEditor;
