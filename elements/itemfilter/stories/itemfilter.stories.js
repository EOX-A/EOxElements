// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";

import {
  AutoSpreadStory,
  InlineModeStory,
  NestedPropertyStory,
  PreSetFilterStory,
  PrimaryStory,
} from "./index.js";

export default {
  title: "Elements/eox-itemfilter",
  tags: ["autodocs"],
  component: "eox-itemfilter",
  render: (args) =>
    html`<eox-itemfilter
      .config=${args.config}
      .items=${args.items}
    ></eox-itemfilter>`,
};

/**
 * A basic example for an item filter configuration.
 */
export const Primary = PrimaryStory();

/**
 * Using `inlineMode`, the itemfilter is rendered in a single input field.
 */
export const InlineMode = InlineModeStory();

/**
 * By using `state` inside the `filterProperties', it is possible to start the itemfilter.
 * with a pre-defined state.
 */
export const PreSetFilter = PreSetFilterStory();

/**
 * By using dots (`.`) a nested property can be used as key.
 */
export const NestedProperty = NestedPropertyStory();

/**
 * When using the config option `autoSpreadSingle`, then result aggregations that have only one item.
 * get spread to the root level
 */
export const AutoSpread = AutoSpreadStory();
