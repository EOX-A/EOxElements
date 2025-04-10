import eox from "@eox/eslint-config";

export default [
  ...eox,
  {
    ignores: ["**/dist", "**/types", "**/*.ts", "**/*.d.ts"],
  },
];
