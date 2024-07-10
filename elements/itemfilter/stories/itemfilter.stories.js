// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";

import {
  AutoSpreadStory,
  InlineModeStory,
  MultiSelectStory,
  PrimaryStory,
  SortedMultiSelectStory,
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

export const Primary = PrimaryStory();

export const MultiSelect = MultiSelectStory();

export const SortedMultiSelect = SortedMultiSelectStory();

export const AutoSpread = AutoSpreadStory();

export const InlineMode = InlineModeStory();
