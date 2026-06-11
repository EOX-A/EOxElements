import fs from "fs";
import path from "path";
import { A2UI_SPEC_VERSION } from "../src/constants.js";

// Locate package.json to read current version
const packageJsonPath = path.resolve(process.cwd(), "package.json");
if (!fs.existsSync(packageJsonPath)) {
  console.error(`Could not find package.json at ${packageJsonPath}`);
  process.exit(1);
}
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const version = pkg.version || "1.0.0";
const urlVersion = A2UI_SPEC_VERSION;

// Locate custom-elements.json
const rootDir = path.resolve(process.cwd(), "..");
const manifestPath = path.join(rootDir, "custom-elements.json");

if (!fs.existsSync(manifestPath)) {
  console.error(`Could not find custom-elements.json at ${manifestPath}`);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

// Helper to convert kebab-case to PascalCase with EOx prefix handling
function toPascalCase(tagName) {
  const parts = tagName.split("-");
  return parts
    .map((part, index) => {
      if (index === 0 && part.toLowerCase() === "eox") {
        return "EOx";
      }
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("");
}

function mapTypeToZod(typeText) {
  const t = (typeText || "").toLowerCase();
  if (t === "boolean") {
    return "z.boolean().optional()";
  }
  if (t === "number") {
    return "z.number().optional()";
  }
  if (t === "string") {
    return "z.string().optional()";
  }
  if (t.includes("array") || t.includes("[]")) {
    return "z.array(z.any()).optional()";
  }
  return "z.any().optional()";
}

const elements = [];

// Traverse the manifest modules and declarations
if (manifest.modules) {
  for (const mod of manifest.modules) {
    if (!mod.declarations) continue;
    for (const decl of mod.declarations) {
      if (
        decl.customElement &&
        decl.tagName &&
        decl.tagName.startsWith("eox-")
      ) {
        const tagName = decl.tagName;
        const className = toPascalCase(tagName);
        const description = decl.description || `A2UI wrapper for ${tagName}`;

        const props = {};

        // 1. Process attributes
        if (decl.attributes) {
          for (const attr of decl.attributes) {
            const propName = attr.fieldName || attr.name;
            const typeText = attr.type?.text || "";
            props[propName] = {
              type: typeText,
              description: attr.description || "",
            };
          }
        }

        // 2. Process members
        if (decl.members) {
          for (const member of decl.members) {
            if (
              member.kind === "field" &&
              (member.privacy === "public" || !member.privacy)
            ) {
              const propName = member.name;
              const typeText = member.type?.text || "";
              // Don't overwrite if attribute already set it
              if (!props[propName]) {
                props[propName] = {
                  type: typeText,
                  description: member.description || "",
                };
              }
            }
          }
        }

        elements.push({
          tagName,
          className,
          description,
          props,
        });
      }
    }
  }
}

// Generate the JS module content
let out = `/* eslint-disable */
// Generated automatically from custom-elements.json. Do not edit.
import { z } from 'zod';

export const version = '${version}';

`;

for (const el of elements) {
  out += `/**\n * ${el.description.replace(/\n/g, "\n * ")}\n */\n`;
  out += `export const ${el.className} = {\n`;
  out += `  name: '${el.className}',\n`;
  out += `  tagName: 'eox-a2ui-element',\n`;
  out += `  targetTagName: '${el.tagName}',\n`;
  out += `  schema: z.object({\n`;
  for (const [propName, propInfo] of Object.entries(el.props)) {
    const zodType = mapTypeToZod(propInfo.type);
    const descEscaped = (propInfo.description || "")
      .replace(/'/g, "\\'")
      .replace(/\n/g, " ");
    out += `    /** ${descEscaped} */\n`;
    out += `    '${propName}': ${zodType},\n`;
  }
  out += `  })\n`;
  out += `};\n\n`;
}

// Export array list
out += `export const eoxComponents = [\n`;
for (const el of elements) {
  out += `  ${el.className},\n`;
}
out += `];\n`;

// Ensure output directory exists
const outDir = path.resolve(process.cwd(), "src");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outputPath = path.join(outDir, "generated-catalog.js");
fs.writeFileSync(outputPath, out, "utf8");
console.log(
  `Successfully generated A2UI catalog with ${elements.length} components at ${outputPath}`,
);

// --- Generate eox_catalog.json ---
const catalogId = `https://eox-a.github.io/EOxElements/a2ui/${urlVersion}/eox_catalog.json`;
const eoxCatalogJson = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: catalogId,
  title: "EOxElements Custom Catalog",
  description: "Unified catalog of EOxElements components.",
  catalogId: catalogId,
  components: {},
};

for (const el of elements) {
  const componentProps = {
    component: { const: el.className },
  };

  for (const [propName, propInfo] of Object.entries(el.props)) {
    const type = (propInfo.type || "").toLowerCase();
    let schemaProp = { description: propInfo.description };

    if (type === "boolean") {
      schemaProp.type = "boolean";
    } else if (type === "number") {
      schemaProp.type = "number";
    } else if (type.includes("array") || type.includes("[]")) {
      schemaProp.type = "array";
      schemaProp.items = {};
    } else {
      schemaProp.type = "string";
    }

    componentProps[propName] = schemaProp;
  }

  eoxCatalogJson.components[el.className] = {
    type: "object",
    allOf: [
      { $ref: "common_types.json#/$defs/ComponentCommon" },
      {
        type: "object",
        properties: componentProps,
        required: ["component"],
      },
    ],
    unevaluatedProperties: false,
  };
}

// Ensure public directory for this version exists in the git repository
const publicVersionDir = path.resolve(
  process.cwd(),
  "public",
  "a2ui",
  urlVersion,
);
if (!fs.existsSync(publicVersionDir)) {
  fs.mkdirSync(publicVersionDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outDir, "eox_catalog.json"),
  JSON.stringify(eoxCatalogJson, null, 2),
  "utf8",
);
console.log("Successfully generated src/eox_catalog.json");

fs.writeFileSync(
  path.join(publicVersionDir, "eox_catalog.json"),
  JSON.stringify(eoxCatalogJson, null, 2),
  "utf8",
);
console.log(
  `Successfully generated public/a2ui/${urlVersion}/eox_catalog.json`,
);

// --- Generate combined_catalog.json ---
const basicCatalogPath = path.resolve(
  rootDir,
  "node_modules/@a2ui/web_core/src/v0_9/schemas/basic_catalog.json",
);

let combinedCatalogJson = null;

if (fs.existsSync(basicCatalogPath)) {
  const basicCatalogJson = JSON.parse(
    fs.readFileSync(basicCatalogPath, "utf8"),
  );

  const combinedCatalogId = `https://eox-a.github.io/EOxElements/a2ui/${urlVersion}/combined_catalog.json`;
  combinedCatalogJson = {
    ...basicCatalogJson,
    $id: combinedCatalogId,
    catalogId: combinedCatalogId,
    title: "EOxElements Combined Catalog",
    description: "Combined A2UI basic catalog and EOxElements custom catalog.",
    components: {
      ...basicCatalogJson.components,
      ...eoxCatalogJson.components,
    },
  };

  fs.writeFileSync(
    path.join(outDir, "combined_catalog.json"),
    JSON.stringify(combinedCatalogJson, null, 2),
    "utf8",
  );
  console.log("Successfully generated src/combined_catalog.json");

  fs.writeFileSync(
    path.join(publicVersionDir, "combined_catalog.json"),
    JSON.stringify(combinedCatalogJson, null, 2),
    "utf8",
  );
  console.log(
    `Successfully generated public/a2ui/${urlVersion}/combined_catalog.json`,
  );
} else {
  console.warn(`Could not find basic_catalog.json at ${basicCatalogPath}`);
}

// --- Copy JSONs to versioned docs/a2ui/<version>/ if docs/ exists ---
const docsDir = path.resolve(rootDir, "docs");
if (fs.existsSync(docsDir)) {
  const versionedDocsDir = path.join(docsDir, "a2ui", urlVersion);
  fs.mkdirSync(versionedDocsDir, { recursive: true });

  fs.writeFileSync(
    path.join(versionedDocsDir, "eox_catalog.json"),
    JSON.stringify(eoxCatalogJson, null, 2),
    "utf8",
  );
  console.log(`Copied eox_catalog.json to ${versionedDocsDir}`);

  if (combinedCatalogJson) {
    fs.writeFileSync(
      path.join(versionedDocsDir, "combined_catalog.json"),
      JSON.stringify(combinedCatalogJson, null, 2),
      "utf8",
    );
    console.log(`Copied combined_catalog.json to ${versionedDocsDir}`);
  }
}
