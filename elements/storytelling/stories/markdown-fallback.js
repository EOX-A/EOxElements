/**
 * Renders storytelling with hidden fallback image
 */
import { html } from "lit";

export const MarkdownFallbackMode = {
  args: {
    markdown: `
## Section 1
![](https://www.gstatic.com/prettyearth/assets/full/14617.jpg) <!--{ mode="fallback" }-->
Above fallback image is hidden and can only be visible in a Github markdown renderer.

## Section 2
![](https://www.gstatic.com/prettyearth/assets/full/14617.jpg) <!--{ mode="fallback" }-->
Above fallback image is hidden and can only be visible in a Github markdown renderer.
`,
  },
  render: (args) => html`
    <eox-storytelling
      id="markdown-fallback"
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default MarkdownFallbackMode;
