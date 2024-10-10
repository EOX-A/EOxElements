import { html } from "lit";
import { STORIES_LAYOUT_STYLE, STORIES_LAYOUT_ITEM_STYLE } from "../src/enums";

// Generate one [x,y] array for each slot in a 12x12 grid
const renderItems = () => {
  let items = [];
  for (let x = 0; x < 12; x++) {
    for (let y = 0; y < 12; y++) {
      items.push([x, y]);
    }
  }
  return items;
};

export const Grid = {
  args: {},
  render: () => html`
    <!-- Render eox-layout component -->
    <eox-layout style="${STORIES_LAYOUT_STYLE}">
      ${renderItems().map(
        ([x, y]) =>
          html`<eox-layout-item x="${x}" y="${y}" w="1" h="1"
            >${x}/${y}</eox-layout-item
          >`
      )}
    </eox-layout>
    <style>
      eox-layout-item {
        ${STORIES_LAYOUT_ITEM_STYLE}
      }
    </style>
  `,
};

export default Grid;
