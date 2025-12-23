/**
 * Stories for eox-feedback component showcasing various configurations.
 * These stories provide visual representations and usage examples for different scenarios.
 */
import { PrimaryStory, ButtonStory, CustomFormStory } from "./index";

export default {
  title: "Elements/eox-feedback",
  tags: ["autodocs"],
  component: "eox-feedback",
};

/**
 * Primary story showcasing basic usage. The `endpoint` is set to a fake URL for demonstration purposes.
 */
export const Primary = PrimaryStory;

/**
 * Triggering of eox-feeback modal via button. The button can be positioned on the page using the `position` attribute.
 * Can be `top-left`, `top-right`, `bottom-left`, or `bottom-right`.
 */
export const Button = ButtonStory;

/**
 * Custom form schema for eox-feedback.
 * By passing a JSON schema to the `schema` property, the form can be fully customized.
 * This functionality is powered by [eox-jsonform](https://github.com/EOX-A/EOxElements/tree/main/elements/jsonform).
 *
 * Fields can be hidden by setting `options: { hidden: true }` in the schema property.
 * Values can be passed programmatically by setting the `default` property in the schema.
 */
export const CustomForm = CustomFormStory;
