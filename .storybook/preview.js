import { setCustomElementsManifest } from "@storybook/web-components-vite";
import customElements from "../custom-elements.json";
import typedocJson from "../types.json";
import DocumentationTemplate from "./DocumentationTemplate.mdx";
import {
  renderVanilla,
  renderVue,
  renderReact,
  renderSvelte,
} from "./custom-panels/methods/index.js";

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

import { extractArgTypes } from "./utils.js";

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
      extractArgTypes: (component) =>
        extractArgTypes(component, customElements, typedocJson),
      source: {
        transform: async (_, storyContext) => {
          const language = storyContext.globals["code-language"];
          const renderers = {
            react: renderReact,
            svelte: renderSvelte,
            vue: renderVue,
            vanilla: renderVanilla,
          };
          const renderer = renderers[language] || renderVanilla;
          return await renderer(storyContext);
        },
      },
    },
    controls: {
      exclude: [
        "id",
        "style",
        "class",
        "storyAdditionalComponents",
        "storyCodeBefore",
        "storyCodeAfter",
        "storySlotContent",
        "storyStyle",
      ],
    },
  },
  globalTypes: {
    "code-language": {
      description: "Language for code snippets",
    },
  },
};

export default preview;
