// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import eox from "@eox/eslint-config";

export default [
  ...eox,
  {
    ignores: ["**/dist", "**/types", "**/*.ts", "**/*.d.ts"],
  },
  {
    rules: {
      "jsdoc/check-tag-names": [
        "warn",
        {
          definedTags: [
            "element",
            "attribute",
            "attr",
            "cssproperty",
            "api",
            "ts-expect-error",
          ],
        },
      ],
    },
  },
  ...storybook.configs["flat/recommended"],
];
