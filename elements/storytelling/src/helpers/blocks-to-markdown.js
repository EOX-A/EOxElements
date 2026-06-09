/**
 * Compiles a flat object of properties into a string of HTML comment attributes.
 *
 * @param {Object} props - The properties to compile.
 * @returns {string} The compiled attributes string.
 */
function compileAttributes(props) {
  const parts = [];
  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null) continue;

    if (typeof value === "object" || Array.isArray(value)) {
      // Use single quotes for stringified JSON arrays/objects to prevent breaking HTML comment formatting
      parts.push(`${key}='${JSON.stringify(value)}'`);
    } else if (typeof value === "string") {
      parts.push(`${key}="${value.replace(/"/g, "&quot;")}"`);
    } else {
      parts.push(`${key}=${value}`);
    }
  }
  return parts.join(" ");
}

/**
 * Translates an array of block-based A2UI JSON structures into a standard storytelling Markdown string.
 *
 * @param {Array<Object>} blocks - The array of storytelling blocks.
 * @returns {string} Compiled Markdown string.
 */
export function blocksToMarkdown(blocks) {
  if (!blocks || !Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      if (!block || !block.type) return "";

      const props = block.props || {};

      switch (block.type) {
        case "hero-image":
        case "hero-video": {
          const isVideo = block.type === "hero-video";
          const tagName = isVideo ? "video" : "img";
          const heroTitle = props.title || "";
          const heroDesc = props.description || "";

          const attrProps = {
            as: tagName,
            mode: "hero",
            src: props.src,
            "data-fallback-src":
              props.fallbackSrc || props["data-fallback-src"],
            style: props.style,
            class: props.class,
          };

          let md = `# ${heroTitle} <!--{ ${compileAttributes(attrProps)} }-->`;
          if (heroDesc) {
            md += `\n### ${heroDesc} <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->`;
          }
          return md;
        }

        case "text":
          return props.markdown || "";

        case "eox-map":
        case "img": {
          const isTour = props.mode === "tour";
          const tagName = block.type;
          const sectionTitle = props.title || "";
          const sectionDesc = props.description || "";

          if (isTour) {
            const generalProps = {
              as: tagName,
              mode: "tour",
              style: props.style,
              class: props.class,
            };

            let md = `## ${sectionTitle} <!--{ ${compileAttributes(generalProps)} }-->`;
            if (sectionDesc) {
              md += `\n${sectionDesc}`;
            }

            if (props.steps && Array.isArray(props.steps)) {
              props.steps.forEach((step) => {
                const stepProps = {
                  // eox-map properties
                  layers: step.layers,
                  center: step.center,
                  zoom: step.zoom,
                  animationOptions: step.animationOptions,
                  // img properties
                  src: step.src,
                  style: step.style,
                };

                md += `\n\n### <!--{ ${compileAttributes(stepProps)} }-->`;
                if (step.title) {
                  md += `\n#### ${step.title}`;
                }
                if (step.description) {
                  md += `\n${step.description}`;
                }
              });
            }
            return md;
          } else {
            // Standard non-tour map or image
            const attrProps = {
              as: tagName,
              style:
                props.style ||
                (tagName === "eox-map" ? "width: 100%; height: 500px;" : ""),
              class: props.class,
              // Map-specific standard props
              layers: props.layers,
              zoom: props.zoom,
              center: props.center,
              // Image-specific standard props
              src: props.src,
              "data-fallback-src":
                props.fallbackSrc || props["data-fallback-src"],
              ...props,
            };
            delete attrProps.title;
            delete attrProps.description;

            return `## ${sectionTitle} <!--{ ${compileAttributes(attrProps)} }-->`;
          }
        }

        case "eox-chart": {
          const chartTitle = props.title || "";
          const attrProps = {
            as: "eox-chart",
            style: props.style || "width: 100%; height: 400px;",
            class: props.class,
            spec: props.spec,
          };

          return `## ${chartTitle} <!--{ ${compileAttributes(attrProps)} }-->`;
        }

        default: {
          // Fallback generic custom component translation
          const genericTitle = props.title || "";
          const attrProps = {
            as: block.type,
            style: props.style,
            class: props.class,
            ...props,
          };
          delete attrProps.title; // Avoid duplicating the title inside comments if parsed as attribute

          return `## ${genericTitle} <!--{ ${compileAttributes(attrProps)} }-->`;
        }
      }
    })
    .join("\n\n");
}
