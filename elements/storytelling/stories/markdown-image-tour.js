import { html } from "lit";

export const MarkdownImageTour = {
  argTypes: {
    markdown: {
      table: {
        category: "properties",
      },
    },
  },
  args: {
    markdown: `## Image Tour section <!--{ as="img" mode="tour" }-->

### <!--{ src="https://picsum.photos/800/600" style="background: #fff0c4;" }-->
#### This is an image tour.
It allows you to have different sources for each tour "step".

\`\`\`markdown
## Image Tour section <!--{ as="img" mode="tour" }-->

### <!--{ src="https://picsum.photos/800/600" style="background: #fff0c4;" }-->
#### This is an image tour.
It allows you to have different sources for each tour "step".
\`\`\`

### <!--{ src="https://picsum.photos/900/700" style="background: #ffe7ef;" }-->
#### Second tour step.
Each tour step is described as an *h3* (*###*) heading.

### <!--{ src="https://picsum.photos/900/800" style="background: #e2fffc;" }-->
#### Third tour step.
![](https://placehold.co/200x100)`,
    id: "markdown-image-tour",
    showNav: true,
  },
  render: (args) => html`
    <eox-storytelling
      id=${args.id}
      ?show-nav=${args.showNav}
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default MarkdownImageTour;
