import { html } from "lit";

/**
 * The ShowEveryTime story illustrates the difference between persistent and
 * non-persistent tours.
 *
 * When the `show-every-time` attribute is set, the tour ignores the
 * `localStorage` key and starts automatically every time the component
 * is mounted. This is useful for testing or for critical information
 * that should be shown on every visit.
 *
 */
export default {};
export const ShowEveryTime = {
  args: {
    "show-every-time": true,
    config: {
      showButtons: ["next"],
      steps: [
        {
          element: "#target-always",
          popover: {
            title: "Persistent Tour",
            description:
              "I start every time because of the <code>show-every-time</code> attribute.",
            side: "bottom",
            align: "start",
          },
        },
      ],
    },
    storyTemplateBefore: `
    <div id="target-always" style="padding: 20px; border: 1px solid #ccc; margin-bottom: 20px;">
      <h3>Always Visible</h3>
      <p>This tour will start every time the page refreshes.</p>
    </div>
    `,
  },
  render: (args) => html`
    <div
      id="target-always"
      style="padding: 20px; border: 1px solid #ccc; margin-bottom: 20px;"
    >
      <h3>Always Visible</h3>
      <p>This tour will start every time the page refreshes.</p>
    </div>
    <eox-tour
      id="always-tour"
      show-every-time
      .config=${args.config}
    ></eox-tour>
  `,
};
