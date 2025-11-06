import serialize from "serialize-javascript";
import * as prettierPluginESTree from "prettier/plugins/estree";
import * as parserBabel from "prettier/parser-babel";
import * as parserHtml from "prettier/parser-html";
import * as parserPostCSS from "prettier/parser-postcss";
import * as prettier from "prettier/standalone";
import {
  camelize,
  parseElements,
  capitalize,
  camelCaseEventName,
} from "../helpers";

// --- React-specific style helpers ---

// Helper for CSS property names (e.g., "margin-left" -> "marginLeft")
const cssToCamelCase = (s) => {
  return s.replace(/-(\w)/g, (all, letter) => letter.toUpperCase());
};

/**
 * Converts a CSS style string into a React style object.
 * @param {string} styleStr - e.g., "width: 400px; height: 300px; margin-left: 7px"
 * @returns {object} - e.g., { width: "400px", height: "300px", marginLeft: "7px" }
 */
const styleStringToObject = (styleStr) => {
  if (!styleStr || typeof styleStr !== "string") return null;

  return Object.fromEntries(
    styleStr
      .split(";")
      .filter((rule) => rule.trim())
      .map((rule) => {
        const [key, ...valueParts] = rule.split(":");
        if (!key || valueParts.length === 0) return null;
        const camelKey = cssToCamelCase(key.trim());
        const value = valueParts.join(":").trim();
        return [camelKey, value];
      })
      .filter(Boolean),
  );
};

// --- End of style helpers ---

export const render = async (data) => {
  const elements = parseElements(data);

  // Generate the JSX for all elements first
  const elementsJsx = elements
    .map((element) => {
      // Find and process the style attribute separately
      const styleAttr = element.attributes.find(([key]) => key === "style");
      const styleObject = styleAttr ? styleStringToObject(styleAttr[1]) : null;

      // Build the style object string for JSX
      const stylePropString = styleObject
        ? `style={{ ${Object.entries(styleObject)
            .map(
              ([key, value]) =>
                `${key}: "${String(value).replace(/"/g, '\\"')}"`,
            )
            .join(", ")} }}`
        : "";

      // Render all other attributes normally
      const otherAttributes = element.attributes
        .filter(([key, value]) => key !== "style")
        .map(([key, value]) => `${key}${value === true ? "" : `="${value}"`}`)
        .join("\n        ");

      return `
      <${element.tagName}
        ref={${camelize(element.tagName)}Ref}
        ${otherAttributes}
        ${stylePropString}
      >${data.args.storySlotContent ? `\n${data.args.storySlotContent}\n` : ""}</${element.tagName}>`;
    })
    .join("\n");

  const returnBlock =
    elements.length > 1
      ? `
  return (
    <>
${elementsJsx}
    </>
  );
`
      : `
  return (
${elementsJsx}
  );
`;

  return await prettier.format(
    `
import React, { useEffect, useRef } from "react";

${elements
  .map((element) => `import "@eox/${element.tagName.replace("eox-", "")}";`)
  .join("\n")}

export default function StorySnippet() {
  ${data.args.storyCodeBefore ? `\n${data.args.storyCodeBefore}\n` : ""}
  ${elements
    .map((element) => `const ${camelize(element.tagName)}Ref = useRef(null);`)
    .join("\n")}

  // Assign properties
  useEffect(() => {
    ${elements
      .map((element) =>
        element.properties.length > 0
          ? `
    const ${camelize(element.tagName)}El = ${camelize(
      element.tagName,
    )}Ref.current;
    if (${camelize(element.tagName)}El) {
      Object.assign(${camelize(element.tagName)}El, {
        ${element.properties
          .map(
            ([key, value]) =>
              `${key}: ${serialize(value, {
                unsafe: true,
                space: "  ",
              })}`,
          )
          .join(",\n          ")}
      });
    }
    `
          : "",
      )
      .join("\n")}
      ${data.args.storyCodeAfter ? `\n${data.args.storyCodeAfter}\n` : ""}
  }, []);

  // Add event listeners${elements
    .map((element) =>
      element.events.length > 0
        ? `
  useEffect(() => {
    const el = ${camelize(element.tagName)}Ref.current;
    if (!el) return;

    ${element.events
      .map(([key, value]) => {
        const handlerName = `handle${capitalize(camelCaseEventName(key))}`;
        return `const ${handlerName} = ${value};\n    el.addEventListener("${key}", ${handlerName});`;
      })
      .join("\n    ")}

    return () => {
      ${element.events
        .map(([key, value]) => {
          const handlerName = `handle${capitalize(camelCaseEventName(key))}`;
          return `el.removeEventListener("${key}", ${handlerName});`;
        })
        .join("\n      ")}
    };
  }, []);
  `
        : "",
    )
    .join("\n")}

  ${returnBlock}
}
`,
    {
      parser: "babel",
      plugins: [prettierPluginESTree, parserBabel, parserHtml, parserPostCSS],
    },
  );
};
