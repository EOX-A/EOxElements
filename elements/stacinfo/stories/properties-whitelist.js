import { BasicStory } from "./";

/**
 * The rendered STAC properties can be whitelisted to show only certain properties (by setting the `properties` array). \
 * By default, title and description are always rendered at the top.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const PropertiesWhitelistStory = {
  args: {
    ...BasicStory.args,
    properties: [
      "title",
      "description",
      "osc:missions",
      "osc:project",
      "osc:region",
      "osc:status",
      "osc:themes",
      "osc:type",
    ],
  },
};

export default PropertiesWhitelistStory;
