import serialize from "serialize-javascript";
import * as prettierPluginESTree from "prettier/plugins/estree";
import * as parserBabel from "prettier/parser-babel";
import * as parserHtml from "prettier/parser-html";
import * as parserPostCSS from "prettier/parser-postcss";
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
  const combinedProps = attributes.concat(properties);
  const events = Object.entries(data.args).filter(
    ([key, value]) => data.argTypes[key].table?.category === "events",
  );
  const formatted = await prettier.format(
    `<script>
    import "@eox/${element.replace("eox-", "")}";
    
    ${
      combinedProps.length > 0
        ? `// Set up properties
        ${combinedProps
          .map(
            ([key, value]) =>
              `let ${key} = $state(${serialize(value, {
                unsafe: true,
              })})`,
          )
          .join("\n")}`
        : ""
    }
    </script>

<${element}${combinedProps.length ? "\n" : ""}${combinedProps
      .map(([key, value]) => `{${key}}`)
      .join("\n")}
      ${
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
      parser: "vue",
      plugins: [prettierPluginESTree, parserBabel, parserHtml, parserPostCSS],
      printWidth: 80,
    },
  );
  return `\`\`\`html\n${formatted}\`\`\`
`;
};
