import { LitElement, html } from "lit";
import {
  initEditorEvents,
  positionEditor,
  runWhenEditorInitialised,
  updateEditorInitVisibility,
} from "../helpers";
import { EDITOR_SCHEMA } from "../enums";

// Define LitElement for the editor
export class StoryTellingEditor extends LitElement {
  // Define static properties for LitElement
  static properties = {
    markdown: { attribute: "markdown", type: String },
    storyId: { attribute: "story-id", type: String },
    showEditor: { attribute: "show-editor", type: String },
    isNavigation: { attribute: "markdown", type: Boolean },
    disableAutosave: { attribute: "disable-autosave", type: Boolean },
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
    this.showEditor = undefined;

    /**
     * Disable auto save
     *
     * @type {Boolean}
     */
    this.disableAutosave = false;

    /**
     * @type Number
     */
    this.lastX = undefined;

    /**
     * @type Number
     */
    this.lastY = undefined;

    /**
     * @type {import("@eox/jsonform").EOxJSONForm}
     */
    this.editor = undefined;

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
      "eox-jsonform#storytelling-editor",
    );

    if (this.showEditor === "closed") updateEditorInitVisibility(this);

    positionEditor(this);
    runWhenEditorInitialised(this);
    initEditorEvents(editorContainer, resizeHandle, this);
  }

  updateErrors(errors) {
    /**
     * @type HTMLElement
     */
    const errorDom = this.renderRoot.querySelector(".editor-error");

    if (errorDom) {
      if (errors.length) {
        errorDom.style.display = "block";
        errorDom.querySelector("ul").innerHTML = errors
          .map(
            (error) =>
              `<li><strong>${error.ref}</strong>: ${error.message}</li>`,
          )
          .join("");
      } else errorDom.style.display = "none";
    }
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
      `eox-storytelling${storyIdSelector}`,
    );
    if (!evt.target.checked) {
      wrapper.classList.add("editor-hide");
      storyDOM.setAttribute("show-editor", "closed");
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
        "Please import @eox/jsonform in order to use StoryTelling Editor",
      );

    const navHeight = this.isNavigation ? "partial-height" : "";

    return html`
      <div class="editor-wrapper ${navHeight} comment-active">
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
        <label class="switch icon">
          <input type="checkbox" @change=${this.#switchEditorView} />
          <span>
            <i class="small">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>pencil</title>
                <path
                  d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                />
              </svg>
            </i>
          </span>
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
        .editor-wrapper .CodeMirror {
          height: 100%;
          min-height: unset;
        }
        .editor-wrapper .EasyMDEContainer {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .editor-wrapper .EasyMDEContainer .CodeMirror-scroll {
          min-height: 1000px;
        }
        .editor-toolbar button {
          box-shadow: none;
          color: #2c3e50 !important;
        }
        .editor-toolbar button:hover:not([disabled]):not(.icon),
        .editor-toolbar button:hover:not([disabled]):not(.icon) {
          box-shadow: none;
          background: #fcfcfc;
          border-color: #95a5a6;
        }
        .editor-toolbar button i {
          font-size: 17px;
        }
        .editor-wrapper .cm-header-1 {
          font-size: 200%;
        }
        .editor-wrapper .cm-header-1 {
          font-size: 200%;
          line-height: 200%;
        }
        .editor-wrapper .cm-header-2 {
          font-size: 160%;
          line-height: 160%;
        }
        .editor-wrapper .cm-header-3 {
          font-size: 125%;
          line-height: 125%;
        }
        .editor-wrapper .cm-header-4 {
          font-size: 110%;
          line-height: 110%;
        }
        .editor-wrapper .cm-comment {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 2px;
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
