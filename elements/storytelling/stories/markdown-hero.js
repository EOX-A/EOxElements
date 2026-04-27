import { html } from "lit";

export const MarkdownHero = {
  argTypes: {
    markdown: {
      table: {
        category: "properties",
      },
    },
  },
  args: {
    markdown: `# Hero Section <!--{ as="video" mode="hero" src="https://dlmultimedia.esa.int/download/public/videos/2023/06/010/2306_010_AR_EN.mp4" }-->
#### An introduction on how to write interactive and multimedial stories using markdown. Scroll down to get started! <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->

## Introduction
The hero is the initial section of a story. It can be either a full-screen image or a full-screen video, with some overlaying text.
In each story, only one hero should be added at the very beginning. After the hero, you will see the nav menu, and after that, the story content.

To create a Hero section, you start with an H1 (\`#\`), followed by an HTML comment where you define the background media:
\`<!--{ as="video" mode="hero" src="..." }-->\` or \`<!--{ as="img" mode="hero" src="..." }-->\`
`,
    id: "markdown-hero",
    showNav: true,
    showHeroScrollIndicator: true,
  },
  render: (args) => html`
    <eox-storytelling
      id=${args.id}
      ?show-nav=${args.showNav}
      ?show-hero-scroll-indicator=${args.showHeroScrollIndicator}
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default MarkdownHero;
