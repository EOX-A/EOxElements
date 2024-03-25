/**
 * Primary component demonstrating the configuration options for eox-storytelling
 * It renders storytelling markdown based on string content we provide.
 */
import { html } from "lit";

export const Primary = {
  args: {
    markdown: "## Hello World, Welcome to EOxStoryTelling.",
  },
  render: (args) => html`
    <!-- Render eox-storytelling with basic markdown. -->
    <eox-storytelling
      id="markdown-str"
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default Primary;
