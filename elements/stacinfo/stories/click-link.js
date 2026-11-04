import { html } from "lit";
import { PrimaryStory } from "./";

/**
 * Demonstrates capturing link clicks in `eox-stacinfo`.
 * When an anchor tag is clicked anywhere within the element (including inside shadow roots for markdown descriptions or asset links),
 * `eox-stacinfo` emits a `click:link` CustomEvent containing `{ href, text, section }` in `event.detail` without preventing default navigation.
 *
 * ```html
 * <eox-stacinfo
 *   for="https://example.com/collection.json"
 *   .body=${["description", "links"]}
 *   @click:link=${(e) => {
 *     console.log("Clicked URL:", e.detail.href);
 *     console.log("Link text:", e.detail.text);
 *     console.log("Section:", e.detail.section);
 *   }}
 * ></eox-stacinfo>
 * ```
 *
 * @returns {object} The story configuration with arguments for the component.
 */
const ClickLinkStory = {
  args: {
    ...PrimaryStory.args,
    "click:link": (e) => console.log("click:link event dispatched: ", e.detail),
  },
  render: (args) => html`
    <eox-stacinfo
      for=${args.for}
      .header=${args.header}
      .tags=${args.tags}
      .body=${args.body}
      .featured=${args.featured}
      .footer=${args.footer}
      ?unstyled=${args.unstyled}
      @click:link=${args["click:link"]}
    ></eox-stacinfo>
  `,
};

export default ClickLinkStory;
