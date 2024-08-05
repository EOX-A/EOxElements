import { html } from "lit";
import { BasicStory } from "./";

/**
 * Custom rendering of properties can be achieved using `slots`.
 * Automatically generated slots are provided for properties, featured properties, featured summaries, header and footer.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const CustomSlotContentStory = {
  args: {
    ...BasicStory.args,
  },
  render: (
    // {
    args
  ) => html`
    <eox-stacinfo
      id="slot"
      for=${args.for}
      .header=${args.header}
      .properties="${args.properties}"
      .featured=${args.featured}
      .footer=${args.footer}
      ?unstyled=${args.unstyled}
      style="width: 400px"
    >
      <div
        slot="agency"
        style="background: lightgrey; width: 100%; padding: 10px 20px; border-radius: 4px;"
      >
        <p>--> <strong>Agency:</strong> <span class="content"></span>!</p>
      </div>
    </eox-stacinfo>
    <script>
      const stacInfo = document.querySelector("eox-stacinfo#slot");
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
