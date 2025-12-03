import {
  PrimaryStory,
  SliderStory,
  DisabledButtonsStory,
  NoMapStory,
  FormatStory,
} from "./index";

export default {
  title: "Elements/eox-timecontrol-2",
  tags: ["autodocs"],
  component: "eox-timecontrol-2",
};

/**
 * Basic usage of eox-timecontrol with navigation and play buttons, linked to an eox-map instance.
 */
export const Primary = PrimaryStory;

/**
 * Shows only the slider for time selection, without navigation or play buttons, linked to an eox-map.
 */
export const Slider = SliderStory;

/**
 * Disables navigation and play buttons, only time selection via eox-map.
 */
export const DisabledButtons = DisabledButtonsStory;

/**
 * Standalone timecontrol without a map, demonstrates event handling for stepchange.
 */
export const NoMap = NoMapStory;

/**
 * Passing the `format` property/attribute, the displayed format can be changed.
 * Supports [dayjs format token strings](https://day.js.org/docs/en/display/format)
 */
export const Format = FormatStory;
