import { LitElement, html } from "lit";
import initEditor from "../helpers/editor";

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

    this.editor = initEditor(editorContainer, resizeHandle, this);
    this.#editorUpdate = true;

    // Event listener for editor content change
    this.editor.onDidChangeModelContent(() => {
      this.#editorUpdate = true;
      if (this.#debounceSetTimeoutEvent)
        clearTimeout(this.#debounceSetTimeoutEvent);
      this.querySelector(".editor-saver").style.display = "inline-block";

      this.#debounceSetTimeoutEvent = setTimeout(() => {
        this.dispatchEvent(
          new CustomEvent("change", {
            detail: { markdown: this.getCurrentValue() },
            bubbles: true,
            composed: true,
          })
        );

        this.querySelector(".editor-saver").style.display = "none";
      }, 2500);
    });
  }

  /**
   * Method to get the current value of the editor
   */
  getCurrentValue() {
    if (this.editor) return this.editor.getValue();
    else return "";
  }

  /**
   * Lifecycle method called when the element is removed from the DOM
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.editor) {
      this.editor.dispose();
    }
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
    if (this.editor && markdown) this.editor.setValue(markdown);
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
      <div class="editor-wrapper ${editorView} ${navHeight}">
        <div id="editor"></div>
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
