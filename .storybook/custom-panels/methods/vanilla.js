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
  const varNameCounts = new Map();

  // 2. Map elements to include their varName and selector strategy
  const elementData = elements.map((element, index) => {
    const isDuplicatedTag = (tagCounts.get(element.tagName) || 0) > 1;
    const baseVarName = camelize(element.tagName);
    const existingId = element.attributes.find(([key]) => key === "id")?.[1];
    let varName;
    let elIdToRender = null;
    let selector;
    let selectorId = existingId;
    if (isDuplicatedTag) {
      const count = (varNameCounts.get(baseVarName) || 0) + 1;
      varNameCounts.set(baseVarName, count);
      varName = `${baseVarName}${count}`;
      if (!existingId) {
        elIdToRender = `${element.tagName}-snippet-${index}`;
        selectorId = elIdToRender;
      }
      selector = `document.getElementById("${selectorId}")`;
    } else {
      varName = baseVarName;
      selector = `document.querySelector("${element.tagName}")`;
    }
    return { ...element, varName, elIdToRender, selector };
  });

  // Get unique lists for imports (filtered)
  const uniqueImports = [
    ...new Set(
      elementData
        .filter((element) => element.storyImport)
        .map(
          (element) =>
            `import "@eox/${element.tagName.replace("eox-", "")}/dist/${
              element.tagName
            }.js";`,
        ),
    ),
  ];

  // 3. Update HTML Rendering Logic
  const mainElement = elementData.find((el) => el.isPrimary);
  const slottedElements = elementData.filter((el) => el.storySlot);
  const siblingElements = elementData.filter(
    (el) => !el.isPrimary && !el.storySlot,
  );

  // Helper to render a single element's HTML
  const renderElementHTML = (element) => {
    const attributesHTML = [
      element.elIdToRender ? `id="${element.elIdToRender}"` : null,
      ...element.attributes.map(
        ([key, value]) => `${key}${value === true ? "" : `="${value}"`}`,
      ),
    ]
      .filter(Boolean)
      .join("");

    let childrenHTML = "";
    if (element.isPrimary) {
      const slottedElementsHTML = slottedElements
        .map((slotEl) => renderElementHTML(slotEl))
        .join("");

      if (data.args.storySlotContent) {
        childrenHTML += `\n${data.args.storySlotContent}\n`;
      }
      if (slottedElementsHTML) {
        childrenHTML += `\n${slottedElementsHTML}\n`;
      }
    }

    if (childrenHTML.trim() === "") {
      return `<${element.tagName}
        ${attributesHTML}
      ></${element.tagName}>`;
    } else {
      return `
      <${element.tagName}
        ${attributesHTML}
      >
        ${childrenHTML}
      </${element.tagName}>`;
    }
  };

  const htmlOutput = `
    ${mainElement ? renderElementHTML(mainElement) : ""}
    ${siblingElements.map(renderElementHTML).join("")}
  `;

  return await prettier.format(
    `
${data.args.storyStyle ? `<style>\n${data.args.storyStyle}\n</style>` : ""}
${htmlOutput}

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
