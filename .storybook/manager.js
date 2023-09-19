import { addons } from "@storybook/manager-api";
import { create as createTheme } from "@storybook/theming/create";

addons.setConfig({
  theme: createTheme({
    base: "light",
    brandTitle: "EOX",
    brandUrl: "https://eox.at/",
    brandImage: "https://eox.at/EOX_Logo.svg",
    brandTarget: "_self",
  }),
});
