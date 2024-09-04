// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";

export default {
  title: "Elements/eox-chart",
  tags: ["autodocs"],
  component: "eox-chart",
  render: () => html`
    <eox-chart></eox-chart>
    <script>
      const data = {
        datasets: [
          {
            type: "bar",
            label: "Bar Dataset",
            data: [1, 2, 3, 4],
          },
          {
            type: "line",
            label: "Line Dataset",
            data: [6, 6, 6, 6],
          },
        ],
        labels: ["January", "February", "March", "April"],
      };
      document.querySelector("eox-chart").setData(data);
    </script>
  `,
};

export const Primary = {
  args: {},
};

export var TestStory = {};
