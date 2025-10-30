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
  const combinedProps = attributes.concat(properties);
  const events = Object.entries(data.args).filter(
    ([key, value]) => data.argTypes[key].table?.category === "events",
  );
  const formatted = await prettier.format(
    `import "@eox/${element.replace("eox-", "")}";
    import React, { useState } from "react";
    
    export default function MyApp() {

      ${
        combinedProps.length
          ? `// Set up properties
      ${combinedProps
        .map(
          ([key, value]) =>
            `const [${key}, ${camelize(`set-${key}`)}] = useState(${serialize(
              value,
              {
                unsafe: true,
              },
            )});`,
        )
        .join("")}
        `
          : ""
      }

      return (
      <${element}${combinedProps.length ? "\n{...{" : ""}${combinedProps
        .map(([key, value]) => key)
        .join(",")}}}\n${
        events.length > 0
          ? events.map(([key, value]) => `on${key}={${value}}`).join("")
          : ""
      }\n></${element}>
      )
    }
`,
    {
      parser: "babel",
      plugins: [prettierPluginESTree, parserBabel, parserHtml, parserPostCSS],
      printWidth: 80,
    },
  );
  return `\`\`\`js\n${formatted}\`\`\`
`;
};
