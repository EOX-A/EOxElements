import { html } from "lit";

/**
 * The IframeHandoff story demonstrates the advanced ability of `eox-tour`
 * to seamlessly transition between a parent window and an iframe.
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
  },
  render: (args) => {
    // Collect all script tags from the parent to inject into the iframe
    // so that the iframe has the exact same Vite/Storybook environment.
    const scripts = Array.from(document.querySelectorAll("script"))
      .map((s) => s.outerHTML)
      .join("\n");

    const iframeHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>body { font-family: sans-serif; padding: 20px; }</style>
          ${scripts}
        </head>
        <body style="border: 2px dashed blue;">
          <div id="child-target-1" style="border: 1px solid blue; padding: 20px;">Child Step</div>
          <eox-tour id="handoff-tour" prevent-auto-start></eox-tour>
          <script>
            // Storybook and Vite might take a moment to load and register the elements
            customElements.whenDefined('eox-tour').then(() => {
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
              };
            });
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
        src="${iframeUrl}"
        style="width: 100%; height: 200px; border: none; margin-top: 20px;"
      ></iframe>

      <div
        id="parent-target-2"
        style="padding: 20px; border: 1px solid #ccc; margin-top: 20px; margin-bottom: 20px;"
      >
        <h3>Parent Step 3 (Resumed)</h3>
      </div>

      <eox-tour
        id="handoff-tour-parent"
        show-every-time
        .config=${args.config}
      ></eox-tour>

      <button
        @click=${() => document.getElementById("handoff-tour-parent").start()}
        style="margin-top: 20px;"
      >
        Start Handoff Tour
      </button>
    `;
  },
};
