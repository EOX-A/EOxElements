/**
 * Renders storytelling along with lightbox
 */
import { html } from "lit";

export const MarkdownLightBox = {
  args: {
    markdown: `
  ## Lightbox Images <!--{.some-comment}-->
  Click on any image to open it in a lightbox.

  ![Image](https://i.imgur.com/GDAStfX.jpeg)<!-- {width=700} -->
  ![Image](https://i.imgur.com/m6A4LzQ.jpeg)<!-- {width=700} -->
  
  ## Img Section <!--{ as="img" src="https://i.imgur.com/6ldFbdn.gif" style="height:600px;" }-->
`,
  },
  render: (args) => html`
    <!-- Render eox-storytelling with attribute as comment markdown. -->
    <eox-storytelling
      id="markdown-lightbox"
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default MarkdownLightBox;
