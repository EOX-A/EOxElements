import items from "../test/testItems.json";
import { expect, userEvent, waitFor } from "@storybook/test";
import { html } from "lit";

/**
 * Generates a story configuration for the Primary item filter.
 *
 * @returns {Object} The story configuration with arguments for the component and a play function for interaction testing.
 */
function PrimaryStory() {
  return {
    render: (args) =>
      html`<eox-itemfilter
        .items=${args.items}
        .inlineMode=${args.inlineMode}
        .titleProperty=${args.titleProperty}
        .aggregateResults=${args.aggregateResults}
        .enableHighlighting=${args.enableHighlighting}
        .filterProperties=${args.filterProperties}
      ></eox-itemfilter>`,
    args: {
      inlineMode: false,
      titleProperty: "title",
      aggregateResults: "themes",
      subTitleProperty: "description",
      enableHighlighting: true,
      filterProperties: [
        {
          keys: ["title", "themes"],
          title: "Search",
          type: "text",
          placeholder: "Type Something...",
          expanded: true,
        },
        {
          key: "code",
          title: "Codes",
          type: "multiselect",
          placeholder: "Search Codes",
        },
        {
          key: "themes",
          title: "Theme",
          type: "select",
          placeholder: "Select a theme",
          inline: false,
        },
        {
          key: "tags",
          title: "Tags",
          type: "multiselect",
          placeholder: "Select tags",
          inline: false,
        },
        {
          key: "timestamp",
          type: "range",
          format: "date",
        },
        {
          key: "range",
          title: "Range",
          type: "range",
          step: 0.1,
          min: -1,
          max: 1,
        },
        {
          key: "geometry",
          type: "spatial",
        },
      ],
      items,
    },
    play: async ({ canvasElement, step }) => {
      // Wait for the item filter component to be rendered and available in the DOM
      await waitFor(() => {
        const itemFilterComponent =
          canvasElement.querySelector("eox-itemfilter");
        expect(itemFilterComponent).toBeTruthy();
        expect(itemFilterComponent.shadowRoot).toBeTruthy();
      });

      // Get the item filter component and its shadow root
      const itemFilterComponent = canvasElement.querySelector("eox-itemfilter");
      const shadowRoot = itemFilterComponent.shadowRoot;

      // Simulate user interaction: Searching for "Asparagus"
      await step("Searching for Asparagus", async () => {
        const inputElement = shadowRoot.querySelector(
          'input[placeholder="Type Something..."]'
        );
        await userEvent.type(inputElement, "Asparagus", { delay: 100 });
      });
    },
  };
}

export default PrimaryStory;
