/**
 * Renders storytelling using attribute as a comment in markdown.
 */
import { html } from "lit";

export const MarkdownAttrComment = {
  args: {
    markdown: `
  ## Hero World section <!--{.some-comment}-->
  Some text with red color <!--{#red-color style="color:red;"}-->
  
  ![Image](https://www.gstatic.com/prettyearth/assets/full/14617.jpg)<!-- {width=300} -->
  
  ## Natural Disasters <!--{as="iframe" src="https://ourworldindata.org/grapher/deaths-and-missing-persons-due-to-natural-disasters" style="width: 100%; height: 600px; border: none;"}-->
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
