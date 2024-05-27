/**
 * Markdown component demonstrating the configuration options for eox-jsonform
 * It renders markdown editor based on easyMDE config JSON
 */
import markdownSchema from "./public/markdownSchema.json";
import markdownValue from "./public/markdownValue.json";

const Markdown = {
  args: {
    schema: markdownSchema,
    value: markdownValue,
  },
};
export default Markdown;
