import styleEOX from "./eox.style";
import styleTailwind from "./tailwind-purged.style";
import listStyle from "./list.style";

/** @type {any} */
const styles = {
  list: listStyle,
};

/**
 * Generate style using tailwind, unstyles, styleOverride and style file
 *
 * @param {Boolean} unstyled
 * @param {{[key: string]: string}} styleOverride
 * @param {string} styleName
 * @param {string} componentName
 * @returns {string}
 */
export default function styleQuery(
  unstyled,
  styleOverride,
  styleName,
  componentName
) {
  return `
        ${!unstyled && styleEOX}
        ${
          //@ts-ignore
          !unstyled && styleTailwind._strings.raw[0]
        }
        ${(!unstyled && styleName && styles[styleName]) || ""}
        ${styleOverride?.["all"] ? styleOverride["all"] : ""}
        ${styleOverride?.[componentName] ? styleOverride[componentName] : ""}
    `;
}
