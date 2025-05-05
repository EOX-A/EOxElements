import { html } from "lit";
import { STORIES_LAYOUT_STYLE, STORIES_LAYOUT_ITEM_STYLE } from "../src/enums";

export const Responsive = {
  args: {},
  render: () => html`
    <!-- Render eox-layout component -->
    <eox-layout style="${STORIES_LAYOUT_STYLE}" gap="8">
      <eox-layout-item x="0" y="0" w="12/1/1" h="1/11/12">
        x="0" y="0" w="12/1/1" h="1/11/12"
      </eox-layout-item>
      <eox-layout-item x="0/1/1" y="1/0/0" w="12/11/10" h="10/11/12">
        x="0/1/1" y="1/0/0" w="12/11/11" h="11/11/12"
      </eox-layout-item>
      <eox-layout-item x="0/0/11" y="11/11/0" w="12/12/1" h="1/1/12">
        x="0/0/11" y="11/11/0" w="12/12/1" h="1/1/12"
      </eox-layout-item>
    </eox-layout>
    <style>
      eox-layout-item {
        ${STORIES_LAYOUT_ITEM_STYLE}
      }
    </style>
  `,
};

export default Responsive;
