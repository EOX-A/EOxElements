import { addons } from "storybook/manager-api";
import { create as createTheme } from "storybook/theming/create";

addons.setConfig({
  enableShortcuts: false,
  theme: createTheme({
    base: "light",
    brandTitle: "EOX",
    brandUrl: "https://eox.at/",
    brandImage: "https://hub-brands.eox.at/eox/EOX_Logo.svg",
    brandTarget: "_self",
  }),
  selectedPanel: "eox/storybook-custom-panels/description",
});
