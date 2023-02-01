module.exports = {
  env: {
    "cypress/globals": true,
  },
  extends: ["@eox", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["cypress", "@typescript-eslint"],
  root: true,
};
