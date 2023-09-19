/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ["../**/stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/web-components-vite",
  docs: {
    autodocs: "tag",
    toc: true,
  },
};
export default config;
