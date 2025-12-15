import fs from "fs/promises";

export async function resolve(specifier, context, nextResolve) {
  // Handle CSS/inline imports
  if (
    specifier.endsWith(".css") ||
    specifier.endsWith(".css?inline") ||
    specifier.includes("?inline")
  ) {
    return {
      shortCircuit: true,
      url: "virtual:empty-css-module",
    };
  }

  try {
    return await nextResolve(specifier, context);
  } catch (error) {
    if (
      error.code === "ERR_MODULE_NOT_FOUND" ||
      error.code === "ERR_UNSUPPORTED_DIR_IMPORT"
    ) {
      // Try adding .js
      try {
        return await nextResolve(specifier + ".js", context);
      } catch (e) {}

      // Try adding /index.js
      try {
        return await nextResolve(specifier + "/index.js", context);
      } catch (e) {}
    }
    throw error;
  }
}

export async function load(url, context, nextLoad) {
  if (url === "virtual:empty-css-module") {
    return {
      format: "module",
      shortCircuit: true,
      source: 'export default "";',
    };
  }

  // Handle JSON files being imported without assertions
  if (url.endsWith(".json")) {
    const fileUrl = new URL(url);
    const content = await fs.readFile(fileUrl, "utf-8");
    return {
      format: "module",
      shortCircuit: true,
      source: `export default ${content};`,
    };
  }

  return nextLoad(url, context);
}
