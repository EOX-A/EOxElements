import { html } from "lit";
import {
  STORIES_MAP_STYLE,
  STORIES_BlUE_VECTOR_LAYERS,
  STORIES_GREY_VECTOR_LAYERS,
} from "../src/enums";
/**
 * Drawtools component demonstrating the configuration options for eox-jsonform
 * Allows user to select a feature from an external eox-map as an input
 */
import featureSchema from "./public/featureSchema.json";

const FeatureSelection = {
  args: {
    schema: featureSchema,
    onChange: (e) => console.info("New value:", e.detail),
  },
  render: (args) => html`
    <eox-map 
    id="first" 
    style=${STORIES_MAP_STYLE} 
    .layers=${STORIES_GREY_VECTOR_LAYERS} 
    />
    </eox-map>
    <eox-jsonform
    .schema=${args.schema}
    .value=${args.value}
    .noShadow=${false}
    .unstyled=${args.unstyled}
    @change=${args.onChange}
    ></eox-jsonform>
    <eox-map 
    id="second" 
    style=${STORIES_MAP_STYLE} 
    .layers=${STORIES_BlUE_VECTOR_LAYERS} 
    />
    </eox-map>
  `,
};
export default FeatureSelection;
