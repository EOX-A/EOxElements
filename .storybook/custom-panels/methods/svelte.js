import serialize from "serialize-javascript";
import * as prettierPluginESTree from "prettier/plugins/estree";
import * as parserBabel from "prettier/parser-babel";
import * as parserHtml from "prettier/parser-html";
import * as parserPostCSS from "prettier/parser-postcss";
import * as pluginSvelte from "prettier-plugin-svelte/browser";
import * as prettier from "prettier/standalone";
import {
  camelize,
  parseElements,
  capitalize,
  camelCaseEventName,
  hasColon,
} from "../helpers";

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

  const hasEvents = elementData.some((element) => element.events.length > 0);
  const useImperativeEvents =
    hasEvents &&
    elementData.some((el) => el.events.some(([key]) => hasColon(key)));

  const svelteImports = ["onMount"];
  if (useImperativeEvents) {
    svelteImports.push("onDestroy");
  }

  const mainElement = elementData.find((el) => el.isPrimary);
  const slottedElements = elementData.filter((el) => el.storySlot);
  const siblingElements = elementData.filter(
    (el) => !el.isPrimary && !el.storySlot,
  );

  // Helper to render a single element's template
  const renderElementTemplate = (element) => {
    const eventHandlers = !useImperativeEvents
      ? element.events
          .map(([key, value]) => {
            return `on:${key}={${value}}`;
          })
          .join("\n    ")
      : "";

    const attributesTemplate = element.attributes
      .filter(([key, value]) => key !== "style")
      .map(([key, value]) => `${key}${value === true ? "" : `="${value}"`}`)
      .join("\n    ");

    let children = "";
    if (element.isPrimary) {
      const slottedElementsTemplate = slottedElements
        .map(renderElementTemplate)
        .join("\n");
      if (data.args.storySlotContent) {
        children += `\n${data.args.storySlotContent}\n`;
      }
      if (slottedElementsTemplate) {
        children += `\n${slottedElementsTemplate}\n`;
      }
    }

    if (children.trim() === "") {
      // No children
      return `<${element.tagName}
  bind:this={${element.varName}}
  ${attributesTemplate}
  ${eventHandlers}
></${element.tagName}>`;
    } else {
      // Has children
      return `
<${element.tagName}
  bind:this={${element.varName}}
  ${attributesTemplate}
  ${eventHandlers}
>
  ${children}
</${element.tagName}>`;
    }
  };

  const templateOutput = `
    ${mainElement ? renderElementTemplate(mainElement) : ""}
    ${siblingElements.map(renderElementTemplate).join("\n")}
  `;

  const needsOnMount =
    elementData.some((e) => e.properties.length > 0) ||
    useImperativeEvents ||
    data.args.storyCodeAfter;

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
<script>
import { ${svelteImports.join(", ")} } from "svelte";
${data.args.storyCodeBefore ? `\n${data.args.storyCodeBefore}\n` : ""}

${uniqueImports.join("\n")}

${elementData.map((element) => `let ${element.varName};`).join("\n")}

${
  useImperativeEvents
    ? elementData
        .map((element) =>
          element.events.length > 0
            ? `
// Event handlers for ${element.tagName}
${element.events
  .map(([key, value]) => {
    const handlerName = `handle${capitalize(camelCaseEventName(key))}`;
    return `const ${handlerName} = ${value};`;
  })
  .join("\n")}
`
            : "",
        )
        .join("\n")
    : ""
}

${
  needsOnMount
    ? `onMount(() => {
  ${elementData
    .map((element) => {
      const elRef = `${element.varName}`;

      const propertiesBlock =
        element.properties.length > 0
          ? `
  // Assign properties to ${element.tagName}
  if (${elRef}) {
    Object.assign(${elRef}, {
      ${element.properties
        .map(
          ([key, value]) =>
            `${key}: ${serialize(value, {
              unsafe: true,
              space: "  ",
            })}`,
        )
        .join(",\n        ")}
    });
  }
  `
          : "";

      const eventsBlock =
        useImperativeEvents && element.events.length > 0
          ? `
  // Add event listeners to ${element.tagName}
  if (${elRef}) {
    ${element.events
      .map(([key, value]) => {
        const handlerName = `handle${capitalize(camelCaseEventName(key))}`;
        return `${elRef}.addEventListener("${key}", ${handlerName});`;
      })
      .join("\n    ")}
  }
  `
          : "";

      return propertiesBlock + eventsBlock;
    })
    .join("\n")}
    ${data.args.storyCodeAfter ? `\n${data.args.storyCodeAfter}\n` : ""}
    });`
    : ""
}

${
  useImperativeEvents
    ? `
onDestroy(() => {
  ${elementData
    .map((element) =>
      element.events.length > 0
        ? `
  const ${camelize(element.tagName)}El = ${element.varName};
  if (${camelize(element.tagName)}El) {
    ${element.events
      .map(([key, value]) => {
        const handlerName = `handle${capitalize(camelCaseEventName(key))}`;
        return `${camelize(
          element.tagName,
        )}El.removeEventListener("${key}", ${handlerName});`;
      })
      .join("\n    ")}
  }
  `
        : "",
    )
    .join("\n")}
});`
    : ""
}
</script>

${templateOutput}

${
  elementData.find((element) =>
    element.attributes.find(([key, value]) => key === "style"),
  ) || data.args.storyStyle
    ? `
<style>
${elementData
  .map((element) => {
    const styleValue = element.attributes
      .filter(([key, value]) => key === "style")
      .map(([key, value]) => value)
      .join("");
    return styleValue
      ? `
${element.tagName} {
  ${styleValue}
}
`
      : "";
  })
  .join("")}
  ${data.args.storyStyle ? `\n${data.args.storyStyle}` : ""}
</style>
  `
    : ""
}
`,
    {
      parser: "svelte",
      plugins: [
        prettierPluginESTree,
        parserBabel,
        parserHtml,
        parserPostCSS,
        pluginSvelte,
      ],
    },
  );
};
