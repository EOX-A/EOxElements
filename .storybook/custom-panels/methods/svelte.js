import serialize from "serialize-javascript";
import * as prettierPluginESTree from "prettier/plugins/estree";
import * as parserBabel from "prettier/parser-babel";
import * as parserHtml from "prettier/parser-html";
import * as parserPostCSS from "prettier/parser-postcss";
import * as pluginSvelte from "prettier-plugin-svelte/browser";
import * as prettier from "prettier/standalone";

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
  const formatted = await prettier.format(
    `<script>
    import "@eox/${element.replace("eox-", "")}";
    </script>

<${element}${attributes.length ? "\n" : ""}${attributes
      .map(([key, value]) => `${key}${value === true ? "" : `="${value}"`}`)
      .join("\n")}${properties.length ? "\n" : ""}${properties
      .map(
        ([key, value]) =>
          `${key}={${serialize(value, {
            unsafe: true,
          })}}`,
      )
      .join("\n")}\n${
      events.length > 0
        ? events.map(([key, value]) => `on${key}="${value}"`).join("")
        : ""
    }\n></${element}>

    ${
      attributes.find(([key, value]) => key === "style")
        ? `
    <style>
    ${element} {
    ${attributes
      .filter(([key, value]) => key === "style")
      .map(([key, value]) => value)
      .join("")}
    }
    </style>
      `
        : ""
    }`,
    {
      parser: "svelte",
      plugins: [
        prettierPluginESTree,
        parserBabel,
        parserHtml,
        parserPostCSS,
        pluginSvelte,
      ],
      printWidth: 80,
    },
  );
  return `\`\`\`html\n${formatted}\`\`\`
`;
};
