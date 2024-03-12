import { dirname, join } from "path";
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
  addons: [getAbsolutePath("@storybook/addon-essentials")],
  framework: getAbsolutePath("@storybook/web-components-vite"),
  docs: {
    autodocs: "tag",
    toc: true,
  },
  staticDirs: [
    "./public",
    "../elements/jsonform/stories/public/",
    "../elements/stacinfo/stories/public/",
    "../elements/storytelling/stories/public/",
  ],
};
export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
