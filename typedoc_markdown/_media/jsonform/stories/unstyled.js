/**
 * Catalog component demonstrating the configuration options for eox-jsonform
 * It renders unstyled input form based on basic json-form config
 */
import catalogSchema from "./public/catalogSchema.json";
import catalogValue from "./public/catalogValue.json";

const UnStyled = {
  args: {
    schema: catalogSchema,
    value: catalogValue,
    unstyled: true,
  },
};
export default UnStyled;
