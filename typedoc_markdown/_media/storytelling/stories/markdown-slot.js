/**
 * Markdown from the slot component demonstrating the configuration options for eox-storytelling
 * It renders storytelling markdown based on the content from the slot.
 */
import { html } from "lit";

export const MarkdownSlot = {
  args: {
    id: "markdown-slot",
    storySlotContent: "## Hello World, this is some Markdown Inside the slot.",
  },
  render: (args) => html`
    <eox-storytelling id=${args.id}
      >## Hello World, this is some Markdown Inside the slot.</eox-storytelling
    >
  `,
};

export default MarkdownSlot;
