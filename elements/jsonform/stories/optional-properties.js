/**
 * Demonstrating the configuration options for eox-jsonform
 * Shows optional properties editor
 */

const OptionalProperties = {
  args: {
    schema: {
      title: "Optional Properties Demo",
      type: "object",
      required: ["foo"],
      properties: {
        foo: {
          type: "string",
          default: "I am required!",
        },
        bar: {
          type: "string",
          default: "I am optional!",
        },
      },
    },
    value: {},
    options: {
      disable_properties: false,
    },
  },
};
export default OptionalProperties;
