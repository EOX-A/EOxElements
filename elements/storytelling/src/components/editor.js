import { LitElement, html } from "lit";
import { initEditorEvents } from "../helpers";
import { EDITOR_SCHEMA } from "../enums";

// Define LitElement for the editor
class StoryTellingEditor extends LitElement {
  // Define static properties for LitElement
  static properties = {
    markdown: { attribute: "markdown", type: String },
    isNavigation: { attribute: "markdown", type: Boolean },
  };

  /**
   * @type {Boolean} - Temporary enable/disable editor state for switch button
   */
  #temporaryEnableEditor = true;

  constructor() {
    super();

    /**
     * @type {String} - Markdown Content
     */
    this.markdown = "";

    /**
     * @type {Boolean} - is navigation enabled or not
     */
    this.isNavigation = false;

    /**
     * @type {Boolean} - Dragging enabled or not
     */
    this.dragging = false;

    /**
     * @type {Boolean} - Resizing enabled on not
     */
    this.resizing = false;

    // Bind methods to the instance
    this.disableTextSelection = this.disableTextSelection.bind(this);
    this.enableTextSelection = this.enableTextSelection.bind(this);
  }

  /**
   * Method to disable text selection
   */
  disableTextSelection() {
    document.body.style.userSelect = "none";
  }

  /**
   * Method to enable text selection
   */
  enableTextSelection() {
    document.body.style.userSelect = "";
  }

  /**
   * Lifecycle method called after the first update
   */
  firstUpdated() {
    // Get editor container and resize handle elements
    const editorContainer = this.querySelector(".editor-wrapper");
    const resizeHandle = this.querySelector(".resize-handle");

    this.editor = this.renderRoot.querySelector(
      "eox-jsonform#storytelling-editor"
    );
    initEditorEvents(editorContainer, resizeHandle, this);
  }

  /**
   * Override createRenderRoot to use LitElement as the render root
   */
  createRenderRoot() {
    return this;
  }

  /**
   * Switch between editor or viewer mode
   */
  #switchEditorView() {
    this.#temporaryEnableEditor = Boolean(!this.#temporaryEnableEditor);
    this.markdown = this.editor.value.Story;
    this.requestUpdate();
  }

  // Override render method to define the HTML structure
  render() {
    if (!customElements.get("eox-jsonform"))
      console.error(
        "Please import @eox/jsonform in order to use StoryTelling Editor"
      );

    const editorView = !this.#temporaryEnableEditor ? "editor-hide" : "";
    const navHeight = this.isNavigation ? "partial-height" : "";

    return html`
      <div class="editor-wrapper ${editorView} ${navHeight}">
        <eox-jsonform
          id="storytelling-editor"
          no-shadow
          .schema=${EDITOR_SCHEMA}
          .value=${{ Story: this.markdown }}
        ></eox-jsonform>
        <div class="resize-handle"></div>
        <span class="editor-saver"></span>
      </div>
      <div class="switch-button">
        <label class="switch">
          <i class="icon view-icon"></i>
          <input
            class="switch-input"
            type="checkbox"
            @click=${this.#switchEditorView}
            .checked=${!!this.#temporaryEnableEditor}
          />
          <span class="switch-slider round"></span>
          <i class="icon editor-icon"></i>
        </label>
      </div>
      <style>
        eox-jsonform#storytelling-editor {
          display: block;
          height: 100%;
          cursor: default;
        }
        .editor-wrapper {
          padding: 0.5rem;
        }
        .editor-toolbar:hover {
          opacity: 1;
        }
        form[data-theme="html"] .je-indented-panel {
          padding: 0;
          margin: 0;
          border: none;
        }
        .CodeMirror {
          height: 100%;
        }
        eox-jsonform form[data-theme="html"],
        eox-jsonform div[data-schemaid="root"],
        eox-jsonform div.je-indented-panel,
        eox-jsonform div.je-indented-panel > div,
        eox-jsonform div.je-indented-panel > div > div,
        eox-jsonform div.row,
        eox-jsonform div[data-schematype="string"],
        eox-jsonform div.form-control {
          height: 100%;
        }
        eox-jsonform div.form-control {
          display: flex;
          flex-direction: column;
        }
        eox-jsonform div.editor-toolbar,
        eox-jsonform div.editor-statusbar {
          flex-shrink: 1;
        }
        .je-form-input-label,
        .je-object__controls {
          display: none !important;
        }
      </style>
    `;
  }
}

// Define custom element "story-telling-editor"
customElements.define("eox-storytelling-editor", StoryTellingEditor);
