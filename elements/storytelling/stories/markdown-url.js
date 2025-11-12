/**
 * Primary component demonstrating the configuration options for eox-storytelling
 * It renders storytelling based on markdown URL.
 */
import { html } from "lit";

export const MarkdownAsURL = {
  args: {
    markdownURL: `${window.location.href.split("iframe.html")[0]}/sample.md`,
    id: "markdown-url",
  },
  render: (args) => html`
    <eox-storytelling
      id=${args.id}
      markdown-url=${args.markdownURL}
    ></eox-storytelling>
  `,
};

export default MarkdownAsURL;
