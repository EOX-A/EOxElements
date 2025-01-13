/**
 * Renders storytelling with tour.
 */
import { html } from "lit";

export const MarkdownTour = {
  args: {
    markdown: `## Map Tour section <!--{ as="img" mode="tour" }-->

### <!--{ src='https://www.gstatic.com/prettyearth/assets/full/14617.jpg' }-->
#### This is Image tour - one.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### <!--{ src='https://www.gstatic.com/prettyearth/assets/full/12516.jpg' }-->
#### This is Image tour - two.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### <!--{ src='https://www.gstatic.com/prettyearth/assets/full/5046.jpg' }-->
#### This is Image tour - three.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `,
  },
  render: (args) => html`
    <eox-storytelling
      id="markdown-tour"
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default MarkdownTour;
