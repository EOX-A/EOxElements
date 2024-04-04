import { html } from "lit";
import { STORIES_LAYOUT_STYLE } from "../src/enums";

export const GapStory = {
  args: {},
  render: () => html`
    <!-- Render eox-layout component -->
    <eox-layout
      gap="8"
      style="${STORIES_LAYOUT_STYLE}; border: 1px solid darkgrey"
    >
      <eox-layout-item x="0" y="0" w="3" h="2"></eox-layout-item>
      <eox-layout-item x="0" y="2" w="2" h="10"></eox-layout-item>
      <eox-layout-item x="10" y="0" w="2" h="12"></eox-layout-item>
      <eox-layout-item x="4" y="10" w="4" h="2"></eox-layout-item>
    </eox-layout>
  `,
};

export default GapStory;
