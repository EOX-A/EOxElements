/**
 * Renders storytelling using attribute as a comment in markdown.
 */
import { html } from "lit";
import "../src/main.js";

export const MarkdownAttrComment = {
  args: {
    markdown: `
  ## Hero World section <!--{.some-comment}-->
  Some text with red color <!--{#red-color style="color:red;"}-->
  
  ![Image](https://www.gstatic.com/prettyearth/assets/full/14617.jpg)<!-- {width=300} -->
`,
  },
  render: (args) => html`
    <!-- Render eox-storytelling with attribute as comment markdown. -->
    <eox-storytelling
      id="markdown-str"
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default MarkdownAttrComment;
