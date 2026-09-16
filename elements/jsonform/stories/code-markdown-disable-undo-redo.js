/**
 * Code Markdown Disable Undo Redo example. Shows how to disable undo/redo in the markdown code editor.
 */

import { html } from "lit";
import codeMarkdownDisableUndoRedoSchema from "./public/codeMarkdownDisableUndoRedoSchema.json";

export const CodeMarkdownDisableUndoRedo = {
  args: {
    schema: codeMarkdownDisableUndoRedoSchema,
    value: {
      markdown: `# Try to edit this and then use Ctrl-Z / Cmd-Z or Ctrl-Y / Cmd-Y
You will see that undo/redo keybindings are disabled.
* This is a markdown list
* Undo and Redo disabled here.`,
    },
  },
  render: (args) => {
    return html`
      <eox-jsonform .schema=${args.schema} .value=${args.value}></eox-jsonform>
    `;
  },
};

export default CodeMarkdownDisableUndoRedo;
