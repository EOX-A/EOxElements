/**
 * Primary component demonstrating the configuration options for eox-storytelling
 * It renders storytelling based on markdown URL.
 */
import { html } from "lit";
import "../src/main.js";

export const MarkdownAsURL = {
  args: {
    markdownURL: `${window.location.href.split("iframe.html")[0]}/sample.md`,
  },
  render: (args) => html`
    <!-- Render eox-storytelling with basic markdown url. -->
    <eox-storytelling
      id="markdown-url"
      markdown-url=${args.markdownURL}
    ></eox-storytelling>
  `,
};

export default MarkdownAsURL;
