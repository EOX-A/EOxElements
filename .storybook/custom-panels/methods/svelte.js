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

  return await prettier.format(
    `
<script>
import { ${svelteImports.join(", ")} } from "svelte";

${elements
  .map((element) => `import "@eox/${element.tagName.replace("eox-", "")}";`)
  .join("\n")}

${elements
  .map((element) => `let ${camelize(element.tagName)}Ref; // Element reference`)
  .join("\n")}

${
  // NEW: Only define handlers in script if using imperative mode
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

onMount(() => {
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
});

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

${elements
  .map(
    (element) => `
<${element.tagName}
  bind:this={${camelize(element.tagName)}Ref}
  ${element.attributes
    .filter(([key, value]) => key !== "style")
    .map(([key, value]) => `${key}${value === true ? "" : `="${value}"`}`)
    .join("\n    ")}
  ${
    // NEW: Inline event handlers directly if not in imperative mode
    !useImperativeEvents
      ? element.events
          .map(([key, value]) => {
            // Svelte can just wrap the value in {}
            return `on:${key}={${value}}`;
          })
          .join("\n    ")
      : ""
  }
></${element.tagName}>`,
  )
  .join("\n")}

${
  // Style block remains unchanged
  elements.find((element) =>
    element.attributes.find(([key, value]) => key === "style"),
  )
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
