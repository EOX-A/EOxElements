// Turn kebab-case into camel-case
export const camelize = (str) =>
  str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });

// Helper function to capitalize strings for event handler names
export const capitalize = (s) => {
  if (typeof s !== "string" || !s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// Helper to camelCase event names with special chars (e.g., "pointermove:item" -> "pointermoveItem")
export const camelCaseEventName = (s) => {
  return s.replace(/[:.-](\w)/g, (all, letter) => letter.toUpperCase());
};

// Checks for colons in event names, which break template syntax
export const hasColon = (s) => s.includes(":");

export { parseElements } from "./parse-elements";
