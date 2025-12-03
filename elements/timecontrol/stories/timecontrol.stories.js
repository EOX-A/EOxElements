// Global import of eox-elements in .storybook/preview.js!
import {
  OnlyDateStory,
  DateWithNavigationStory,
  DatePickerPopupStory,
  DatePickerStandaloneStory,
} from "./index";

export default {
  title: "Elements/eox-timecontrol",
  tags: ["autodocs"],
  component: "eox-timecontrol",
};

export const OnlyDate = OnlyDateStory;

export const DateWithNavigation = DateWithNavigationStory;

export const DatePickerPopup = DatePickerPopupStory;

export const DatePickerStandalone = DatePickerStandaloneStory;
