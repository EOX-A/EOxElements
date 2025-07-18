import items from "../test/testItems.json";
import { html } from "lit";

/**
 * Generates a story configuration for the card display mode
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
function CardDisplayStory() {
  return {
    render: (args) =>
      html`<eox-itemfilter
        .aggregateResults=${args.aggregateResults}
        .items=${args.items}
        .titleProperty=${args.titleProperty}
        .imageProperty=${args.imageProperty}
        .subTitleProperty=${args.subTitleProperty}
        .filterProperties=${args.filterProperties}
        .resultType=${args.resultType}
        style="height: 500px; --card-gap: 16px; --card-width: 300px; --card-height: 200px; --card-border-radius: 8px; --form-flex-direction: row"
      ></eox-itemfilter>`,
    args: {
      aggregateResults: "themes",
      titleProperty: "title",
      subTitleProperty: "description",
      imageProperty: "assets.thumbnail.href",
      resultType: "cards",
      filterProperties: [
        {
          key: "themes",
          title: "Theme",
          type: "multiselect",
        },
      ],
      items,
    },
  };
}

export default CardDisplayStory;
