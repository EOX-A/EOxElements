/**
 * It will render custom elements using h1 and 'as' attribute in decorate
 */
import { html } from "lit";
import "../src/main.js";

export const CustomElement = {
  args: {
    markdown: `# First Custom Element <!--{as="foo-bar" .custom-block}-->
# Second Custom Element <!--{as="baz-que" .custom-block}-->
# Third Custom Element <!--{as="quux-corge" .custom-block}-->`,
  },
  render: (args) => html`
    <!-- Render eox-storytelling with basic markdown. -->
    <eox-storytelling
      id="markdown-str"
      markdown=${args.markdown}
      no-shadow
    ></eox-storytelling>
    <style>
      .custom-block {
        display: block;
        width: 100%;
      }
      .custom-block:before {
        width: 100%;
        padding: 1rem;
        display: block;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.1rem;
        color: darkred;
      }
      foo-bar:before {
        content: "First Element";
        background: lightgoldenrodyellow;
      }
      baz-que:before {
        content: "Second Element";
        background: antiquewhite;
      }
      quux-corge:before {
        content: "Third Element";
        background: wheat;
      }
    </style>
  `,
};

export default CustomElement;
