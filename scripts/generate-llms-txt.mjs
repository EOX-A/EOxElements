import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const DOCS_URL = "https://eox-a.github.io/EOxElements";

// Load data
const customElements = JSON.parse(
  fs.readFileSync(path.join(ROOT_DIR, "custom-elements.json"), "utf-8"),
);
const storySnippets = JSON.parse(
  fs.readFileSync(path.join(ROOT_DIR, "story-snippets.json"), "utf-8"),
);
const readme = fs.readFileSync(path.join(ROOT_DIR, "README.md"), "utf-8");

function generateLLMsTxt() {
  let content = `# EOxElements Documentation Overview

> This file is intended for AI agents. For full documentation, visit ${DOCS_URL}

## Introduction
EOxElements is a collection of web components for Earth Observation data visualization and interaction.

## Available Elements

`;

  const elements = [];
  customElements.modules.forEach((mod) => {
    mod.declarations.forEach((decl) => {
      if (decl.tagName) {
        elements.push({
          name: decl.tagName,
          description: decl.description,
        });
      }
    });
  });

  elements.sort((a, b) => a.name.localeCompare(b.name));

  elements.forEach((el) => {
    content += `- [${el.name}](${DOCS_URL}/?path=/docs/elements-${el.name.replace(
      "eox-",
      "",
    )}--docs): ${el.description.split("\n")[0]}\n`;
  });

  content += `
## Resources
- [Full Documentation (LLMs)](llms-full.txt)
- [GitHub Repository](https://github.com/EOX-A/EOxElements)
- [NPM Package](https://www.npmjs.com/package/@eox/elements)
`;

  fs.writeFileSync(path.join(ROOT_DIR, "llms.txt"), content);
  console.log("Generated llms.txt");
}

function generateLLMsFullTxt() {
  let content = `# EOxElements Comprehensive Documentation

> This file is intended for AI agents.

${readme}

---

# API Reference & Usage

`;

  const elements = [];
  customElements.modules.forEach((mod) => {
    mod.declarations.forEach((decl) => {
      if (decl.tagName) {
        elements.push(decl);
      }
    });
  });

  elements.sort((a, b) => a.tagName.localeCompare(b.tagName));

  elements.forEach((el) => {
    content += `## ${el.tagName}\n\n`;
    content += `${el.description}\n\n`;

    // Attributes
    const attributes = el.attributes || [];
    if (attributes.length > 0) {
      content += `### Attributes\n\n`;
      attributes.forEach((attr) => {
        content += `- \`${attr.name}\` (${attr.type?.text || "string"}): ${
          attr.description || ""
        }\n`;
      });
      content += "\n";
    }

    // Properties
    const properties =
      el.members?.filter(
        (m) => m.kind === "field" && m.privacy === "public" && !m.static,
      ) || [];
    if (properties.length > 0) {
      content += `### Properties\n\n`;
      properties.forEach((prop) => {
        content += `- \`${prop.name}\` (${prop.type?.text || "unknown"}): ${
          prop.description || ""
        } (Default: \`${prop.default}\`)\n`;
      });
      content += "\n";
    }

    // Events
    const events = el.events || [];
    if (events.length > 0) {
      content += `### Events\n\n`;
      events.forEach((evt) => {
        content += `- \`${evt.name}\`: ${evt.description || ""}\n`;
      });
      content += "\n";
    }

    // Methods
    const methods =
      el.members?.filter(
        (m) => m.kind === "method" && m.privacy === "public" && !m.static,
      ) || [];
    if (methods.length > 0) {
      content += `### Methods\n\n`;
      methods.forEach((method) => {
        const params = method.parameters
          ? method.parameters.map((p) => p.name).join(", ")
          : "";
        content += `- \`${method.name}(${params})\`: ${
          method.description || ""
        }\n`;
      });
      content += "\n";
    }

    // Slots
    const slots = el.slots || [];
    if (slots.length > 0) {
      content += `### Slots\n\n`;
      slots.forEach((slot) => {
        content += `- \`${slot.name === "" ? "default" : slot.name}\`: ${
          slot.description || ""
        }\n`;
      });
      content += "\n";
    }

    // CSS Properties
    const cssProps = el.cssProperties || [];
    if (cssProps.length > 0) {
      content += `### CSS Custom Properties\n\n`;
      cssProps.forEach((prop) => {
        content += `- \`${prop.name}\`: ${prop.description || ""}\n`;
      });
      content += "\n";
    }

    // Examples (Snippets)
    const snippets = storySnippets.filter((s) => s.element === el.tagName);
    if (snippets.length > 0) {
      content += `### Examples\n\n`;
      snippets.forEach((snippet) => {
        content += `#### ${snippet.story}\n\n`;
        content += `${snippet.description}\n\n`;
        content += "```html\n" + snippet.snippet + "\n```\n\n";
      });
    }

    content += "---\n\n";
  });

  fs.writeFileSync(path.join(ROOT_DIR, "llms-full.txt"), content);
  console.log("Generated llms-full.txt");
}

generateLLMsTxt();
generateLLMsFullTxt();
