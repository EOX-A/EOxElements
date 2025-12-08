// Global import of eox-elements in .storybook/preview.js!
import {
  OnlyDateStory,
  DateWithNavigationStory,
  DatePickerPopupStory,
  DatePickerStandaloneStory,
  TimelineStory,
  ExternalMapRenderingStory,
  DateFilterStory,
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

export const Timeline = TimelineStory;

export const ExternalMapRendering = ExternalMapRenderingStory;

export const DateFilter = DateFilterStory;
