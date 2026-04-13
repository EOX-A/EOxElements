import { html } from "lit";

/**
 * The IframeHandoff story demonstrates the advanced ability of `eox-tour`
 * to seamlessly transition between a parent window and an iframe.
 *
 * This example uses:
 * - `targetIframe`: Specifies the CSS selector of the iframe to hand off to.
 * - `childStepIndex`: Indicates which step index to start within the child iframe.
 * - `returnToParent`: When a step inside the child iframe is finished, it can trigger
 *   control back to the parent window.
 * - `parentStepIndex`: Specifies which step to resume in the parent window.
 *
 * Synchronization is handled via the `postMessage` API using the `id` of the
 * `eox-tour` element as a shared identifier. It is strictly required that both the inner
 * and outer eox-tour elements share the exact same `id` for handoff messages to be successfully routed.
 *
 */
export default {};
export const IframeHandoff = {
  args: {
    config: {
      steps: [
        {
          element: "#parent-target-1",
          popover: {
            title: "Parent 1",
            description: "Starting in parent window",
          },
        },
        {
          element: "#demo-iframe",
          popover: {
            title: "Handoff Step",
            description: "Handing off to iframe",
            targetIframe: "#demo-iframe",
            childStepIndex: 0,
            backwardChildStepIndex: -1,
          },
        },
        {
          element: "#parent-target-2",
          popover: {
            title: "Parent Resume",
            description: "Returned successfully from iframe",
          },
        },
      ],
    },
    storyTemplateBefore: `
    <div id="parent-target-1" style="padding: 20px; border: 1px solid #ccc;">
      <h3>Parent Step 1</h3>
    </div>

    <iframe
      id="demo-iframe"
      src="./iframe-content.html"
      style="width: 100%; height: 200px; border: none; margin-top: 20px;"
    ></iframe>

    <div
      id="parent-target-2"
      style="padding: 20px; border: 1px solid #ccc; margin-top: 20px; margin-bottom: 20px;"
    >
      <h3>Parent Step 3 (Resumed)</h3>
    </div>
    `,
    storyTemplateAfter: `
    <button
      onclick="document.getElementById('handoff-tour').start()"
      style="margin-top: 20px;"
    >
      Start Handoff Tour
    </button>
    `,
  },
  render: (args) => {
    // Generate an inner HTML for the iframe so we embed it cleanly without needing static routes in storybook.
    const iframeHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>body { font-family: sans-serif; padding: 20px; }</style>
          <script type="module">
            import "${window.location.origin}/elements/tour/src/main.js";
          </script>
        </head>
        <body style="border: 2px dashed blue;">
          <div id="child-target-1" style="border: 1px solid blue; padding: 20px;">Child Step (Inside Iframe)</div>
          <eox-tour id="handoff-tour" prevent-auto-start></eox-tour>
          <script>
            // Child tour configuration
            document.getElementById('handoff-tour').config = {
              totalSteps: 3,
              stepOffset: 1,
              steps: [
                {
                  element: '#child-target-1',
                  popover: {
                    title: 'Child Step',
                    description: 'This overlay is running inside the iframe context.',
                    returnToParent: true,
                    parentStepIndex: 2,
                    returnToParentBackward: true,
                    backwardParentStepIndex: 0
                  }
                }
              ]
            }
          </script>
        </body>
      </html>
    `;
    const blob = new Blob([iframeHtml], { type: "text/html" });
    const iframeUrl = URL.createObjectURL(blob);

    return html`
      <div id="parent-target-1" style="padding: 20px; border: 1px solid #ccc;">
        <h3>Parent Step 1</h3>
      </div>

      <iframe
        id="demo-iframe"
        src=${iframeUrl}
        style="width: 100%; height: 200px; border: none; margin-top: 20px;"
      ></iframe>

      <div
        id="parent-target-2"
        style="padding: 20px; border: 1px solid #ccc; margin-top: 20px; margin-bottom: 20px;"
      >
        <h3>Parent Step 3 (Resumed)</h3>
      </div>

      <eox-tour
        id="handoff-tour"
        show-every-time
        .config=${args.config}
      ></eox-tour>

      <button
        @click=${() => document.getElementById("handoff-tour").start()}
        style="margin-top: 20px;"
      >
        Start Handoff Tour
      </button>
    `;
  },
};
