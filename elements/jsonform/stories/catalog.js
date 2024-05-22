/**
 * Catalog component demonstrating the configuration options for eox-jsonform
 * It renders input form based on basic json-form config and STAC catalog config
 */
import catalogSchema from "./public/catalogSchema.json";
import catalogValue from "./public/catalogValue.json";

const Catalog = {
  args: {
    schema: catalogSchema,
    value: catalogValue,
  },
};
export default Catalog;
