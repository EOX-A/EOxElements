/**
 * Renders storytelling with hero section.
 */
import { html } from "lit";
import "../src/main.js";

export const MarkdownHero = {
  args: {
    markdown: `
# Hero Bg Image <!--{ as="img" mode="hero" src="https://www.gstatic.com/prettyearth/assets/full/14617.jpg" }-->
### by EOX <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->

# Hero Bg Video <!--{ as="video" mode="hero" src="https://dlmultimedia.esa.int/download/public/videos/2023/06/010/2306_010_AR_EN.mp4" }-->
#### by EOX <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->
`,
  },
  render: (args) => html`
    <eox-storytelling
      id="markdown-hero"
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default MarkdownHero;
