import items from "../test/testItems.json";
import { expect, userEvent, waitFor } from "@storybook/test";

/**
 * Generates a story configuration for the Primary item filter.
 *
 * @returns {Object} The story configuration with arguments for the component and a play function for interaction testing.
 */
function PrimaryStory() {
  return {
    args: {
      config: {
        inlineMode: false,
        titleProperty: "title",
        aggregateResults: "themes",
        enableHighlighting: true,
        autoSpreadSingle: false,
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
            inline: true,
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
            key: "geometry",
            type: "spatial",
          },
        ],
      },
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
