import { FooterStory } from "./";

/**
 * By using the `unstyled` attribute, only the bare minimum styles are applied to the element.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const UnstyledStory = {
  args: {
    ...FooterStory.args,
    unstyled: true,
  },
};

export default UnstyledStory;
