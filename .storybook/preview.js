import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../custom-elements.json";

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
