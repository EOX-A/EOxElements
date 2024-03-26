import { LitElement, html } from "lit";
import "../../../jsonform/src/main.js";
import "https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js";
// TODO import helpers for moving editor etc.

// Define LitElement for the editor
class StoryTellingEditor extends LitElement {
  // Define static properties for LitElement
  static properties = {
    errors: { attribute: false, type: Array },
    markdown: { attribute: "markdown", type: String },
    isNavigation: { attribute: "markdown", type: Boolean },
  };

  /**
   * @type {Boolean} - Debounce set timeout event
   */
  #debounceSetTimeoutEvent = false;

  /**
   * @type {Boolean} - Temporary enable/disable editor state for switch button
   */
  #temporaryEnableEditor = true;

  /**
   * @type {Boolean} - Edit or update state
   */
  #editorUpdate = false;
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

    this.editor = this.renderRoot.querySelector("eox-jsonform");
    this.#editorUpdate = true;
  }

  /**
   * Override createRenderRoot to use LitElement as the render root
   */
  createRenderRoot() {
    return this;
  }

  /**
   * Lifecycle triggered after a DOM or state update
   */
  updated(changedProperties) {
    if (changedProperties.has("markdown") && !this.#editorUpdate)
      this.updateEditorContent(this.markdown);

    this.#editorUpdate = false;
  }

  /**
   * Lifecycle triggered after a DOM or state update
   */
  updateEditorContent(markdown) {
    if (this.editor && markdown) this.editor.value = { markdown };
  }

  /**
   * Switch between editor or viewer mode
   */
  #switchEditorView() {
    this.#temporaryEnableEditor = Boolean(!this.#temporaryEnableEditor);
    const addNodes = this.querySelectorAll(".add-wrap");

    addNodes.forEach((node) => {
      node.style.display = this.#temporaryEnableEditor ? "flex" : "none";
    });

    this.requestUpdate();
  }

  // Override render method to define the HTML structure
  render() {
    const editorView = !this.#temporaryEnableEditor ? "editor-hide" : "";
    const navHeight = this.isNavigation ? "partial-height" : "";

    return html`
      <style>
        @import url("https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css");
      </style>
      <div class="editor-wrapper ${editorView} ${navHeight}">
        <eox-jsonform
          no-shadow
          .schema=${{
            title: "Story",
            properties: {
              Story: {
                type: "string",
                format: "markdown",
                options: {
                  simplemde: {
                    toolbar: [
                      "bold",
                      "italic",
                      "heading",
                      "|",
                      "link",
                      "quote",
                      "|",
                      // "preview",
                      // "fullscreen",
                      "guide",
                      {
                        name: "custom",
                        action: function customFunction(editor) {
                          // Add your own code
                          alert("hello world");
                        },
                        className: "fa fa-star",
                        title: "Custom Button",
                      },
                    ],
                    spellChecker: false,
                  },
                },
              },
            },
          }}
          .value=${{
            Story: this.markdown,
          }}
          @change=${(evt) => {
            this.#editorUpdate = true;
            // the change event also bubbles up to the parent, so evt.detail can be read by it
          }}
          style="display: block; height: 100%; overflow-y: auto"
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
    `;
  }
}

// Define custom element "story-telling-editor"
customElements.define("story-telling-editor", StoryTellingEditor);
