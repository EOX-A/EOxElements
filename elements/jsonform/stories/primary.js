/**
 * Primary component demonstrating the configuration options for eox-jsonform
 * It renders basic input form based on json-form config
 */
import basicSchema from "./public/basicSchema.json";

const Primary = {
  args: {
    schema: basicSchema,
    onChange: (e) => console.info("New value:", e.detail),
  },
};
export default Primary;
