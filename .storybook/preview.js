import { setCustomElementsManifest } from "@storybook/web-components-vite";
import customElements from "../custom-elements.json";
import typedocJson from "../types.json";
import DocumentationTemplate from "./DocumentationTemplate.mdx";
import { renderVanilla } from "./custom-panels/methods";

import "@eox/chart";
import "@eox/drawtools";
import "@eox/feedback";
import "@eox/geosearch";
import "@eox/itemfilter";
import "@eox/jsonform";
import "@eox/layercontrol";
import "@eox/layout";
import "@eox/map";
import "@eox/map/src/plugins/advancedLayersAndSources";
import "@eox/stacinfo";
import "@eox/storytelling";
import "@eox/timecontrol";

/**
 * A custom wrapper for the default setCustomElementsManifest function.
 * Allows to set `privateFileds` to `false` in order to filter out
 * private properties from the auto-generated docs output.
 */
export const setCustomElementsManifestWithOptions = (
  customElements,
  options,
) => {
  let { privateFields = true } = options;
  if (!privateFields) {
    customElements?.modules?.forEach((module) => {
      module?.declarations?.forEach((declaration) => {
        Object.keys(declaration).forEach((key) => {
          if (Array.isArray(declaration[key])) {
            declaration[key] = declaration[key].filter((member) => {
              return !member.privacy?.includes("private");
            });
          }
        });
      });
    });
  }
  return setCustomElementsManifest(customElements);
};

setCustomElementsManifestWithOptions(customElements, { privateFields: false });

const preview = {
  parameters: {
    docs: {
      toc: true,
      page: DocumentationTemplate,
      extractArgTypes: (component) => {
        const {
          attributes,
          events,
          members: properties,
        } = customElements.modules.find(
          (m) => m.declarations[0].tagName === component,
        ).declarations[0];
        return [
          ...(properties
            ? properties.map((m) => ({
                category: m.kind === "method" ? "methods" : "properties",
                ...m,
              }))
            : []),
          ...(attributes
            ? attributes.map((a) => ({ category: "attributes", ...a }))
            : []),
          ...(events ? events.map((a) => ({ category: "events", ...a })) : []),
        ].reduce((acc, curr) => {
          const {
            category,
            default: defaultValue,
            description,
            name,
            parameters,
            type,
          } = curr;
          const typeText =
            parameters?.[0].type?.text ||
            parameters?.[0].type ||
            type?.text ||
            type;
          let matchingType;

          typedocJson.children.forEach((c) => {
            const child = c.children?.find((cc) => typeText?.includes(cc.name));
            if (child) matchingType = child;
          });
          acc[name] = {
            description: matchingType
              ? `${description} <br /> <code>${typeText.replace(matchingType.name, `<a target="_blank" href="${matchingType?.sources?.[0]?.url}">${matchingType.name}</a>`)}</code>`
              : description,
            table: {
              defaultValue: { summary: defaultValue },
              category,
              type: {
                ...(!matchingType
                  ? {
                      summary: typeText,
                    }
                  : {}),
              },
            },
          };
          return acc;
        }, {});
      },
      source: {
        transform: async (code, storyContext) =>
          await renderVanilla(storyContext),
      },
    },
  },
  globalTypes: {
    "code-language": {
      description: "Language for code snippets",
    },
  },
};

export default preview;
