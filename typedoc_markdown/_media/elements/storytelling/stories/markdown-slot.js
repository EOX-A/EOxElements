/**
 * Markdown from the slot component demonstrating the configuration options for eox-storytelling
 * It renders storytelling markdown based on the content from the slot.
 */
import { html } from "lit";

export const MarkdownSlot = {
  args: {
    markdown: "## Hello World, Markdown Inside Slot.",
  },
  render: (args) => html`
    <!-- Render eox-storytelling from markdown inside the slot. -->
    <eox-storytelling id="markdown-slot">${args.markdown}</eox-storytelling>
  `,
};

export default MarkdownSlot;
