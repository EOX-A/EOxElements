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
  hasColon,
} from "../helpers";

export const render = async (data) => {
  const elements = parseElements(data);

  const hasEvents = elements.some((element) => element.events.length > 0);
  const useImperativeEvents =
    hasEvents &&
    elements.some((el) => el.events.some(([key]) => hasColon(key)));

  const vueImports = ["ref", "onMounted"];
  if (useImperativeEvents) {
    vueImports.push("onUnmounted");
  }

  return await prettier.format(
    `
<script setup>
import { ${vueImports.join(", ")} } from "vue";
${data.args.storyCodeBefore ? `\n${data.args.storyCodeBefore}\n` : ""}
${elements
  .map((element) => `import "@eox/${element.tagName.replace("eox-", "")}";`)
  .join("\n")}

${elements
  .map((element) => `const ${camelize(element.tagName)}Ref = ref(null);`)
  .join("\n")}

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

onMounted(() => {
  ${elements
    .map((element) => {
      const elRef = `${camelize(element.tagName)}Ref.value`;

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
});

${
  useImperativeEvents
    ? `
onUnmounted(() => {
  ${elements
    .map((element) =>
      element.events.length > 0
        ? `
  const ${camelize(element.tagName)}El = ${camelize(element.tagName)}Ref.value;
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

<template>
${elements
  .map(
    (element) => `
  <${element.tagName}
    ref="${camelize(element.tagName)}Ref"
    ${element.attributes
      .filter(([key, value]) => key !== "style")
      .map(([key, value]) => `${key}${value === true ? "" : `="${value}"`}`)
      .join("\n      ")}
    ${
      !useImperativeEvents
        ? element.events
            .map(([key, value]) => {
              // Escape quotes for HTML attribute
              const escapedValue = value.replace(/"/g, "&quot;");
              return `@${key}="${escapedValue}"`;
            })
            .join("\n      ")
        : ""
    }
  ></${element.tagName}>`,
  )
  .join("\n")}
</template>

${
  elements.find((element) =>
    element.attributes.find(([key, value]) => key === "style"),
  )
    ? `
<style scoped>
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
      parser: "vue",
      plugins: [prettierPluginESTree, parserBabel, parserHtml, parserPostCSS],
    },
  );
};
