// Global import of eox-elements in .storybook/preview.js!
import {
  PrimaryStory,
  SliderStory,
  ProgrammaticTimeSelectionStory,
  DisabledPlayButtonStory,
} from "./index";

export default {
  title: "Elements/eox-timecontrol",
  tags: ["autodocs"],
  component: "eox-timecontrol",
};

export const Primary = PrimaryStory;

export const Slider = SliderStory;

export const ProgrammaticTimeSelection = ProgrammaticTimeSelectionStory;

export const DisabledPlayButton = DisabledPlayButtonStory;
