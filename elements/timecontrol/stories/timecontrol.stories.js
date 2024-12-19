// Global import of eox-elements in .storybook/preview.js!
import {
  PrimaryStory,
  SliderStory,
  ProgrammaticTimeSelectionStory,
  DisabledButtonsStory,
  NoMapStory,
  FormatStory,
} from "./index";

export default {
  title: "Elements/eox-timecontrol",
  tags: ["autodocs"],
  component: "eox-timecontrol",
};

export const Primary = PrimaryStory;

export const Slider = SliderStory;

export const ProgrammaticTimeSelection = ProgrammaticTimeSelectionStory;

export const DisabledButtons = DisabledButtonsStory;

export const NoMap = NoMapStory;

/**
 * Passing the `format` property/attribute, the displayed format can be changed.
 * Supports [dayjs format token strings](https://day.js.org/docs/en/display/format)
 */
export const Format = FormatStory;
