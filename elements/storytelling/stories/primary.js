/**
 * Primary component demonstrating the configuration options for eox-storytelling
 * It renders storytelling markdown based on string content we provide.
 */
import { html } from "lit";
import "../src/main.js";

export const Primary = {
  args: {
    content: "## Hello World, Welcome to EOxStoryTelling.",
  },
  render: (args) => html`
    <!-- Render eox-map component with ID "primary" -->
    <eox-storytelling
      id="content-str"
      content=${args.content}
    ></eox-storytelling>
  `,
};

export default Primary;
