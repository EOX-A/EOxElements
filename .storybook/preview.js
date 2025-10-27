import { setCustomElementsManifest } from "@storybook/web-components-vite";
import customElements from "../custom-elements.json";
import DocumentationTemplate from "./DocumentationTemplate.mdx";

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
import "@eox/map/src/plugins/globe";
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
      source: {
        transform: (code, storyContext) => {
          /**
           * Check which props belong to which tag
           * and create object
           */
          const undecorated = storyContext.undecoratedStoryFn(storyContext);
          let currentTag = undefined;
          const tags = {};
          undecorated.strings
            .map((string, index) => {
              const startOfTag = string.match(/(?<=<eox-).*?((?=>| )|$)/gim);
              if (startOfTag) {
                currentTag = `eox-${startOfTag}`;
              }
              const property = string
                .match(/(?<=\.).*?(?==)/gim)?.[0]
                ?.replaceAll(" ", "");
              const value = undecorated.values[index];
              if (property && value) {
                if (!tags[currentTag]) {
                  tags[currentTag] = {};
                }
                tags[currentTag][property] = value;
              }
            })
            .filter((l) => l);

          /**
           * Inject prop for each tag in the rendered code
           */
          Object.keys(tags).forEach((tag) => {
            code = code.replace(
              `<${tag}`,
              `<${tag}\n  ${Object.keys(tags[tag])
                .map(
                  (key, index) =>
                    `.${key}='\$\{${
                      typeof tags[tag][key] === "string"
                        ? tags[tag][key]
                        : JSON.stringify(tags[tag][key])
                    }\}'`,
                )
                .join("\n  ")}\n  `,
            );
          });
          return code;
        },
      },
    },
  },
};

export default preview;
