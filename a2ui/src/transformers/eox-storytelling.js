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

function getChildType(tagName) {
  for (const [name, comp] of eoxCatalog?.components || []) {
    if (comp?.targetTagName === tagName) {
      return name;
    }
  }
  return tagName;
}

function parseAttributes(attrString) {
  const attrs = {};
  if (!attrString) return attrs;
  const attrRegex = /([\w-]+)=(?:'([^']*)'|"([^"]*)"|(\[[^\]]*\])|(\S+))/g;
  let match;
  while ((match = attrRegex.exec(attrString)) !== null) {
    const [, key, singleQuoted, doubleQuoted, bracketed, bare] = match;
    if (singleQuoted !== undefined) {
      try {
        attrs[key] = JSON.parse(singleQuoted);
      } catch {
        attrs[key] = singleQuoted;
      }
    } else if (doubleQuoted !== undefined) {
      attrs[key] = doubleQuoted.replace(/&quot;/g, '"');
    } else if (bracketed !== undefined) {
      attrs[key] = bracketed
        .slice(1, -1)
        .split(",")
        .filter((item) => item.trim() !== "")
        .map((item) => {
          const trimmed = item.trim();
          const num = Number(trimmed);
          return Number.isNaN(num) ? trimmed : num;
        });
    } else if (bare === "true" || bare === "false") {
      attrs[key] = bare === "true";
    } else {
      const num = Number(bare);
      attrs[key] = Number.isNaN(num) ? bare : num;
    }
  }
  return attrs;
}

const sectionCommentRegex = /<!--\{(.*?)\}-->/;

function parseHeading(text) {
  const commentMatch = text.match(sectionCommentRegex);
  const rawComment = commentMatch ? commentMatch[1].trim() : "";
  const attrs = commentMatch ? parseAttributes(commentMatch[1]) : null;
  const title = text.replace(sectionCommentRegex, "").trim();
  return { title, attrs, rawComment };
}

/**
 * Parses an EOxStorytelling-compatible markdown string back into
 * A2UI virtual storytelling children nodes.
 *
 * @param {string} markdown - EOxStorytelling markdown string.
 * @returns {Array} Virtual children nodes of the EOxStorytelling component.
 */
function parseMarkdownToChildren(markdown) {
  const children = [];
  let current = null;
  let currentStep = null;
  let currentTourSteps = [];
  let sectionCounter = 0;
  let stepCounter = 0;

  const flushStep = () => {
    if (currentStep) {
      currentStep.description = currentStep.description.join("\n").trim();
      current.children.push(currentStep.id);
      currentTourSteps.push(currentStep);
      currentStep = null;
    }
  };

  const flush = () => {
    flushStep();
    if (current) {
      if (current.type === "EOxStorytellingText") {
        current.markdown = current.markdown.join("\n").trim();
      }
      children.push(current);
      children.push(...currentTourSteps);
      currentTourSteps = [];
      current = null;
    }
  };

  for (const line of (markdown || "").split("\n")) {
    if (line.startsWith("#### ")) {
      const text = line.slice(5).trim();
      if (currentStep && !currentStep.title) {
        currentStep.title = text;
      } else if (current?.type === "EOxStorytellingHero") {
        current.description = text;
      } else if (current?.type === "EOxStorytellingText") {
        current.markdown.push(line);
      } else if (currentStep) {
        currentStep.description.push(line);
      }
    } else if (line.startsWith("### ")) {
      if (current?.type === "EOxStorytellingTour") {
        flushStep();
        const { title, attrs, rawComment } = parseHeading(line.slice(4));
        stepCounter += 1;
        currentStep = {
          id: `step-${stepCounter}`,
          type: "EOxStorytellingTourStep",
          title,
          description: [],
          config: attrs && Object.keys(attrs).length > 0 ? attrs : rawComment,
        };
      } else if (current?.type === "EOxStorytellingText") {
        current.markdown.push(line);
      }
    } else if (line.startsWith("## ")) {
      flush();
      sectionCounter += 1;
      const { title, attrs } = parseHeading(line.slice(3));
      if (attrs && attrs.mode === "tour") {
        current = {
          id: `section-idx-${sectionCounter}`,
          type: "EOxStorytellingTour",
          title,
          as: attrs.as || "eox-map",
          position: attrs.position || "left",
          children: [],
        };
      } else if (attrs && attrs.as) {
        const { as, mode: _mode, ...extraProps } = attrs;
        current = {
          id: `section-idx-${sectionCounter}`,
          type: getChildType(as),
          title,
          ...extraProps,
        };
      } else {
        current = {
          id: `section-idx-${sectionCounter}`,
          type: "EOxStorytellingText",
          title,
          markdown: [],
        };
      }
    } else if (line.startsWith("# ")) {
      flush();
      sectionCounter += 1;
      const { title, attrs } = parseHeading(line.slice(2));
      current = {
        id: `section-idx-${sectionCounter}`,
        type: "EOxStorytellingHero",
        title,
        as: attrs?.as || "img",
        background: attrs?.src || "",
        description: "",
      };
    } else if (currentStep) {
      currentStep.description.push(line);
    } else if (current?.type === "EOxStorytellingText") {
      current.markdown.push(line);
    }
  }

  flush();
  return children;
}

/**
 * Transforms between A2UI virtual storytelling children and a
 * EOxStorytelling-compatible markdown string, in either direction.
 *
 * When `data` is an array/object of resolved virtual children nodes, they are
 * serialized into `{ markdown }`. When `data` is a markdown string, it is
 * parsed back into `{ children }`.
 *
 * @param {Array|Object|string} data - Resolved virtual children nodes of the EOxStorytelling component, or a markdown string.
 * @param {Object} parentProps - Current properties of the parent EOxStorytelling component.
 * @returns {Object} `{ markdown: string }` or `{ children: Array }`
 */
export function transformEOxStorytelling(data, parentProps) {
  if (typeof data === "string") {
    return {
      children: parseMarkdownToChildren(data),
      markdown: data,
    };
  }

  const children = Array.isArray(data) ? data : data ? [data] : [];
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
    children: children,
  };
}
