import { html } from "lit";
import { expect, userEvent, waitFor } from "@storybook/test";

import { STORIES_MAP_STYLE, STORIES_LAYERS_ARRAY } from "../src/enums";

/**
 * Component demonstrating how EOxMap and the draw tools can be used to measure distances on a map.
 */
export const DistanceMeasurement = {
  render: () => html`
    <eox-map
      id="line-measurement"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    />
    <eox-drawtools
      for="eox-map#line-measurement"
      type="LineString"
      multiple-features
      allow-modify
      measure
    />
  `,
  play: async ({ canvasElement, step }) => {
    console.log('hello from play function');
    throw new Error('Simulated error!');
    // Wait for the item filter component to be rendered and available in the DOM
    /*await waitFor(() => {
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
        'input[placeholder="Type Something..."]',
      );
      await userEvent.type(inputElement, "Asparagus", { delay: 100 });
    });*/
  },
};

/*   PLAY FUNCTION   */
/*
import items from "../test/testItems.json";
import { html } from "lit";

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
          validation: {
            pattern: ".{0,10}",
            message: "Maximum 10 characters",
          },
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
          key: "correlation",
          title: "Correlation",
          type: "range",
          step: 0.1,
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
          'input[placeholder="Type Something..."]',
        );
        await userEvent.type(inputElement, "Asparagus", { delay: 100 });
      });
    },
  };
}

export default PrimaryStory;
*/

export default DistanceMeasurement;
