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
    schema: "https://esa-earthcode.github.io/open-science-catalog-validation/schemas/projects/children.json",
    // value: externalValue,
    value: "https://esa-earthcode.github.io/open-science-catalog-metadata/projects/arcticsummit-arctic-summer-ice-thickness/collection.json",
    onReady: () => setTimeout(() => {console.log(document.querySelector("eox-jsonform").value)}),
  },
};
export default External;
