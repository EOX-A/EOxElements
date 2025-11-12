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

  const hasEvents = elements.some((element) => element.events.length > 0);
  const useImperativeEvents =
    hasEvents &&
    elements.some((el) => el.events.some(([key]) => hasColon(key)));

  const svelteImports = ["onMount"];
  if (useImperativeEvents) {
    svelteImports.push("onDestroy");
  }

  const mainElement = elements.find((el) => el.isPrimary);
  const slottedElements = elements.filter((el) => el.storySlot);
  const siblingElements = elements.filter(
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

    let children = "";
    if (element.isPrimary) {
      children = `
        ${data.args.storySlotContent ? data.args.storySlotContent : ""}
        ${slottedElements.map(renderElementTemplate).join("\n")}
      `;
    }

    return `
<${element.tagName}
  bind:this={${camelize(element.tagName)}Ref}
  ${element.attributes
    .filter(([key, value]) => key !== "style")
    .map(([key, value]) => `${key}${value === true ? "" : `="${value}"`}`)
    .join("\n    ")}
  ${eventHandlers}
>
  ${children}
</${element.tagName}>`;
  };

  const templateOutput = `
    ${mainElement ? renderElementTemplate(mainElement) : ""}
    ${siblingElements.map(renderElementTemplate).join("\n")}
  `;

  const needsOnMount =
    elements.some((e) => e.properties.length > 0) ||
    useImperativeEvents ||
    data.args.storyCodeAfter;

  return await prettier.format(
    `
<script>
import { ${svelteImports.join(", ")} } from "svelte";
${data.args.storyCodeBefore ? `\n${data.args.storyCodeBefore}\n` : ""}

${elements
  .filter((el) => el.storyImport)
  .map((element) => `import "@eox/${element.tagName.replace("eox-", "")}";`)
  .join("\n")}

${elements.map((element) => `let ${camelize(element.tagName)}Ref;`).join("\n")}

${
  useImperativeEvents
    ? elements
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
  ${elements
    .map((element) => {
      const elRef = `${camelize(element.tagName)}Ref`;

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
  ${elements
    .map((element) =>
      element.events.length > 0
        ? `
  const ${camelize(element.tagName)}El = ${camelize(element.tagName)}Ref;
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
  elements.find((element) =>
    element.attributes.find(([key, value]) => key === "style"),
  ) || data.args.storyStyle
    ? `
<style>
${elements
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
