import serialize from "serialize-javascript";
import * as prettierPluginESTree from "prettier/plugins/estree";
import * as parserBabel from "prettier/parser-babel";
import * as parserHtml from "prettier/parser-html";
import * as parserPostCSS from "prettier/parser-postcss";
import * as prettier from "prettier/standalone";
import { camelize, parseElements } from "../helpers";

export const render = async (data) => {
  const elements = parseElements(data);

  // 1. Find which tag names are duplicated
  const tagCounts = new Map();
  elements.forEach((el) =>
    tagCounts.set(el.tagName, (tagCounts.get(el.tagName) || 0) + 1),
  );

  // Keep track of counts *as we map* to create unique var names (e.g., eoxMap1, eoxMap2)
  const varNameCounts = new Map();

  // 2. Map elements to include their varName and selector strategy
  const elementData = elements.map((element, index) => {
    const isDuplicatedTag = (tagCounts.get(element.tagName) || 0) > 1;
    const baseVarName = camelize(element.tagName);

    let varName;
    let elId = null;
    let selector;

    if (isDuplicatedTag) {
      // This tag appears more than once, so we MUST use IDs
      const count = (varNameCounts.get(baseVarName) || 0) + 1;
      varNameCounts.set(baseVarName, count);

      varName = `${baseVarName}${count}`; // e.g., eoxMap1, eoxMap2
      elId = `${element.tagName}-snippet-${index}`; // Unique ID
      selector = `document.getElementById("${elId}")`;
    } else {
      // This tag is unique, so we can use querySelector
      varName = baseVarName; // e.g., eoxChart
      selector = `document.querySelector("${element.tagName}")`;
    }

    return { ...element, varName, elId, selector };
  });

  // Get unique lists for imports and whenDefined
  const uniqueImports = [
    ...new Set(
      elements.map(
        (element) =>
          `import "@eox/${element.tagName.replace("eox-", "")}/dist/${
            element.tagName
          }.js";`,
      ),
    ),
  ];

  return await prettier.format(
    `
${elementData
  .map(
    (element) => `
  <${element.tagName}
    ${element.elId ? `id="${element.elId}"` : ""}
    ${element.attributes
      .map(([key, value]) => `${key}${value === true ? "" : `="${value}"`}`)
      .join("\n    ")}
  >${data.args.storySlotContent ? `\n${data.args.storySlotContent}\n` : ""}</${element.tagName}>`,
  )
  .join("")}

<script type="module">
${uniqueImports.join("\n")}
${data.args.storyCodeBefore ? `\n${data.args.storyCodeBefore}\n` : ""}
${elementData
  .map((element) => `const ${element.varName} = ${element.selector};`)
  .join("\n")}

${elementData
  .map((element, index) =>
    element.properties.length > 0
      ? `${index === 0 ? `// Assign properties` : ""}
Object.assign(${element.varName}, {
  ${element.properties
    .map(
      ([key, value]) =>
        `${key}: ${serialize(value, {
          unsafe: true,
          space: "  ",
        })}`,
    )
    .join(",\n    ")}
});`
      : "",
  )
  .join("\n")}

${elementData
  .map((element, index) =>
    element.events.length > 0
      ? `${index === 0 ? `// Listen for events` : ""}
  ${element.events
    .map(
      ([key, value]) =>
        `${element.varName}.addEventListener("${key}", ${value});`,
    )
    .join("\n  ")}`
      : "",
  )
  .join("\n")}
    ${data.args.storyCodeAfter ? `\n${data.args.storyCodeAfter}\n` : ""}
</script>`,
    {
      parser: "html",
      plugins: [prettierPluginESTree, parserBabel, parserHtml, parserPostCSS],
    },
  );
};
