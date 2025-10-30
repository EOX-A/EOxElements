import serialize from "serialize-javascript";
import * as prettierPluginESTree from "prettier/plugins/estree";
import * as parserBabel from "prettier/parser-babel";
import * as parserHtml from "prettier/parser-html";
import * as parserPostCSS from "prettier/parser-postcss";
import * as prettier from "prettier/standalone";
import { camelize } from "../helpers";

export const render = async (data) => {
  const element = data.parent.replace("elements-", "");
  const attributes = Object.entries(data.args).filter(
    ([key, value]) =>
      key === "style" ||
      (data.argTypes[key].table?.category === "attributes" && !!value),
  );
  const properties = Object.entries(data.args).filter(
    ([key, value]) => data.argTypes[key].table?.category === "properties",
  );
  const events = Object.entries(data.args).filter(
    ([key, value]) => data.argTypes[key].table?.category === "events",
  );

  const elementName = camelize(element);
  const formatted = await prettier.format(
    `
<${element}${attributes.length ? "\n" : ""}${attributes
      .map(([key, value]) => `  ${key}${value === true ? "" : `="${value}"`}`)
      .join("\n")}\n></${element}>
<script>import "@eox/${element.replace("eox-", "")}/dist/${element}.js";

const ${elementName} = document.querySelector("${element}");

${
  properties.length > 0
    ? `// Assign properties
Object.assign(${elementName}, {${properties
        .map(
          ([key, value]) =>
            `${key}: ${serialize(value, {
              unsafe: true,
            })}`,
        )
        .join(",")}})`
    : ""
}

  ${
    events.length > 0
      ? `// Listen for events
  ${events.map(([key, value]) => `${elementName}.addEventListener("${key}", ${value})`)}`
      : ""
  }
</script>`,
    {
      parser: "html",
      plugins: [prettierPluginESTree, parserBabel, parserHtml, parserPostCSS],
    },
  );
  return `\`\`\`html\n${formatted}\`\`\`
`;
};
