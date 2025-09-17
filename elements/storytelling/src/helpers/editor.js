/**
 * @typedef {import("../components/editor").StoryTellingEditor} StoryTellingEditor
 */

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
 * @param {StoryTellingEditor} StoryTellingEditor - Dom element
 */
function handleEditorContainerMouseDown(
  e,
  editorContainer,
  StoryTellingEditor,
) {
  if (e.target === editorContainer) {
    disableTextSelection();
    StoryTellingEditor.dragging = true;
    StoryTellingEditor.lastX = e.clientX;
    StoryTellingEditor.lastY = e.clientY;
  }
}

/**
 * Function to check if drag or resize is required
 *
 * @param {Object} editorRect - Bounding rectangle of editor
 * @param {Object} mainRect - Bounding rectangle of main container
 * @return {{visibilityPercentage: Number, visibleSides: Array}}
 */
function calculateVisibilityPercentage(editorRect, mainRect) {
  const visibleMainTop = Math.max(mainRect.top, 0);
  const visibleMainLeft = Math.max(mainRect.left, 0);
  const visibleMainRight = Math.min(
    mainRect.left + mainRect.width,
    window.innerWidth,
  );
  const visibleMainBottom = Math.min(
    mainRect.top + mainRect.height,
    window.innerHeight,
  );

  const visibleMainWidth = Math.max(0, visibleMainRight - visibleMainLeft);
  const visibleMainHeight = Math.max(0, visibleMainBottom - visibleMainTop);

  if (visibleMainWidth <= 0 || visibleMainHeight <= 0) {
    return { visibilityPercentage: 0, visibleSides: [] };
  }

  const editorLeft = editorRect.left;
  const editorTop = editorRect.top;
  const editorRight = editorRect.left + editorRect.width;
  const editorBottom = editorRect.top + editorRect.height;

  const intersectionLeft = Math.max(editorLeft, visibleMainLeft);
  const intersectionTop = Math.max(editorTop, visibleMainTop);
  const intersectionRight = Math.min(editorRight, visibleMainRight);
  const intersectionBottom = Math.min(editorBottom, visibleMainBottom);

  if (
    intersectionLeft >= intersectionRight ||
    intersectionTop >= intersectionBottom
  ) {
    return { visibilityPercentage: 0, visibleSides: [] };
  }

  const intersectionWidth = intersectionRight - intersectionLeft;
  const intersectionHeight = intersectionBottom - intersectionTop;
  const intersectionArea = intersectionWidth * intersectionHeight;

  const editorArea = editorRect.width * editorRect.height;

  if (editorArea <= 0) {
    return { visibilityPercentage: 0, visibleSides: [] };
  }

  const visibilityPercentage = (intersectionArea / editorArea) * 100;

  const visibleSides = ["top", "bottom", "left", "right"];

  if (visibilityPercentage <= 10) {
    if (!(editorTop >= visibleMainTop && editorTop <= visibleMainBottom)) {
      visibleSides.splice(visibleSides.indexOf("top"), 1);
    }
    if (
      !(editorBottom >= visibleMainTop && editorBottom <= visibleMainBottom)
    ) {
      visibleSides.splice(visibleSides.indexOf("bottom"), 1);
    }
    if (!(editorLeft >= visibleMainLeft && editorLeft <= visibleMainRight)) {
      visibleSides.splice(visibleSides.indexOf("left"), 1);
    }
    if (!(editorRight >= visibleMainLeft && editorRight <= visibleMainRight)) {
      visibleSides.splice(visibleSides.indexOf("right"), 1);
    }
  }

  return { visibilityPercentage: visibilityPercentage, visibleSides };
}

/**
 * Function to check if drag or resize is required
 *
 * @param {Number} visibilityPercentage - Visibility percentage of editor within main container
 * @param {Array} visibleSides - Sides of editor that are visible
 * @param {Number} dy - Difference in y-coordinate
 * @param {Number} dx - Difference in x-coordinate
 * @return {{dragDY: Boolean, dragDX: Boolean, resizeDY: Boolean, resizeDX: Boolean}}
 */
function dragResizeRequired(visibilityPercentage, visibleSides, dy, dx) {
  let dragDY = false;
  let dragDX = false;
  let resizeDY = false;
  let resizeDX = false;

  if (visibilityPercentage <= 10) {
    if (visibleSides.includes("top") && dy < 0) dragDY = true;
    if (visibleSides.includes("bottom") && dy > 0) dragDY = true;
    if (visibleSides.includes("left") && dx < 0) dragDX = true;
    if (visibleSides.includes("right") && dx > 0) dragDX = true;
  } else {
    dragDY = true;
    dragDX = true;
  }

  if (visibilityPercentage <= 15) {
    if (visibleSides.includes("top") && dy > 0) resizeDY = true;
    if (visibleSides.includes("bottom") && dy < 0) resizeDY = true;
    if (visibleSides.includes("left") && dx > 0) resizeDX = true;
    if (visibleSides.includes("right") && dx < 0) resizeDX = true;
  } else {
    resizeDY = true;
    resizeDX = true;
  }

  return { dragDY, dragDX, resizeDY, resizeDX };
}

/**
 * Function to handle mouse move for dragging and resizing
 *
 * @param {{clientX: Number, clientY: Number}} e - Event for handle mouse move.
 * @param {Object} editorContainer - editor container dom
 * @param {StoryTellingEditor} StoryTellingEditor - Dom element
 */
function handleMouseMove(e, editorContainer, StoryTellingEditor) {
  const storyTellingDivEle = StoryTellingEditor.closest(".story-telling");
  const storyTellingEleNode = /** @type {ShadowRoot} */ (
    storyTellingDivEle.getRootNode()
  );
  const storyTellingEle = storyTellingEleNode.host;

  const mainElement = storyTellingEle;
  const mainRect = mainElement.getBoundingClientRect();
  const editorRect = editorContainer.getBoundingClientRect();

  const { visibilityPercentage, visibleSides } = calculateVisibilityPercentage(
    editorRect,
    mainRect,
  );

  if (StoryTellingEditor.dragging) {
    let dx = e.clientX - StoryTellingEditor.lastX;
    let dy = e.clientY - StoryTellingEditor.lastY;

    let { top, left } = editorRect;

    const { dragDY, dragDX } = dragResizeRequired(
      visibilityPercentage,
      visibleSides,
      dy,
      dx,
    );

    if (dragDY) editorContainer.style.top = `${top + dy}px`;
    if (dragDX) editorContainer.style.left = `${left + dx}px`;
    if (dragDY) StoryTellingEditor.lastY = e.clientY;
    if (dragDX) StoryTellingEditor.lastX = e.clientX;
  }

  if (StoryTellingEditor.resizing) {
    let dx = StoryTellingEditor.lastX - e.clientX;
    let dy = e.clientY - StoryTellingEditor.lastY;
    let { width, height, left, top } = editorContainer.getBoundingClientRect();

    const { resizeDY, resizeDX } = dragResizeRequired(
      visibilityPercentage,
      visibleSides,
      dy,
      dx,
    );

    if (StoryTellingEditor.resizing) {
      if (resizeDX) editorContainer.style.width = `${width + dx}px`;
      if (resizeDY) editorContainer.style.height = `${height + dy}px`;
      editorContainer.style.top = `${top}px`;
    }
    if (resizeDX) editorContainer.style.left = `${left - dx}px`;
    if (resizeDX) StoryTellingEditor.lastX = e.clientX;
    if (resizeDY) StoryTellingEditor.lastY = e.clientY;
  }
}

/**
 * Function to handle mouse up and enable text selection
 *
 * @param {StoryTellingEditor} StoryTellingEditor - Dom element
 */
function handleMouseUp(StoryTellingEditor) {
  enableTextSelection();
  StoryTellingEditor.dragging = false;
  StoryTellingEditor.resizing = false;
}

/**
 * Function to handle resize handle mouse down
 *
 * @param {Event & {clientX: Number, clientY: Number}} e - Event for handle mouse move.
 * @param {StoryTellingEditor} StoryTellingEditor - Dom element
 */
function handleResizeHandleMouseDown(e, StoryTellingEditor) {
  e.stopPropagation();
  disableTextSelection();
  StoryTellingEditor.resizing = true;
  StoryTellingEditor.lastX = e.clientX;
  StoryTellingEditor.lastY = e.clientY;
}

/**
 * Function to initialise monaco editor
 *
 * @param {Object} editorContainer - editor container dom
 * @param {Object} resizeHandle - Dom element
 * @param {StoryTellingEditor} StoryTellingEditor - Dom element
 */
export default async function initEditorEvents(
  editorContainer,
  resizeHandle,
  StoryTellingEditor,
) {
  editorContainer.addEventListener("mousedown", (e) =>
    handleEditorContainerMouseDown(e, editorContainer, StoryTellingEditor),
  );

  window.addEventListener("mousemove", (e) =>
    handleMouseMove(e, editorContainer, StoryTellingEditor),
  );

  window.addEventListener("mouseup", () => handleMouseUp(StoryTellingEditor));

  resizeHandle.addEventListener("mousedown", (e) =>
    handleResizeHandleMouseDown(e, StoryTellingEditor),
  );
}

/**
 * Function to position editor based on parent height
 *
 * @param {StoryTellingEditor} StoryTellingEditor - Dom element
 */
export function positionEditor(StoryTellingEditor) {
  const storyTellingContainer = document.querySelector("eox-storytelling");
  const { y } = storyTellingContainer.getBoundingClientRect();
  /**
   * @type {HTMLElement}
   */
  const editorWrapper = StoryTellingEditor.querySelector(".editor-wrapper");

  const pxToValue = (prop) => Number(prop.replace("px", ""));

  const editorWrapperStyle = window.getComputedStyle(editorWrapper);
  const bottomPos = pxToValue(editorWrapperStyle.bottom);
  const extraPadding = pxToValue(editorWrapperStyle.padding) * 2;
  const navHeight = editorWrapper.classList.contains("partial-height") ? 80 : 0;

  const editorHeight =
    window.innerHeight - y - bottomPos - extraPadding - navHeight;

  editorWrapper.style.height = `${editorHeight}px`;
}

/**
 * Function import md file into editor
 *
 * @param {Object} editor - The SimpleMDE instance
 */
export function importMdFile(editor) {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".md";
  fileInput.onchange = (e) => {
    const file = /** @type {HTMLInputElement} */ (e.target).files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      editor.value(content);
    };
    reader.readAsText(file);
  };
  fileInput.click();
}

/**
 * Function upload md file from editor
 *
 * @param {Object} editor - The SimpleMDE instance
 */
export function exportMdFile(editor) {
  const content = editor.value();
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = `${document.title}.md`;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Get indexes of sections with help of markdown array
 *
 * @param {Array} markdownArr - Current markdown array
 * @return {Array}
 */
export function getSectionIndexes(markdownArr) {
  const sectionIndexes = [];

  // Check and get current section index from markdown array
  markdownArr.forEach((line, index) => {
    if (line.startsWith("# ") || line.startsWith("## ")) {
      sectionIndexes.push(index);
    }
  });

  return sectionIndexes;
}

/**
 * Add custom section markdown based on insert position and updated field value
 *
 * @param {String} markdown - Current markdown
 * @param {Number} customSectionIndex - Section index where new section markdown will go
 * @param {String} newMarkdown - Custom section markdown which is to be inserted
 * @param {Object} fields - json-form fields which is used to insert custom value to markdown
 * @param {Boolean} updatedFieldValues - State whether there is updated field values or not
 * @param {import("../main.js").EOxStoryTelling} EOxStoryTelling - EOxStoryTelling instance.
 */
export function addCustomSection(
  markdown,
  customSectionIndex,
  newMarkdown,
  fields,
  updatedFieldValues,
  EOxStoryTelling,
) {
  const markdownArr = markdown.split("\n");

  const parent = EOxStoryTelling.shadowRoot || EOxStoryTelling;
  /**
   * @type {StoryTellingEditor}
   */
  const editorDOM = parent.querySelector("eox-storytelling-editor");

  // Check and get current section index from markdown array
  const sectionIndexes = getSectionIndexes(markdownArr);

  // Identify insert pos
  const insertPos = sectionIndexes[customSectionIndex];

  if (fields) {
    // Get updated json form field value and replace it with literals
    if (updatedFieldValues) {
      /**
       * @type import("@eox/jsonform").EOxJSONForm
       */
      const jsonForm = parent.querySelector(
        "eox-jsonform#storytelling-editor-fields",
      );
      const updatedFields = jsonForm.editor.getValue();
      Object.keys(updatedFields).forEach((key) => {
        const value = updatedFields[key];
        newMarkdown = newMarkdown.replaceAll(`{${key}}`, value);
      });
      EOxStoryTelling.selectedCustomElement = null;
    } else {
      EOxStoryTelling.selectedCustomElement = {
        markdown: newMarkdown,
        fields: fields,
      };
      EOxStoryTelling.requestUpdate();
      return;
    }
  }

  // Insert new custom section markdown
  if (insertPos >= 0) markdownArr.splice(insertPos, 0, newMarkdown);
  else markdownArr.push(newMarkdown);

  editorDOM.editor.editor.editors["root.Story"].setValue(
    markdownArr.join("\n"),
  );

  setTimeout(() => {
    /**
     * @type {HTMLElement}
     */
    const updatedDom = parent.querySelector(
      `div[data-section="${customSectionIndex + 1}"]`,
    );
    if (updatedDom) window.scrollTo(0, updatedDom.offsetTop);
  }, 200);

  EOxStoryTelling.addCustomSectionIndex = -1;
  EOxStoryTelling.requestUpdate();
}

/**
 * Generate auto save functionality when markdown changes
 *
 * @param {Element} StoryTellingEditor - Dom element
 * @param {String | null} storyId - ID of story
 * @param {{codemirror, value}} easyMDEInstance - Simple MDE instance
 */
export function generateAutoSave(StoryTellingEditor, storyId, easyMDEInstance) {
  let timeOutId = null;

  easyMDEInstance?.codemirror.on("change", function () {
    /**
     * @type {HTMLElement}
     */
    const saveEle = StoryTellingEditor.querySelector(".editor-saver");
    saveEle.innerText = "Auto Saving...";
    if (timeOutId) clearTimeout(timeOutId);

    timeOutId = setTimeout(() => {
      saveEle.innerText = "Saved";
      const existingMarkdownObj = JSON.parse(
        localStorage.getItem("markdown") || "{}",
      );

      localStorage.setItem(
        "markdown",
        JSON.stringify({
          ...existingMarkdownObj,
          [storyId || "default"]: easyMDEInstance.value(),
        }),
      );
      timeOutId = null;
    }, 2500);
  });
}

/**
 * Prevent editor outside scrolling
 *
 * @param {StoryTellingEditor} StoryTellingEditor - Dom element
 */
export function preventEditorOutsideScroll(StoryTellingEditor) {
  (StoryTellingEditor.shadowRoot || StoryTellingEditor)
    .querySelector(".CodeMirror-scroll")
    ?.addEventListener(
      "wheel",
      function (event) {
        const deltaY = /**@type {WheelEvent}*/ (event).deltaY;
        const contentHeight =
          StoryTellingEditor.querySelector(".CodeMirror-sizer").scrollHeight; // Total scrollable content height
        const visibleHeight =
          StoryTellingEditor.querySelector(".CodeMirror-scroll").clientHeight; // Visible portion of the textarea
        if (
          (StoryTellingEditor.querySelector(".CodeMirror-scroll").scrollTop <=
            0 &&
            deltaY < 0) ||
          (StoryTellingEditor.querySelector(".CodeMirror-scroll").scrollTop +
            visibleHeight >=
            contentHeight &&
            deltaY > 0)
        )
          event.preventDefault(); // Prevent scrolling
      },
      { passive: false },
    );
}

/**
 * Init saved markdown if it is present
 *
 * @param {import("../main.js").EOxStoryTelling} EOxStoryTelling - EOxStoryTelling instance.
 */
export function initSavedMarkdown(EOxStoryTelling) {
  if (EOxStoryTelling.showEditor !== undefined) {
    let existingMarkdownObj = JSON.parse(
      localStorage.getItem("markdown") || "{}",
    );
    const storyId = EOxStoryTelling.id || "default";
    const prevMarkdown = existingMarkdownObj[storyId];

    // Check previous markdown exist and not similar to new one
    if (prevMarkdown && prevMarkdown !== EOxStoryTelling.markdown) {
      // Prompt whether to recover previous markdown
      const updatePrevMarkdown = confirm(
        "Recover your Story from the last time you edited?",
      );

      // update markdown if previous markdown to be recovered, otherwise just delete the previous one
      if (updatePrevMarkdown) EOxStoryTelling.markdown = prevMarkdown;
      else {
        delete existingMarkdownObj[storyId];
        localStorage.setItem("markdown", JSON.stringify(existingMarkdownObj));
      }
    }
  }
}

/**
 * Run when editor is initialised with all it's instance values
 *
 * @param {StoryTellingEditor} StoryTellingEditor - Dom element
 */
export function runWhenEditorInitialised(StoryTellingEditor) {
  if (StoryTellingEditor.editor.editor?.editors?.["root.Story"]) {
    const easyMDEInstance =
      StoryTellingEditor.editor.editor.editors["root.Story"].simplemde_instance;

    if (!StoryTellingEditor.disableAutosave) {
      generateAutoSave(
        StoryTellingEditor,
        StoryTellingEditor.storyId,
        easyMDEInstance,
      );
    } else {
      /**
       * @type {HTMLElement}
       */
      const saveEle = StoryTellingEditor.querySelector(".editor-saver");
      saveEle.innerText = "";
    }
    preventEditorOutsideScroll(StoryTellingEditor);
  } else {
    setTimeout(() => runWhenEditorInitialised(StoryTellingEditor), 100);
  }
}

/**
 * Update initial editor visibility
 *
 * @param {import("../components/editor.js").StoryTellingEditor} StoryTellingEditor - Dom element
 */
export function updateEditorInitVisibility(StoryTellingEditor) {
  const wrapper =
    StoryTellingEditor.renderRoot.querySelector(".editor-wrapper");
  wrapper.classList.add("editor-opacity-none");

  if (
    StoryTellingEditor.editor &&
    StoryTellingEditor.editor.editor &&
    StoryTellingEditor.editor.editor.ready &&
    StoryTellingEditor.editor.editor?.editors["root.Story"].simplemde_instance
  )
    /** @type {HTMLElement}*/ (
      StoryTellingEditor.querySelector(".switch input")
    ).click();
  else setTimeout(() => updateEditorInitVisibility(StoryTellingEditor), 100);
}
