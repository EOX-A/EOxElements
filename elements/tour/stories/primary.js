import { html } from "lit";

/**
 * The Primary story demonstrates the basic usage of the `eox-tour` element.
 * It shows how to define a simple tour with two steps targeting DOM elements
 * by their CSS selectors.
 *
 * Each step in the `config.steps` array defines:
 * - `element`: A CSS selector for the target element.
 * - `popover`: Configuration for the popover (title, description, side, align).
 */
export default {};
export const Primary = {
  args: {
    config: {
      showButtons: ["next", "previous", "close"],
      showProgress: true,
      steps: [
        {
          element: "#tour-target-1",
          popover: {
            title: "Step 1",
            description: "This is the first step of the tour.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#tour-target-2",
          popover: {
            title: "Step 2",
            description: "This is the second step of the tour.",
            side: "top",
            align: "start",
          },
        },
        {
          popover: {
            title: "Happy Coding",
            description:
              "And that is all, go ahead and start adding tours to your applications.",
          },
        },
      ],
    },
    preventAutoStart: true,
    storyTemplateBefore: `
    <div id="tour-target-1" style="padding: 20px; border: 1px solid #ccc; margin-bottom: 20px;">
      <h3>Welcome to the Tour</h3>
      <p>This is the first target.</p>
    </div>
    <div id="tour-target-2" style="padding: 20px; border: 1px solid #ccc; margin-bottom: 20px;">
      <h3>Second Step</h3>
      <p>This is the second target.</p>
    </div>
    <button id="restart-tour" style="margin-top: 20px;" onclick="document.getElementById('primary-tour').start()">Start Tour</button>
    `,
  },
  render: (args) => html`
    <div id="tour-target-1" style="padding: 20px; border: 1px solid #ccc;">
      <h3>Welcome to the Tour</h3>
      <p>This is the first target.</p>
    </div>
    <div
      id="tour-target-2"
      style="padding: 20px; border: 1px solid #ccc; margin-top: 20px;"
    >
      <h3>Second Step</h3>
      <p>This is the second target.</p>
    </div>
    <eox-tour
      id="primary-tour"
      .config=${args.config}
      .preventAutoStart=${args.preventAutoStart}
    ></eox-tour>
    <button
      @click=${() => document.getElementById("primary-tour").start()}
      style="margin-top: 20px;"
    >
      Start Tour
    </button>
  `,
};
