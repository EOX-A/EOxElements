/**
 * Renders storytelling with basic config using plugin
 */
import { html } from "lit";
import "../src/main.js";

export const MarkdownBasicConfig = {
  args: {
    markdown: `
---
nav: false
id: 123
slug: abc-xyz
type: pagination
miscArrObj: [{"hero-section":"Hero","basic-section":"Basic","sidecar":"SidecarSteps","sidecar-layers":"SidecarLayer"}]
miscArr: [15.20]
miscObj: {"foo": "bar"}
---

## Generate StoryTelling with basic config.
`,
  },
  render: (args) => html`
    <!-- Render eox-storytelling with basic config. -->
    <eox-storytelling
      id="markdown-config"
      show-config
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default MarkdownBasicConfig;
