import { JSONEditor } from "@json-editor/json-editor/src/core.js";

// @ts-ignore
// Get the original ace editor
const aceEditor = JSONEditor.defaults.editors.ace;

/**
 * Custom editor that extends the built-in Ace editor to add a markdown toolbar.
 * @extends aceEditor
 * @property {object} schema - The JSON schema for this editor instance.
 * @property {JSONEditor} jsoneditor - The root JSON Editor instance.
 * @property {import('ace-builds').Ace.Editor} ace_editor_instance - The Ace editor instance.
 * @property {HTMLElement} ace_container - The container for the Ace editor.
 */
export const AceMarkdownEditor = class extends aceEditor {
  preBuild() {
    super.preBuild();
    // The original ace editor takes the format from the schema to load the mode.
    // Our custom format is "markdown-ace", but the ace mode is just "markdown".
    // We temporarily override the format to ensure the correct mode is loaded.
    this.schema.format = "markdown";
  }

  postBuild() {
    super.postBuild();

    // Defer toolbar creation to prevent a race condition. This ensures the
    // editor's DOM elements are fully rendered before we try to manipulate them.
    setTimeout(() => {
      // @ts-ignore The `ace_editor_instance` is the actual Ace editor instance.
      const aceInstance = this.ace_editor_instance;
      if (!aceInstance) {
        return;
      }

      const toolbar = document.createElement("div");
      toolbar.style.border = "1px solid #ccc";
      toolbar.style.padding = "3px";
      toolbar.style.display = "flex";
      toolbar.style.gap = "5px";
      toolbar.style.borderBottom = "none";
      toolbar.style.background = "#f8f8f8";
      toolbar.style.borderTopLeftRadius = "4px";
      toolbar.style.borderTopRightRadius = "4px";
      toolbar.style.paddingLeft = "40px";
      toolbar.style.paddingBottom = "6px";
      // make sure bottom is not rounder
      toolbar.style.borderBottomLeftRadius = "0";
      toolbar.style.borderBottomRightRadius = "0";

      const createButton = (text, title, onClick) => {
        const button = document.createElement("button");
        button.type = "button"; // Prevent form submission
        button.innerHTML = text;
        button.style.background = "#fff";
        button.style.border = "1px solid #ccc";
        button.style.padding = "0";
        button.style.width = "22px";
        button.style.margin = "0px";
        button.style.height = "22px";
        button.style.display = "flex";
        button.style.alignItems = "center";
        button.style.justifyContent = "center";
        button.style.textAlign = "center";
        button.style.cursor = "pointer";
        button.style.borderRadius = "3px";
        button.style.fontFamily = "sans-serif";
        button.style.color = "#333"; // Ensure text color is visible
        button.style.fontWeight = "bold";
        button.style.fontSize = "14px";
        button.title = title;
        button.onclick = onClick;
        return button;
      };

      const insertText = (text, placeholder = "") => {
        const selected = aceInstance.getSelectedText();
        if (selected) {
          aceInstance.insert(text.replace("...", selected));
        } else {
          aceInstance.insert(text.replace("...", placeholder));
        }
        aceInstance.focus();
      };

      const icon = (path) =>
        `<svg style="width:6px;height:6px" viewBox="-4 -4 32 32"><path fill="#333" d="${path}" /></svg>`;

      const strikethroughIcon =
        "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z";
      const linkIcon =
        "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z";
      const listIcon =
        "M7 5h14v2H7V5m0 6h14v2H7v-2m0 6h14v2H7v-2M4 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z";

      toolbar.appendChild(
        createButton("H", "Heading", () => insertText("# ...", "Heading")),
      );
      toolbar.appendChild(
        createButton("B", "Bold", () => insertText("**...**", "bold text")),
      );
      toolbar.appendChild(
        createButton("I", "Italic", () => insertText("*...*", "italic text")),
      );
      toolbar.appendChild(
        createButton(icon(strikethroughIcon), "Strikethrough", () =>
          insertText("~~...~~", "strikethrough text"),
        ),
      );
      toolbar.appendChild(
        createButton(icon(linkIcon), "Link", () =>
          insertText("...", "link text"),
        ),
      );
      toolbar.appendChild(
        createButton(icon(listIcon), "List", () =>
          insertText("\n- ...", "list item"),
        ),
      );

      // Programmatically add styles to remove rounded corners from the editor
      // to match the square corners of the toolbar.
      const style = document.createElement("style");
      // get gutter element and remove top radius
      this.jsoneditor.element.querySelector(
        ".ace_editor",
      ).style.borderTopLeftRadius = "0";
      this.jsoneditor.element.querySelector(
        ".ace_editor",
      ).style.borderTopRightRadius = "0";

      // we also add all around the same border as the toolbar to the ace editor
      this.jsoneditor.element.querySelector(".ace_editor").style.border =
        "1px solid #ccc";

      // this.jsoneditor.element is the <eox-jsonform> component
      this.jsoneditor.element.appendChild(style);

      // Insert the toolbar before the ace editor container
      this.ace_container.parentNode.insertBefore(toolbar, this.ace_container);
    }, 0);
  }
};

/**
 * Resolver function that returns our custom AceMarkdownEditor for the "markdown-ace" format.
 * @param {JSONSchema} schema
 * @returns {string | undefined}
 */
export const aceMarkdownResolver = (schema) => {
  if (schema.type === "string" && schema.format === "markdown-ace") {
    return "acemarkdown";
  }
};
