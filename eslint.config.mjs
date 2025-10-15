// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import eox from "@eox/eslint-config";

export default [
  ...eox,
  {
    ignores: ["**/dist", "**/types", "**/*.ts", "**/*.d.ts"],
  },
  ...storybook.configs["flat/recommended"],
];
