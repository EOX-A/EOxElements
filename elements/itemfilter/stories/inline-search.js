import items from "../test/testItems.json";
import { html, render } from "lit";

/**
 * Renders the filtered items into the list next to the itemfilter.
 *
 * @param {CustomEvent} evt - The itemfilter `filter` event.
 */
const renderResults = (evt) =>
  render(
    html`${evt.detail.results.map(
      (item) => html`<li>${item.title} (${item.themes.join(", ")})</li>`,
    )}`,
    evt.target.nextElementSibling,
  );

/**
 * Generates a story configuration for the InlineSearch item filter.
 *
 * @returns {object} The story configuration with arguments for the component.
 */
function InlineSearchStory() {
  return {
    render: (args) =>
      html`<eox-itemfilter
          .items=${args.items}
          .inlineMode=${args.inlineMode}
          .titleProperty=${args.titleProperty}
          .showResults=${args.showResults}
          .filterProperties=${args.filterProperties}
          @filter=${renderResults}
          style=${args.style}
        ></eox-itemfilter>
        <ul></ul>`,
    args: {
      inlineMode: true,
      titleProperty: "title",
      showResults: false,
      style: "height: auto",
      filterProperties: [
        {
          keys: ["title", "description", "themes"],
          title: "Search",
          type: "text",
          inlineSearch: true,
        },
        {
          key: "themes",
          title: "Theme",
          type: "multiselect",
          expanded: true,
        },
        {
          key: "code",
          title: "Codes",
          type: "multiselect",
          expanded: true,
        },
      ],
      items,
    },
  };
}

export default InlineSearchStory;
