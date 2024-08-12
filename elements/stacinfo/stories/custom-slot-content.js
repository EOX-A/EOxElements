import { html } from "lit";
import { PrimaryStory } from "./";

/**
 * Custom rendering of properties can be achieved using `slots`.
 * Automatically generated slots are provided for body properties, featured properties, featured summaries, header and footer.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const CustomSlotContentStory = {
  args: {
    ...PrimaryStory.args,
  },
  render:
    // @ts-ignore
    (args) => html`
      <eox-stacinfo
        id="slot"
        for=${args.for}
        .header=${args.header}
        .body="${args.body}"
        .featured=${args.featured}
        .footer=${args.footer}
        ?unstyled=${args.unstyled}
      >
        <div
          slot="agency"
          style="background: lightgrey; width: 100%; padding: 10px 20px; border-radius: 4px;"
        >
          <p><strong>Agency:</strong> <span class="content"></span>!</p>
        </div>
      </eox-stacinfo>
      <script>
        globalThis.stacInfo = document.querySelector("eox-stacinfo#slot");
        stacInfo.addEventListener("loaded", () => {
          setTimeout(() => {
            const value = stacInfo.stacProperties["agency"];
            document.querySelector(".content").innerHTML = value.formatted;
          });
        });
      </script>
    `,
};

export default CustomSlotContentStory;
