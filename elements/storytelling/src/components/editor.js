import { LitElement, html } from "lit";
import {
  initEditorEvents,
  positionEditor,
  runWhenEditorInitialised,
} from "../helpers";
import { EDITOR_SCHEMA } from "../enums";

// Define LitElement for the editor
class StoryTellingEditor extends LitElement {
  // Define static properties for LitElement
  static properties = {
    markdown: { attribute: "markdown", type: String },
    storyId: { attribute: "story-id", type: String },
    showEditor: { attribute: "show-editor", type: String },
    isNavigation: { attribute: "markdown", type: Boolean },
  };

  constructor() {
    super();

    /**
     * @type {String} - Markdown Content
     */
    this.markdown = "";

    /**
     * @type {String | null} - id of eox-storytelling
     */
    this.storyId = null;

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

    /**
     * Enable or disable editor
     *
     * @type {String}
     */
    this.showEditor = false;

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
    if (this.showEditor === "close")
      this.querySelector(".switch-input").click();

    // Get editor container and resize handle elements
    const editorContainer = this.querySelector(".editor-wrapper");
    const resizeHandle = this.querySelector(".resize-handle");

    this.editor = this.renderRoot.querySelector(
      "eox-jsonform#storytelling-editor"
    );

    positionEditor(this);
    runWhenEditorInitialised.call(this);
    initEditorEvents(editorContainer, resizeHandle, this);
  }

  updateErrors(errors) {
    const errorDom = this.renderRoot.querySelector(".editor-error");

    if (errorDom && errors.length) {
      errorDom.style.display = "block";
      errorDom.querySelector("ul").innerHTML = errors
        .map(
          (error) => `<li><strong>${error.ref}</strong>: ${error.message}</li>`
        )
        .join("");
    } else errorDom.style.display = "none";
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
  #switchEditorView(evt) {
    const wrapper = this.renderRoot.querySelector(".editor-wrapper");
    const storyIdSelector = this.storyId ? `#${this.storyId}` : "";
    const storyDOM = document.querySelector(
      `eox-storytelling${storyIdSelector}`
    );
    if (!evt.target.checked) {
      wrapper.classList.add("editor-opacity-none");
      setTimeout(() => wrapper.classList.add("editor-hide"), 500);
      storyDOM.setAttribute("show-editor", "close");
    } else {
      wrapper.classList.remove("editor-opacity-none");
      wrapper.classList.remove("editor-hide");
      storyDOM.setAttribute("show-editor", "open");
    }
  }

  // Override render method to define the HTML structure
  render() {
    if (!customElements.get("eox-jsonform"))
      console.error(
        "Please import @eox/jsonform in order to use StoryTelling Editor"
      );

    const navHeight = this.isNavigation ? "partial-height" : "";

    return html`
      <div class="editor-wrapper ${navHeight}">
        <eox-jsonform
          id="storytelling-editor"
          no-shadow
          .schema=${EDITOR_SCHEMA}
          .value=${{ Story: this.markdown }}
        ></eox-jsonform>
        <div class="resize-handle"></div>
        <span class="editor-saver">Saved</span>
        <div class="editor-error">
          <div class="editor-error-wrapper">
            <div class="overflow">
              <h6>⛔ Error</h6>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
      <div class="switch-button">
        <label class="switch">
          <i class="icon view-icon"></i>
          <input
            class="switch-input"
            type="checkbox"
            @change=${this.#switchEditorView}
            checked
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
          padding: 0 !important;
          margin: 0 !important;
          border: none !important;
        }
        .CodeMirror {
          height: 100%;
          min-height: unset;
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
        eox-jsonform .CodeMirror-sizer {
          padding-bottom: 100px !important;
        }
        eox-jsonform#storytelling-editor .je-form-input-label,
        eox-jsonform#storytelling-editor .je-object__controls {
          display: none !important;
        }
      </style>
    `;
  }
}

// Define custom element "story-telling-editor"
customElements.define("eox-storytelling-editor", StoryTellingEditor);
