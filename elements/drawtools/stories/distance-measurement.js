import { html } from "lit";
// import { expect, userEvent, waitFor } from "@storybook/test";

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
  play: async ({ _canvasElement, _step }) => {
    console.log("hello from play function");
    throw new Error("Simulated error!");
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

export default DistanceMeasurement;
