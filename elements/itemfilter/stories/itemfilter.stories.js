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
 * story configuration for the Primary item filter.
 */
export const Primary = PrimaryStory();

/**
 * a story configuration for the Auto Spread result.
 */
export const AutoSpread = AutoSpreadStory();

/**
 * a story configuration for the InlineMode item filter.
 */
export const InlineMode = InlineModeStory();

/**
 * a story configuration for the pre-set item filter.
 */
export const PreSetFilter = PreSetFilterStory();

export const NestedProperty = NestedPropertyStory();
