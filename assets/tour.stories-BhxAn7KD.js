import{x as n}from"./iframe-DWLxJtBR.js";import"./preload-helper-PPVm8Dsz.js";const p={args:{config:{showButtons:["next","previous","close"],showProgress:!0,steps:[{element:"#tour-target-1",popover:{title:"Step 1",description:"This is the first step of the tour.",side:"bottom",align:"start"}},{element:"#tour-target-2",popover:{title:"Step 2",description:"This is the second step of the tour.",side:"top",align:"start"}},{popover:{title:"Happy Coding",description:"And that is all, go ahead and start adding tours to your applications."}}]},preventAutoStart:!0,storyTemplateBefore:`
    <div id="tour-target-1" style="padding: 20px; border: 1px solid #ccc; margin-bottom: 20px;">
      <h3>Welcome to the Tour</h3>
      <p>This is the first target.</p>
    </div>
    <div id="tour-target-2" style="padding: 20px; border: 1px solid #ccc; margin-bottom: 20px;">
      <h3>Second Step</h3>
      <p>This is the second target.</p>
    </div>
    <button id="restart-tour" style="margin-top: 20px;" onclick="document.getElementById('primary-tour').start()">Start Tour</button>
    `},render:e=>n`
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
      .config=${e.config}
      .preventAutoStart=${e.preventAutoStart}
    ></eox-tour>
    <button
      @click=${()=>document.getElementById("primary-tour").start()}
      style="margin-top: 20px;"
    >
      Start Tour
    </button>
  `},l={args:{config:{showButtons:["next","previous","close"],showProgress:!0,steps:[{element:"#parent-target-1",popover:{title:"Parent Start"}},{targetIframe:"#demo-iframe",element:"#child-target-1",popover:{title:"Child Step",description:"Simply defined in the parent config array, rendered inside the iframe."}},{element:"#parent-target-2",popover:{title:"Parent Resume"}}]},storyTemplateBefore:`
    <div id="parent-target-1" style="padding: 20px; border: 1px solid #ccc;">
      Step 1 (Parent)
    </div>
    <iframe
      id="demo-iframe"
      srcdoc="
        <!DOCTYPE html>
        <html>
          <head>
            <style>body { font-family: sans-serif; padding: 20px; border: 2px dashed blue; margin: 0; min-height: 100vh; box-sizing: border-box; }</style>
            <!-- Using CDN for the inner iframe script -->
            <script type='module' src='https://cdn.jsdelivr.net/npm/@eox/tour/dist/eox-tour.js'><\/script>
          </head>
          <body>
            <div id='child-target-1' style='border: 1px solid blue; padding: 20px;'>Step 2 (Child)</div>
            <eox-tour id='handoff-tour'></eox-tour>
          </body>
        </html>
      "
      style="width: 100%; height: 200px; border: none; margin-top: 20px;"
    ></iframe>
    <div
      id="parent-target-2"
      style="padding: 20px; border: 1px solid #ccc; margin-top: 20px; margin-bottom: 20px;"
    >
      Step 3 (Parent)
    </div>
    <button
      onclick="document.getElementById('handoff-tour').start()"
      style="margin-top: 20px;"
    >
      Start Handoff Tour
    </button>
    `},render:e=>{const a=`
      <!DOCTYPE html>
      <html>
        <head>
          <style>body { font-family: sans-serif; padding: 20px; border: 2px dashed blue; margin: 0; min-height: 100vh; box-sizing: border-box; }</style>
          
          <script type="module" src="${new URL("tour-dist/eox-tour.js",window.location.origin).href}"><\/script>
        </head>
        <body>
          <div id="child-target-1" style="border: 1px solid blue; padding: 20px;">Step 2 (Child)</div>
          <eox-tour id="handoff-tour"></eox-tour>
        </body>
      </html>
    `;return n`
      <div id="parent-target-1" style="padding: 20px; border: 1px solid #ccc;">
        Step 1 (Parent)
      </div>
      <iframe
        id="demo-iframe"
        srcdoc=${a}
        style="width: 100%; height: 200px; border: none; margin-top: 20px;"
      ></iframe>
      <div
        id="parent-target-2"
        style="padding: 20px; border: 1px solid #ccc; margin-top: 20px; margin-bottom: 20px;"
      >
        Step 3 (Parent)
      </div>
      <eox-tour
        id="handoff-tour"
        show-every-time
        .config=${e.config}
      ></eox-tour>
      <button
        @click=${()=>document.getElementById("handoff-tour").start()}
        style="margin-top: 20px;"
      >
        Start Handoff Tour
      </button>
    `}},c={args:{config:{showButtons:["next","previous","close"],showProgress:!0,totalSteps:3,steps:[{element:"#parent-target-1",popover:{title:"Parent Start"}},{element:"#demo-iframe",popover:{title:"Handoff",targetIframe:"#demo-iframe",childStepIndex:0,backwardChildStepIndex:-1}},{element:"#parent-target-2",popover:{title:"Parent Resume"}}]},storyTemplateBefore:`
    <div id="parent-target-1" style="padding: 20px; border: 1px solid #ccc;">
      Step 1 (Parent)
    </div>
    <iframe
      id="demo-iframe"
      srcdoc="
        <!DOCTYPE html>
        <html>
          <head>
            <style>body { font-family: sans-serif; padding: 20px; border: 2px dashed blue; margin: 0; min-height: 100vh; box-sizing: border-box; }</style>
            <!-- Using CDN for the inner iframe script -->
            <script type='module' src='https://cdn.jsdelivr.net/npm/@eox/tour/dist/eox-tour.js'><\/script>
          </head>
          <body>
            <div id='child-target-1' style='border: 1px solid blue; padding: 20px;'>Step 2 (Child)</div>
            <eox-tour id='handoff-tour' prevent-auto-start></eox-tour>
            <script>
              customElements.whenDefined('eox-tour').then(() => {
                document.getElementById('handoff-tour').config = {
                  showButtons: ['next', 'previous', 'close'],
                  showProgress: true,
                  totalSteps: 3,
                  stepOffset: 1,
                  steps: [
                    {
                      element: '#child-target-1',
                      popover: {
                        title: 'Child Step',
                        description: 'This overlay is running inside the iframe context with its own custom config.',
                        returnToParent: true,
                        parentStepIndex: 2,
                        returnToParentBackward: true,
                        backwardParentStepIndex: 0
                      },
                      onHighlightStarted: () => {
                        console.log('Advanced callback executed in the child frame!');
                      }
                    }
                  ]
                };
              });
            <\/script>
          </body>
        </html>
      "
      style="width: 100%; height: 200px; border: none; margin-top: 20px;"
    ></iframe>
    <div
      id="parent-target-2"
      style="padding: 20px; border: 1px solid #ccc; margin-top: 20px; margin-bottom: 20px;"
    >
      Step 3 (Parent)
    </div>
    <button
      onclick="document.getElementById('handoff-tour').start()"
      style="margin-top: 20px;"
    >
      Start Advanced Handoff Tour
    </button>
    `},render:e=>{const a=`
      <!DOCTYPE html>
      <html>
        <head>
          <style>body { font-family: sans-serif; padding: 20px; border: 2px dashed blue; margin: 0; min-height: 100vh; box-sizing: border-box; }</style>
          
          <script type="module" src="${new URL("tour-dist/eox-tour.js",window.location.origin).href}"><\/script>
        </head>
        <body>
          <div id="child-target-1" style="border: 1px solid blue; padding: 20px;">Step 2 (Child)</div>
          <eox-tour id="handoff-tour" prevent-auto-start></eox-tour>
          <script>
            customElements.whenDefined('eox-tour').then(() => {
              document.getElementById('handoff-tour').config = {
                showButtons: ['next', 'previous', 'close'],
                showProgress: true,
                totalSteps: 3,
                stepOffset: 1,
                steps: [
                  {
                    element: '#child-target-1',
                    popover: {
                      title: 'Child Step',
                      description: 'This overlay is running inside the iframe context with its own custom config.',
                      returnToParent: true,
                      parentStepIndex: 2,
                      returnToParentBackward: true,
                      backwardParentStepIndex: 0
                    },
                    onHighlightStarted: () => {
                      console.log('Advanced callback executed in the child frame!');
                    }
                  }
                ]
              };
            });
          <\/script>
        </body>
      </html>
    `;return n`
      <div id="parent-target-1" style="padding: 20px; border: 1px solid #ccc;">
        Step 1 (Parent)
      </div>
      <iframe
        id="demo-iframe"
        srcdoc=${a}
        style="width: 100%; height: 200px; border: none; margin-top: 20px;"
      ></iframe>
      <div
        id="parent-target-2"
        style="padding: 20px; border: 1px solid #ccc; margin-top: 20px; margin-bottom: 20px;"
      >
        Step 3 (Parent)
      </div>
      <eox-tour
        id="handoff-tour"
        show-every-time
        .config=${e.config}
      ></eox-tour>
      <button
        @click=${()=>document.getElementById("handoff-tour").start()}
        style="margin-top: 20px;"
      >
        Start Advanced Handoff Tour
      </button>
    `}},m={args:{"show-every-time":!0,config:{showButtons:["next"],steps:[{element:"#target-always",popover:{title:"Persistent Tour",description:"I start every time because of the <code>show-every-time</code> attribute.",side:"bottom",align:"start"}}]},storyTemplateBefore:`
    <div id="target-always" style="padding: 20px; border: 1px solid #ccc; margin-bottom: 20px;">
      <h3>Always Visible</h3>
      <p>This tour will start every time the page refreshes.</p>
    </div>
    `},render:e=>n`
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
      .config=${e.config}
    ></eox-tour>
  `},g={title:"Elements/eox-tour",tags:["autodocs"],component:"eox-tour"},t=p,r=l,o=c,i=m;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"PrimaryStory",...t.parameters?.docs?.source},description:{story:`Basic tour example.

The Primary story demonstrates the basic usage of the \`eox-tour\` element.
It shows how to define a simple tour with steps targeting DOM elements
by their CSS selectors.

Each step in the \`config.steps\` array defines:
- \`element\`: A CSS selector for the target element.
- \`popover\`: Configuration for the popover (title, description, side, align).

\`\`\`html
<div id="tour-target-1">Target 1</div>
<div id="tour-target-2">Target 2</div>

<eox-tour
  id="primary-tour"
  .config=\${{
    steps: [
      {
        element: "#tour-target-1",
        popover: { title: "Step 1", description: "First step." }
      },
      {
        element: "#tour-target-2",
        popover: { title: "Step 2", description: "Second step." }
      }
    ]
  }}
></eox-tour>
\`\`\``,...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"IframeHandoffStory",...r.parameters?.docs?.source},description:{story:'Example demonstrating simple cross-iframe handoff logic (Single Configuration).\n\nThe IframeHandoff story demonstrates the ability of `eox-tour`\nto seamlessly transition between a parent window and an iframe using a simple unified configuration.\n\nIn this "Simple" mode, the entire configuration for both the parent and the child iframe\nis defined natively in the parent `eox-tour` component!\n\n**Limitations & Benefits of Simple Mode:**\n- **Benefit:** The child iframe component requires ZERO configuration! The parent component calculates the progress totals and dispatches the corresponding step settings downward.\n- **Benefit:** Super intuitive mapping of steps in a single array.\n- **Limitation:** Cannot pass JavaScript functions (like \\`onHighlightStarted\\`, \\`onNextClick\\`, etc.) down into the iframe steps because \\`postMessage\\` serialization cannot transport functions across boundaries.\n- **Limitation:** Can\'t handle extraordinarily complex internal branching flows inside the iframe natively.\n\nTo trigger this mode, simply provide the `targetIframe` containing the CSS selector pointing\nto the iframe element, and specify the `element` selector indicating the element to select *inside* the iframe.\n\nSynchronization is automatically handled via the `postMessage` API using the `id` of the\n`eox-tour` element as a shared identifier. It is strictly required that both the inner\nand outer eox-tour elements share the exact same `id` for handoff messages to be successfully routed.',...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"IframeHandoffAdvancedStory",...o.parameters?.docs?.source},description:{story:'Advanced example demonstrating cross-iframe handoff logic (Split Configuration).\n\nThe IframeHandoffAdvanced story demonstrates how to configure handoffs for complex scenarios where\ncustom programmatic callbacks or custom lifecycle logic must execute inside the iframe context.\n\nIn this "Advanced" mode, the configuration is explicitly split. The parent defines its steps and\ndefines invisible "routing jumps", and the child defines its own completely decoupled steps.\n\n**Limitations & Benefits of Advanced Mode:**\n- **Benefit:** Full support for `driver.js` event callbacks (`onHighlightStarted`, `onNextClick`) within iframe steps since they are defined natively alongside the iframe!\n- **Limitation:** Tremendous cognitive overhead. `totalSteps` and visual index `stepOffset` must be manually synchronized.\n- **Limitation:** Need heavily precise tracking of `childStepIndex`, `backwardChildStepIndex`, `returnToParent`, and `parentStepIndex` mapping properties.\n\nThis mode is triggered automatically whenever the child `eox-tour` element *already possesses its own `steps` configuration array*! Look closely at the `childStepIndex` maps in the routing.',...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"ShowEveryTimeStory",...i.parameters?.docs?.source},description:{story:`Example demonstrating how to bypass localStorage.

The ShowEveryTime story illustrates the difference between persistent and
non-persistent tours.

When the \`show-every-time\` attribute is set, the tour ignores the
\`localStorage\` key (usually used to prevent showing the same tour multiple times)
and starts automatically every time the component is mounted. This is useful for
testing or for critical information that should be shown on every visit.

\`\`\`html
<div id="target-always">Always Visible</div>

<eox-tour
  id="always-tour"
  show-every-time
  .config=\${{
    steps: [
      {
        element: "#target-always",
        popover: { title: "Persistent Tour", description: "Starts every time." }
      }
    ]
  }}
></eox-tour>
\`\`\``,...i.parameters?.docs?.description}}};const f=["Primary","IframeHandoff","IframeHandoffAdvanced","ShowEveryTime"];export{r as IframeHandoff,o as IframeHandoffAdvanced,t as Primary,i as ShowEveryTime,f as __namedExportsOrder,g as default};
