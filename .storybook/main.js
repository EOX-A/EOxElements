/** @type { import('@storybook/web-components-vite').StorybookConfig } */
import { readCsf } from "@storybook/csf-tools";

const csfIndexer = {
  test: /(stories|story)\.(dev)\.(m?js|ts)x?$/,
  createIndex: async (fileName, options) =>
    (await readCsf(fileName, options)).parse().indexInputs,
};

const config = {
  stories: () => {
    let list = ["./About.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"];
    if (process.env.NODE_ENV === "development")
      list.push("../**/*.stories.dev.@(js|jsx|mjs|ts|tsx)");

    return list;
  },
  experimental_indexers: (existingIndexers) =>
    [csfIndexer].concat(existingIndexers || []),
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/web-components-vite",
  docs: {
    autodocs: "tag",
    toc: true,
  },
  staticDirs: ["../elements/storytelling/stories/public/"],
};
export default config;
