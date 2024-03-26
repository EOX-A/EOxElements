import * as monaco from "monaco-editor/esm/vs/editor/editor.main";
import { buildWorkerDefinition } from "monaco-editor-workers";

buildWorkerDefinition(
  "../../../../node_modules/monaco-editor-workers/dist/workers",
  import.meta.url,
  false
);

/**
 * Function to disable text selection
 */
function disableTextSelection() {
  document.body.style.userSelect = "none";
}

/**
 * Function to enable text selection
 */
function enableTextSelection() {
  document.body.style.userSelect = "";
}

/**
 * Function to handle mouse down on the editor container
 *
 * @param {{target: Object, clientX: Number, clientY: Number}} e - Event for handle mouse move.
 * @param {Object} editorContainer - editor container dom
 * @param {Element} StoryTellingEditor - Dom element
 */
function handleEditorContainerMouseDown(
  e,
  editorContainer,
  StoryTellingEditor
) {
  if (e.target === editorContainer) {
    disableTextSelection();
    StoryTellingEditor.dragging = true;
    StoryTellingEditor.lastX = e.clientX;
    StoryTellingEditor.lastY = e.clientY;
  }
}

/**
 * Function to handle mouse move for dragging and resizing
 *
 * @param {{clientX: Number, clientY: Number}} e - Event for handle mouse move.
 * @param {Object} editorContainer - editor container dom
 * @param {Element} StoryTellingEditor - Dom element
 */
function handleMouseMove(e, editorContainer, StoryTellingEditor) {
  if (StoryTellingEditor.dragging) {
    let dx = e.clientX - StoryTellingEditor.lastX;
    let dy = e.clientY - StoryTellingEditor.lastY;
    let { top, left } = editorContainer.getBoundingClientRect();

    editorContainer.style.top = `${top + dy}px`;
    editorContainer.style.left = `${left + dx}px`;

    StoryTellingEditor.lastX = e.clientX;
    StoryTellingEditor.lastY = e.clientY;
  }

  if (StoryTellingEditor.dragging) {
    let dx = StoryTellingEditor.lastX - e.clientX;
    let dy = e.clientY - StoryTellingEditor.lastY;
    let { width, height, left } = editorContainer.getBoundingClientRect();

    if (StoryTellingEditor.resizing) {
      editorContainer.style.width = `${width + dx}px`;
      editorContainer.style.height = `${height + dy}px`;
    }
    editorContainer.style.left = `${left - dx}px`;

    StoryTellingEditor.lastX = e.clientX;
    StoryTellingEditor.lastY = e.clientY;
  }
}

/**
 * Function to handle mouse up and enable text selection
 *
 * @param {Element} StoryTellingEditor - Dom element
 */
function handleMouseUp(StoryTellingEditor) {
  enableTextSelection();
  StoryTellingEditor.dragging = false;
  StoryTellingEditor.resizing = false;
}

/**
 * Function to handle resize handle mouse down
 *
 * @param {{clientX: Number, clientY: Number}} e - Event for handle mouse move.
 * @param {Element} StoryTellingEditor - Dom element
 */
export function handleResizeHandleMouseDown(e, StoryTellingEditor) {
  e.stopPropagation();
  disableTextSelection();
  StoryTellingEditor.resizing = true;
  StoryTellingEditor.lastX = e.clientX;
  StoryTellingEditor.lastY = e.clientY;
}

/**
 * Function to create Monaco editor
 *
 * @param {Element} StoryTellingEditor - Dom element
 */
function createMonacoEditor(StoryTellingEditor) {
  return monaco.editor.create(StoryTellingEditor.querySelector("#editor"), {
    language: "markdown",
    theme: "vs",
    automaticLayout: true,
    lineNumbersMinChars: 2,
    mouseWheelZoom: true,
    minimap: { enabled: false },
    wordWrap: true,
    wrappingIndent: "200px",
    value: StoryTellingEditor.markdown,
    fontSize: "14px",
  });
}

/**
 * Function to initialise monaco editor
 *
 * @param {Object} editorContainer - editor container dom
 * @param {Element} resizeHandle - Dom element
 * @param {Element} StoryTellingEditor - Dom element
 */
export default function initEditor(
  editorContainer,
  resizeHandle,
  StoryTellingEditor
) {
  editorContainer.addEventListener("mousedown", (e) =>
    handleEditorContainerMouseDown(e, editorContainer, StoryTellingEditor)
  );

  window.addEventListener("mousemove", (e) =>
    handleMouseMove(e, editorContainer, StoryTellingEditor)
  );

  window.addEventListener("mouseup", () => handleMouseUp(StoryTellingEditor));

  /*
   * TODO: Need to look into bug why not working as expected.
   */
  // resizeHandle.addEventListener("mousedown", (e) =>
  //   handleResizeHandleMouseDown(e, StoryTellingEditor),
  // );

  return createMonacoEditor(StoryTellingEditor);
}
