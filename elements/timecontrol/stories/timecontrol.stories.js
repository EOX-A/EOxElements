// Global import of eox-elements in .storybook/preview.js!
import { OnlyDateStory, DateWithNavigationStory } from "./index";

export default {
  title: "Elements/eox-timecontrol",
  tags: ["autodocs"],
  component: "eox-timecontrol",
};

export const OnlyDate = OnlyDateStory;

export const DateWithNavigation = DateWithNavigationStory;
