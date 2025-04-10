/**
 * Stories for eox-feedback component showcasing various configurations.
 * These stories provide visual representations and usage examples for different scenarios.
 */
import { PrimaryStory, ButtonStory } from "./index";

export default {
  title: "Elements/eox-feedback",
  tags: ["autodocs"],
  component: "eox-feedback",
};

// Exporting each individual story for the eox-feedback component.

/**
 * Primary story showcasing basic usage.
 */
export const Primary = PrimaryStory;

/**
 * Triggering of eox-feeback modal via button. The button can be positioned using the `position` attribute.
 * Can be `top-left`, `top-right`, `bottom-left`, or `bottom-right`.
 */
export const Button = ButtonStory;
