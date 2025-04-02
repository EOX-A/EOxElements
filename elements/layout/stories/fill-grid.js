import { html } from "lit";
import { STORIES_LAYOUT_STYLE, STORIES_LAYOUT_ITEM_STYLE } from "../src/enums";

export const FillGrid = {
  args: {},
  render: () => html`
    <!-- Render eox-layout component -->
    <eox-layout
      fill-grid
      row-height="100px"
      column-width="200px"
      style="${STORIES_LAYOUT_STYLE}"
    >
      <eox-layout-item w="2" h="2"> w="2" h="2" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
      <eox-layout-item w="3"> w="3" </eox-layout-item>
      <eox-layout-item w="1"> w="1" </eox-layout-item>
    </eox-layout>
    <style>
      eox-layout-item {
        ${STORIES_LAYOUT_ITEM_STYLE}
      }
    </style>
  `,
};

export default FillGrid;
