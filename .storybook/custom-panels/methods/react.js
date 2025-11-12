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
const cssToCamelCase = (s) => {
  if (s.startsWith("--")) return `"${s}"`; // Don't camelCase CSS variables
  return s.replace(/-(\w)/g, (all, letter) => letter.toUpperCase());
};

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

  const tagCounts = new Map();
  elements.forEach((el) =>
    tagCounts.set(el.tagName, (tagCounts.get(el.tagName) || 0) + 1),
  );
  const varNameCounts = new Map();

  const elementData = elements.map((element) => {
    const isDuplicatedTag = (tagCounts.get(element.tagName) || 0) > 1;
    const baseVarName = `${camelize(element.tagName)}Ref`;
    let varName;

    if (isDuplicatedTag) {
      const count = (varNameCounts.get(baseVarName) || 0) + 1;
      varNameCounts.set(baseVarName, count);
      varName = `${baseVarName}${count}`;
    } else {
      varName = baseVarName;
    }
    return { ...element, varName };
  });

  // Helper to render JSX for a single element
  const renderElementJSX = (element) => {
    const styleAttr = element.attributes.find(([key]) => key === "style");
    const styleObject = styleAttr ? styleStringToObject(styleAttr[1]) : null;
    const stylePropString = styleObject
      ? `style={{ ${Object.entries(styleObject)
          .map(
            ([key, value]) => `${key}: "${String(value).replace(/"/g, '\\"')}"`,
          )
          .join(", ")} }}`
      : "";
    const otherAttributes = element.attributes
      .filter(([key, value]) => key !== "style")
      .map(([key, value]) => `${key}${value === true ? "" : `="${value}"`}`)
      .join("\n        ");

    let children = "";
    if (element.isPrimary) {
      const slottedElements = elementData.filter((el) => el.storySlot);
      const slottedElementsJSX = slottedElements
        .map(renderElementJSX)
        .join("\n");
      if (data.args.storySlotContent) {
        children += `\n${data.args.storySlotContent}\n`;
      }
      if (slottedElementsJSX) {
        children += `\n${slottedElementsJSX}\n`;
      }
    }

    if (children.trim() === "") {
      // No children
      return `<${element.tagName}
        ref={${element.varName}}
        ${otherAttributes}
        ${stylePropString}
      ></${element.tagName}>`;
    } else {
      // Has children
      return `
      <${element.tagName}
        ref={${element.varName}}
        ${otherAttributes}
        ${stylePropString}
      >
        ${children}
      </${element.tagName}>`;
    }
  };

  const mainElement = elementData.find((el) => el.isPrimary);
  const siblingElements = elementData.filter(
    (el) => !el.isPrimary && !el.storySlot,
  );

  const elementsJsx = `
    ${data.args.storyStyle ? `\n<style>{\`${data.args.storyStyle}\`}</style>\n` : ""}
    ${mainElement ? renderElementJSX(mainElement) : ""}
    ${siblingElements.map(renderElementJSX).join("\n")}
  `;

  const rootElementsCount = siblingElements.length + (mainElement ? 1 : 0);
  const returnBlock =
    rootElementsCount > 1 || data.args.storyStyle
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

  const uniqueImports = [
    ...new Set(
      elementData
        .filter((el) => el.storyImport)
        .map(
          (element) => `import "@eox/${element.tagName.replace("eox-", "")}";`,
        ),
    ),
  ];

  return await prettier.format(
    `
import React, { useEffect, useRef } from "react";

${uniqueImports.join("\n")}

export default function StorySnippet() {
  ${data.args.storyCodeBefore ? `\n${data.args.storyCodeBefore}\n` : ""}
  
  ${elementData
    .map((element) => `const ${element.varName} = useRef(null);`)
    .join("\n")}

  ${
    elementData.some((e) => e.properties.length > 0)
      ? `// Assign properties
  useEffect(() => {
    ${elementData
      .map((element) =>
        element.properties.length > 0
          ? `
    const ${camelize(element.tagName)}El = ${element.varName}.current;
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
      }, []);`
      : ""
  }
    ${data.args.storyCodeAfter ? `\n${data.args.storyCodeAfter}\n` : ""}

  ${
    elementData.some((e) => e.events.length > 0)
      ? `// Add event listeners${elementData
          .map((element) =>
            element.events.length > 0
              ? `
  useEffect(() => {
    const el = ${element.varName}.current;
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
          .join("\n")}`
      : ""
  }

  ${returnBlock}
}
`,
    {
      parser: "babel",
      plugins: [prettierPluginESTree, parserBabel, parserHtml, parserPostCSS],
    },
  );
};
