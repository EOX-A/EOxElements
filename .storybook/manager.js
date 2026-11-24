import { addons } from "storybook/manager-api";
import { create as createTheme } from "storybook/theming/create";

addons.setConfig({
  enableShortcuts: false,
  theme: createTheme({
    base: "light",
    brandTitle: "EOxElements",
    brandUrl: "./",
    brandImage: "./EOxElements_Logo.svg",
    brandTarget: "_self",
  }),
  selectedPanel: "eox/storybook-custom-panels/description",
});
