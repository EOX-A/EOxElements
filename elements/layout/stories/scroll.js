import { html } from "lit";
import { STORIES_LAYOUT_STYLE, STORIES_LAYOUT_ITEM_STYLE } from "../src/enums";

export const Scroll = {
  args: {},
  render: () => html`
    <!-- Render eox-layout component -->
    <eox-layout gap="8" row-height="3rem" style="${STORIES_LAYOUT_STYLE}">
      <eox-layout-item x="0" y="0" w="4" h="4">
        x="0" y="0" w="4" h="4"
      </eox-layout-item>
      <eox-layout-item x="4" y="0" w="4" h="4">
        x="4" y="0" w="4" h="4"
      </eox-layout-item>
      <eox-layout-item x="8" y="0" w="4" h="4">
        x="8" y="0" w="4" h="4"
      </eox-layout-item>
      <eox-layout-item x="0" y="4" w="4" h="4">
        x="0" y="4" w="4" h="4"
      </eox-layout-item>
      <eox-layout-item x="4" y="4" w="4" h="4">
        x="4" y="4" w="4" h="4"
      </eox-layout-item>
      <eox-layout-item x="8" y="4" w="4" h="4">
        x="8" y="4" w="4" h="4"
      </eox-layout-item>
      <eox-layout-item x="0" y="8" w="4" h="4">
        x="0" y="8" w="4" h="4"
      </eox-layout-item>
    </eox-layout>
    <style>
      eox-layout-item {
        ${STORIES_LAYOUT_ITEM_STYLE}
      }
    </style>
  `,
};

export default Scroll;
