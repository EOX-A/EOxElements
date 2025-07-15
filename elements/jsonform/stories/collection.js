/**
 * Collection component demonstrating the configuration options for eox-jsonform
 * It renders input form based on json-form config and STAC collection config
 */
import collectionSchema from "./public/collectionSchema.json";
import collectionValue from "./public/collectionValue.json";

const Collection = {
  args: {
    schema: collectionSchema,
    value: collectionValue,
    options: {
      disable_edit_json: false,
      disable_properties: false,
    },
  },
};
export default Collection;
