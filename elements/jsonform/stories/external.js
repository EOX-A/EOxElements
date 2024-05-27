/**
 * External URL component demonstrating the configuration options for eox-jsonform
 * It renders json-form based on external url
 */
const externalSchema = `${
  window.location.href.split("iframe.html")[0]
}/catalogSchema.json`;
const externalValue = `${
  window.location.href.split("iframe.html")[0]
}/catalogValue.json`;

const External = {
  args: {
    schema: externalSchema,
    value: externalValue,
  },
};
export default External;
