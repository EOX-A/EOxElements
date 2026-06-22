import { eoxCatalog } from "../eox-catalog.js";

function toKebabCase(str) {
  if (!str) return "";
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function getTagName(childType) {
  const comp = eoxCatalog?.components?.get(childType);
  if (comp && comp.targetTagName) {
    return comp.targetTagName;
  }
  return toKebabCase(childType);
}

function serializeConfig(config) {
  if (typeof config === "string") {
    return config;
  }
  if (typeof config === "object" && config !== null) {
    return Object.entries(config)
      .map(([k, v]) => {
        if (Array.isArray(v)) {
          if (
            v.every(
              (item) => typeof item === "number" || typeof item === "string",
            )
          ) {
            return `${k}=[${v.join(",")}]`;
          }
          return `${k}='${JSON.stringify(v)}'`;
        }
        if (typeof v === "object") {
          return `${k}='${JSON.stringify(v)}'`;
        }
        if (typeof v === "string") {
          return `${k}="${v.replace(/"/g, "&quot;")}"`;
        }
        return `${k}=${v}`;
      })
      .join(" ");
  }
  return "";
}

function serializeProps(child) {
  const ignoredKeys = [
    "id",
    "type",
    "children",
    "title",
    "description",
    "as",
    "mode",
    "background",
    "tourTitle",
    "tourAs",
    "tourPosition",
    "markdown",
  ];
  return Object.entries(child)
    .filter(([k]) => !ignoredKeys.includes(k))
    .map(([k, v]) => {
      if (typeof v === "object" && v !== null) {
        return `${k}='${JSON.stringify(v)}'`;
      }
      if (typeof v === "string") {
        return `${k}="${v.replace(/"/g, "&quot;")}"`;
      }
      return `${k}=${v}`;
    })
    .join(" ");
}

/**
 * Transforms A2UI virtual storytelling children into a EOxStorytelling-compatible markdown string.
 *
 * @param {Array} children - Resolved virtual children nodes of the EOxStorytelling component.
 * @param {Object} parentProps - Current properties of the parent EOxStorytelling component.
 * @returns {Object} `{ markdown: string }`
 */
export function transformEOxStorytelling(children, parentProps) {
  const markdownParts = [];

  for (const child of children) {
    if (!child) continue;

    const type = child.type;

    if (type === "EOxStorytellingHero") {
      const title = child.title || "";
      const as = child.as || "img";
      const background = child.background || "";
      const description = child.description || "";
      markdownParts.push(
        `# ${title} <!--{ as="${as}" mode="hero" src="${background}" }-->\n#### ${description}`,
      );
    } else if (type === "EOxStorytellingText") {
      const title = child.title || "";
      const bodyMd = child.markdown || "";
      markdownParts.push(`## ${title}\n${bodyMd}`);
    } else if (type === "EOxStorytellingTour") {
      const tourTitle = child.title || child.tourTitle || "";
      const tourAs = child.as || child.tourAs || "eox-map";
      const tourPosition = child.position || child.tourPosition || "left";

      let tourMarkdown = `## ${tourTitle} <!--{ as="${tourAs}" mode="tour" position="${tourPosition}" }-->`;

      const steps = Array.isArray(child.children)
        ? child.children.map((step) => {
            if (typeof step === "string") {
              return children.find((c) => c && c.id === step) || step;
            }
            return step;
          })
        : [];
      for (const step of steps) {
        if (!step) continue;
        const stepConfig = step.config || "";
        const stepTitle = step.title || step.stepTitle || "";
        const stepDescription = step.description || step.stepDescription || "";
        const stepConfigJson = serializeConfig(stepConfig);

        tourMarkdown += `\n\n### <!--{ ${stepConfigJson} }-->\n#### ${stepTitle}\n${stepDescription}`;
      }
      markdownParts.push(tourMarkdown);
    } else if (
      type === "EOxStorytellingTourStep" ||
      type === "EOxStorytellingMaptourStep"
    ) {
      // Tour steps are rendered nested inside their parent EOxStorytellingTour component
      continue;
    } else {
      // Fallback for Unknown Elements
      const tagName = getTagName(type);
      const title = child.title || "";
      const extraProps = serializeProps(child);
      const propsString = extraProps ? ` ${extraProps}` : "";
      markdownParts.push(
        `## ${title} <!--{ as="${tagName}"${propsString} }-->`,
      );
    }
  }

  return {
    markdown: markdownParts.join("\n\n"),
  };
}
