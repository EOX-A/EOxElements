// Node.js script to generate vanilla story snippets for eox-chart
// Usage: node scripts/generate-chart-snippets.js

import fs from "fs";
import path from "path";

// Mock window and document for stories that rely on them
if (typeof global.window === "undefined") {
  global.window = {
    location: { href: "" },
    addEventListener: () => {},
    matchMedia: () => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
      media: "",
      onchange: null,
    }),
  };
  global.document = {
    documentElement: {
      matches: () => {},
    },
    head: {
      querySelector: () => null,
      appendChild: () => {},
    },
    body: {
      appendChild: () => {},
      classList: { add: () => {}, remove: () => {}, contains: () => false },
    },
    createElement: () => ({
      setAttribute: () => {},
      removeAttribute: () => {},
      appendChild: () => {},
      classList: { add: () => {}, remove: () => {}, contains: () => false },
      style: {},
    }),
    getElementById: () => null,
    querySelector: () => null,
    addEventListener: () => {},
    createTreeWalker: () => ({
      nextNode: () => null,
      currentNode: null,
    }),
    createTextNode: () => ({}),
    createComment: () => ({}),
  };
  global.CSSStyleSheet = class {
    replaceSync() {}
    cssRules = [];
  };
  global.HTMLElement = class {};
  global.customElements = {
    define: () => {},
    get: () => {},
  };
}

import { render as renderVanilla } from "../.storybook/custom-panels/methods/vanilla.js";

import { extractArgTypes } from "../.storybook/utils.js";

const customElements = JSON.parse(
  fs.readFileSync("custom-elements.json", "utf-8"),
);
let typedocJson = {};
try {
  typedocJson = JSON.parse(fs.readFileSync("types.json", "utf-8"));
} catch {}

async function getElementStories(elementName) {
  const storyPath = `../elements/${elementName}/stories/${elementName}.stories.js`;
  // Check if file exists before importing (using fs because import throws)
  const absStoryPath = path.join(
    process.cwd(),
    `elements/${elementName}/stories/${elementName}.stories.js`,
  );
  if (!fs.existsSync(absStoryPath)) {
    return null;
  }

  try {
    const module = await import(storyPath);
    const meta = module.default || {};
    const globalArgs = meta.args || {};

    const stories = {};
    for (const [key, value] of Object.entries(module)) {
      if (key !== "default" && value && typeof value === "object") {
        // Merge args
        stories[key] = {
          ...value,
          args: { ...globalArgs, ...value.args },
        };
      }
    }
    return stories;
  } catch (e) {
    console.warn(`Error loading stories for ${elementName}:`, e);
    return null;
  }
}

function getElementStoryDescriptions(elementName) {
  const storyPath = path.join(
    process.cwd(),
    `elements/${elementName}/stories/${elementName}.stories.js`,
  );
  if (!fs.existsSync(storyPath)) return {};

  const src = fs.readFileSync(storyPath, "utf-8");
  // Match JSDoc comments above each export const ...
  const regex = /\/\*\*([\s\S]*?)\*\/\s*export const (\w+)/g;
  const descriptions = {};
  let match;
  while ((match = regex.exec(src))) {
    const [, comment, name] = match;
    descriptions[name] = comment.replace(/^[\s\*]+/gm, "").trim();
  }
  return descriptions;
}

async function main() {
  const elementsDir = path.join(process.cwd(), "elements");
  const elements = fs
    .readdirSync(elementsDir)
    .filter((f) => fs.statSync(path.join(elementsDir, f)).isDirectory());

  const allSnippets = [];

  for (const element of elements) {
    const tagName = `eox-${element}`;
    const storyArgs = await getElementStories(element);

    if (!storyArgs || Object.keys(storyArgs).length === 0) {
      continue;
    }

    console.log(`Processing ${tagName}...`);
    const argTypes = extractArgTypes(tagName, customElements, typedocJson);
    const storyDescriptions = getElementStoryDescriptions(element);

    for (const name of Object.keys(storyArgs)) {
      const story = storyArgs[name];
      const description = storyDescriptions[name] || "";
      const context = {
        component: tagName,
        args: story.args,
        argTypes,
        globals: { "code-language": "vanilla" },
      };

      try {
        const snippet = await renderVanilla(context);
        allSnippets.push({
          element: tagName,
          story: name,
          description,
          snippet,
        });
      } catch (err) {
        console.error(
          `Failed to render snippet for ${tagName} - ${name}:`,
          err,
        );
      }
    }
  }

  const outputPath = process.argv[2] || "story-snippets.json";
  const outputDir = path.dirname(outputPath);
  if (outputDir !== "." && !fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(allSnippets, null, 2), "utf-8");
  console.log(`Snippets written to ${outputPath}`);
}

main();
