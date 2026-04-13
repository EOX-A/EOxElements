import { html } from "lit";

export default {};

export const IframeHandoff = {
  args: {
    config: {
      steps: [
        { element: "#parent-target-1", popover: { title: "Parent 1" } },
        {
          element: "#demo-iframe",
          popover: {
            title: "Handoff",
            targetIframe: "#demo-iframe",
            childStepIndex: 0,
            backwardChildStepIndex: -1,
          },
        },
        { element: "#parent-target-2", popover: { title: "Parent Resume" } },
      ],
    },
  },
  render: (args) => {
    // Rely on Vite's native URL resolution for the component file.
    // This perfectly bridges Dev & Prod environments without cloning Storybook scripts.
    const mainUrl = new URL("../src/main.js", import.meta.url).href;

    const iframeHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>body { font-family: sans-serif; padding: 20px; border: 2px dashed blue; margin: 0; min-height: 100vh; box-sizing: border-box; }</style>
          <!-- Base tag ensures relative paths in imported module resolve correctly -->
          <base href="${window.location.origin}/">
          <!-- Load the raw custom element file natively -->
          <script type="module" src="${mainUrl}"></script>
        </head>
        <body>
          <div id="child-target-1" style="border: 1px solid blue; padding: 20px;">Child Step</div>
          <eox-tour id="handoff-tour" prevent-auto-start></eox-tour>
          <script>
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

    return html`
      <div id="parent-target-1" style="padding: 20px; border: 1px solid #ccc;">
        Parent Step 1
      </div>
      <iframe
        id="demo-iframe"
        srcdoc=${iframeHtml}
        style="width: 100%; height: 200px; border: none; margin-top: 20px;"
      ></iframe>
      <div
        id="parent-target-2"
        style="padding: 20px; border: 1px solid #ccc; margin-top: 20px; margin-bottom: 20px;"
      >
        Parent Step 3
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
