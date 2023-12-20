import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../custom-elements.json";
import DocumentationTemplate from "./DocumentationTemplate.mdx";

/**
 * A custom wrapper for the default setCustomElementsManifest function.
 * Allows to set `privateFileds` to `false` in order to filter out
 * private properties from the auto-generated docs output.
 */
export const setCustomElementsManifestWithOptions = (
  customElements,
  options
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
          return code.replace(
            `<${storyContext.component}`,
            `<${storyContext.component} ${Object.entries(storyContext.args)
              .filter(([key]) => key !== "onLoadend")
              .map(
                ([key, value], index, row) =>
                  `\n .${key}='\${${JSON.stringify(value)}}'${
                    index + 1 === row.length ? "\n" : ""
                  }`
              )
              .join("")}`
          );
        },
      },
    },
  },
};

export default preview;
