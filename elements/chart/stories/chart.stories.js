// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";
import { PrimaryStory } from "./index.js";

export default {
  title: "Elements/eox-chart",
  tags: ["autodocs"],
  component: "eox-chart",
  render: (args) => html`
    <eox-chart
      .spec=${args.spec}
      .noShadow=${args.noShadow}
      .unstyled=${args.unstyled}
      style="width:100%; height: 400px;"
    ></eox-chart>
  `,
};

/**
 * Basic chart example
 */
export const Primary = PrimaryStory;
