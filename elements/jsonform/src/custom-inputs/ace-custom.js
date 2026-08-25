import { JSONEditor } from "@json-editor/json-editor/src/core.js";
import { createMarkdownToolbar } from "./ace-custom/index.js";

// Get the original ace editor
const aceEditor = JSONEditor.defaults.editors.ace;

/**
 * Custom editor that extends the built-in Ace editor to add a markdown toolbar.
 * @extends aceEditor
 */
export class AceCustomEditor extends aceEditor {
  afterInputReady() {
    super.afterInputReady();

    // If the schema options specify a markdown toolbar, create it.
    // @ts-expect-error - options is not defined in the ace-builds type
    if (this.options.markdownToolbar && this.ace_editor_instance) {
      createMarkdownToolbar(this);
    }

    // @ts-expect-error - options is not defined in the ace-builds type
    if (this.options.disableUndoRedo && this.ace_editor_instance) {
      // @ts-expect-error - ace_editor_instance is not defined in the ace-builds type
      this.ace_editor_instance.commands.addCommand({
        name: "undo",
        bindKey: { win: "Ctrl-Z", mac: "Command-Z" },
        exec: () => {},
      });
      // @ts-expect-error - ace_editor_instance is not defined in the ace-builds type
      this.ace_editor_instance.commands.addCommand({
        name: "redo",
        bindKey: {
          win: "Ctrl-Y|Ctrl-Shift-Z",
          mac: "Command-Y|Command-Shift-Z",
        },
        exec: () => {},
      });
    }
  }
}
