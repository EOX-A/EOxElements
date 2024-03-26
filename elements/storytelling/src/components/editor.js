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

  #debounceSetTimeoutEvent = false;
  #temporaryEnableEditor = true;
  #editorUpdate = false;
  constructor() {
    super();
    // Initialize properties
    this.markdown = "";
    this.isNavigation = false;
    this.dragging = false;
    this.resizing = false;

    // Bind methods to the instance
    this.disableTextSelection = this.disableTextSelection.bind(this);
    this.enableTextSelection = this.enableTextSelection.bind(this);
  }

  // Method to disable text selection
  disableTextSelection() {
    document.body.style.userSelect = "none";
  }

  // Method to enable text selection
  enableTextSelection() {
    document.body.style.userSelect = "";
  }

  // Lifecycle method called after the first update
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

  // Method to get the current value of the editor
  getCurrentValue() {
    if (this.editor) return this.editor.getValue();
    else return "";
  }

  // Lifecycle method called when the element is removed from the DOM
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.editor) {
      this.editor.dispose();
    }
  }

  // Override createRenderRoot to use LitElement as the render root
  createRenderRoot() {
    return this;
  }

  updated(changedProperties) {
    if (changedProperties.has("markdown") && !this.#editorUpdate)
      this.updateEditorContent(this.markdown);

    this.#editorUpdate = false;
  }

  updateEditorContent(markdown) {
    if (this.editor && markdown) this.editor.setValue(markdown);
  }

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

    return html`
      <style>
        ${this.#styling}
      </style>
      <div
        class="editor-wrapper ${editorView} ${this.isNavigation
          ? "partial-height"
          : ""}"
      >
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
            .checked=${this.#temporaryEnableEditor ? true : false}
          />
          <span class="switch-slider round"></span>
          <i class="icon editor-icon"></i>
        </label>
      </div>
    `;
  }

  // Private styling CSS
  #styling = `
    .editor-wrapper {
      padding: 20px;
      padding-right: 22px;
      z-index: 9999;
      width: 35%;
      height: calc(100vh - 80px);
      position: fixed;
      top: 20px;
      right: 20px;
      border-radius: 10px;
      background: #f2f2f2;
      cursor: move;
      box-shadow: 0px 0px 3px 2px #80808026;
    }
    .resize-handle {
      display: none;
      position: absolute;
      width: 10px;
      height: 10px;
      bottom: 0;
      left: 0;
      background-color: #444444;
      cursor: sw-resize;
      z-index: 1;
    }
    .editor-wrapper.partial-height {
      height: calc(100vh - 100px);
      top: 80px
    }
    #editor {
      width: 100%;
      height: 100%;
      border: 2px solid #ebebeb;
      cursor: auto;
    }
    @media screen and (max-width: 1024px) {
      .editor-wrapper {
        right: 2.5%;
        width: 95%;
      }
    }
    .editor-hide {
      display: none;
    }
    .editor-error {
      cursor: auto;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 105px;
      background: #ffc7d3;
      border-bottom-right-radius: 10px;
      border: 2px solid #ff7b9640;
    }
    .editor-error .editor-error-wrapper {
      padding: 0.5rem;
      height: 100%;
    }
    .editor-error .editor-error-wrapper .overflow { 
      height: 100%;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      width: 85%;
    }
    .editor-error .editor-error-wrapper .overflow::-webkit-scrollbar { 
      display: none;
    }
    .editor-error .editor-error-wrapper h6 {
      margin: 0;
      padding: 0;
      font-size: 0.7rem;
      color: #dd264c;
    }
    .editor-error .editor-error-wrapper ul {
      margin-top: 0.25rem;
    }
    .editor-error .editor-error-wrapper li {
      color: #dd264c;
      font-size: 0.6rem;
      font-weight: 400;
      margin-bottom: 0;
      margin-left: 0.2rem;
    }
    .editor-saver {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      position: absolute;
      top: 10px;
      left: 10px;
      animation: rotate 1s linear infinite;
      display: none;
    }
    .editor-saver::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 5px solid #5b5b5b85;
      animation: spin 2s linear infinite ;
    }
    @keyframes rotate {
      100% {transform: rotate(360deg)}
    }
    @keyframes spin {
      0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
      25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
      50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
      75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
      100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }
    .switch-button {
      position: fixed;
      bottom: 50px;
      right: 60px;
      display: inline-block;
      font-size: 0;
      z-index: 99999;
      border: 5px white solid;
      border-radius: 34px;
      box-shadow: 1px 2px 10px 1px #7e7e7e59;
      cursor: pointer;
    }
    .switch {
      position: relative;
      display: flex;
      align-items: center;
      width: 65px;
      height: 34px;
      font-size: 16px;
      justify-content: space-around;
      margin-bottom: 0px;
    }
    .switch .switch-input { 
      opacity: 0;
      width: 0;
      height: 0;
    }
    .switch .icon {
      z-index: 2;
      width: 30px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .switch .icon::before {
      cursor: pointer;
      display: block;
      width: 18px;
      height: 18px;
    }
    .view-icon {
      padding-left: 8px;
    }
    .editor-icon {
      padding-right: 8px;
    }
    .switch .view-icon:before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eeye%3C/title%3E%3Cpath fill='white' d='M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z' /%3E%3C/svg%3E");
    }
    .switch .icon.editor-icon:before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Epencil%3C/title%3E%3Cpath fill='white' d='M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z' /%3E%3C/svg%3E");
    }
    .switch-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 20px;
      right: 20px;
      bottom: 0;
      z-index: 1;
      background-color: #727272;
      transition: .4s;
      border-radius: 34px;
      left: 0px;
      right: 0px;
      width: 65px;
    }
    .switch-slider:before {
      cursor: pointer;
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
    .switch-input:checked + .switch-slider {
      background-color: #2196F3;
    }
    .switch-input:checked + .switch-slider:before {
      transform: translateX(30px);
    }
    .switch .icon.editor-view {
      opacity: 0;
    }
    @media screen and (max-width: 1024px) {
      .switch-button {
        right: 20px;
      }
    }
    .section-line-decoration {
      background: #757575;
      z-index: 1;
      align-items: center;
      justify-content: center;
      display: flex;
      color: #ffffff;
      font-size: 12px;
      font-weight: 700;
    }
    .margin-view-overlays {
      background: #e6e6e6;
    }
    .monaco-editor .margin-view-overlays .line-numbers {
      font-weight: 600;
      font-size: small;
      color: #737373;
    }
  `;
}

// Define custom element "story-telling-editor"
customElements.define("story-telling-editor", StoryTellingEditor);
