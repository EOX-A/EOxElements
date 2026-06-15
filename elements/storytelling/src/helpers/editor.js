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
 * Function to handle mouse move for dragging and resizing
 *
 * @param {{clientX: Number, clientY: Number}} e - Event for handle mouse move.
 * @param {Object} editorContainer - editor container dom
 * @param {StoryTellingEditor} StoryTellingEditor - Dom element
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

  if (StoryTellingEditor.dragging || StoryTellingEditor.resizing) {
    let dx = StoryTellingEditor.lastX - e.clientX;
    let dy = e.clientY - StoryTellingEditor.lastY;
    let { width, height, left, top } = editorContainer.getBoundingClientRect();

    if (StoryTellingEditor.resizing) {
      editorContainer.style.width = `${width + dx}px`;
      editorContainer.style.height = `${height + dy}px`;
      editorContainer.style.top = `${top}px`;
    }
    editorContainer.style.left = `${left - dx}px`;

    StoryTellingEditor.lastX = e.clientX;
    StoryTellingEditor.lastY = e.clientY;
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

/**
 * Helper to serialize an attribute value for Markdown HTML comments.
 * @param {string} key
 * @param {any} value
 * @returns {string}
 */
function serializeAttribute(key, value) {
  if (typeof value === "object") {
    return `${key}='${JSON.stringify(value)}'`;
  } else if (typeof value === "string") {
    return `${key}="${value}"`;
  } else {
    return `${key}=${value}`;
  }
}

/**
 * Generate Markdown from blocks JSON structure.
 * @param {Array<any>} blocks
 * @returns {string}
 */
export function blocksToMarkdown(blocks) {
  const markdownParts = [];

  const rootBlock = blocks.find(
    (b) => b.id === "storytelling-root" || b.component === "EOxStorytelling",
  );
  if (rootBlock) {
    const configLines = [];
    if (rootBlock.showNav !== undefined) {
      configLines.push(`nav: ${rootBlock.showNav}`);
    }
    if (configLines.length > 0) {
      markdownParts.push(`---\n${configLines.join("\n")}\n---`);
    }
  }

  const topLevelIds = rootBlock && rootBlock.children ? rootBlock.children : [];
  let topLevelBlocks = [];
  if (topLevelIds.length > 0) {
    topLevelBlocks = topLevelIds
      .map((id) => blocks.find((b) => b.id === id))
      .filter(Boolean);
  } else {
    topLevelBlocks = blocks.filter(
      (b) =>
        b.component !== "EOxStorytelling" &&
        b.id !== "storytelling-root" &&
        b.component !== "EOxStorytellingTourStep",
    );
  }

  for (const block of topLevelBlocks) {
    if (block.component === "EOxStorytellingHero") {
      const attrs = [];
      if (block.id) attrs.push(`id="${block.id}"`);
      if (block.as) attrs.push(`as="${block.as}"`);
      attrs.push(`mode="hero"`);
      if (block.background) attrs.push(`src="${block.background}"`);
      if (block.position) attrs.push(`position="${block.position}"`);

      const title = block.title || "";
      const description = block.description || "";

      const heading = `# ${title} <!--{ ${attrs.join(" ")} }-->`;
      const descPart = description
        ? `${description} <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->`
        : "";

      markdownParts.push([heading, descPart].filter(Boolean).join("\n"));
    } else if (block.component === "EOxStorytellingText") {
      let mdContent = block.markdown || "";
      const headingMatch = mdContent.match(/^(\s*#+)\s+([^\n<!]+)(.*)$/m);
      if (headingMatch) {
        const fullMatch = headingMatch[0];
        const headingPrefix = headingMatch[1];
        const headingTitle = headingMatch[2].trim();
        const existingComment = headingMatch[3].trim();

        let newComment = "";
        if (
          existingComment.startsWith("<!--") &&
          existingComment.endsWith("-->")
        ) {
          const innerContent = existingComment
            .substring(4, existingComment.length - 3)
            .trim();
          const braceMatch = innerContent.match(/^\{(.*)\}$/);
          let innerAttrs = braceMatch ? braceMatch[1].trim() : innerContent;
          if (!innerAttrs.includes(`id=`)) {
            innerAttrs = `id="${block.id}" ${innerAttrs}`;
          }
          newComment = `<!--{ ${innerAttrs.trim()} }-->`;
        } else {
          newComment = `<!--{ id="${block.id}" }-->`;
        }

        mdContent = mdContent.replace(
          fullMatch,
          `${headingPrefix} ${headingTitle} ${newComment}`,
        );
      } else {
        const headingTitle =
          block.title ||
          (block.id && !block.id.startsWith("text-") ? block.id : "");
        const headingLine = headingTitle
          ? `## ${headingTitle} <!--{ id="${block.id}" }-->`
          : `## <!--{ id="${block.id}" }-->`;
        mdContent = headingLine + "\n" + mdContent;
      }
      markdownParts.push(mdContent.trim());
    } else if (block.component === "EOxStorytellingTour") {
      const attrs = [];
      if (block.id) attrs.push(`id="${block.id}"`);
      const asType = block.as || "eox-map";
      attrs.push(`as="${asType}"`);
      attrs.push(`mode="tour"`);
      if (block.position) attrs.push(`position="${block.position}"`);

      const title = block.title || "Tour section";
      const heading = `## ${title} <!--{ ${attrs.join(" ")} }-->`;

      const stepParts = [];
      const stepIds = block.children || [];
      const steps = stepIds
        .map((id) => blocks.find((b) => b.id === id))
        .filter(Boolean);

      for (const step of steps) {
        const stepAttrs = [];
        if (step.id) stepAttrs.push(`id="${step.id}"`);

        const config = step.config || {};
        for (const [key, value] of Object.entries(config)) {
          stepAttrs.push(serializeAttribute(key, value));
        }

        const stepHeading = `### <!--{ ${stepAttrs.join(" ")} }-->`;
        const stepTitle = step.title ? `#### ${step.title}` : "";
        const stepDesc = step.description || "";

        stepParts.push(
          [stepHeading, stepTitle, stepDesc].filter(Boolean).join("\n"),
        );
      }

      markdownParts.push([heading, ...stepParts].join("\n\n"));
    }
  }

  return markdownParts.join("\n\n");
}

/**
 * CLIENT-SIDE Markdown-to-Blocks JSON Compiler
 * Parses annotative markdown back into correct A2UI storytelling blocks instantly.
 * @param {string} markdown
 * @returns {Array<any>}
 */
export function markdownToBlocks(markdown) {
  const blocks = [];
  // Normalize Windows line endings and trim surrounding padding
  let normalized = markdown.replace(/\r\n/g, "\n").trim();

  // Strip YAML frontmatter at the very start of the file
  normalized = normalized.replace(/^---\n[\s\S]*?\n---\n?/, "");

  const lines = normalized.split("\n");

  let currentBlock = null;
  let currentStep = null;
  let textBuffer = [];
  let blockCounter = 0;

  function parsePropsFromComment(commentStr) {
    if (!commentStr) return {};
    const props = {};
    const regex =
      /([a-zA-Z0-9_-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\{[\s\S]*?\})|(\[[\s\S]*?\])|([^\s'"]+))/g;
    let match;
    while ((match = regex.exec(commentStr)) !== null) {
      const key = match[1];
      const valStr = match[2] || match[3] || match[4] || match[5] || match[6];
      try {
        if (
          (valStr.startsWith("{") && valStr.endsWith("}")) ||
          (valStr.startsWith("[") && valStr.endsWith("]")) ||
          valStr === "true" ||
          valStr === "false" ||
          !isNaN(/** @type {any} */ (valStr))
        ) {
          props[key] = JSON.parse(valStr);
        } else {
          props[key] = valStr;
        }
      } catch (_) {
        props[key] = valStr;
      }
    }
    return props;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Robust header matching allowing spaces inside <!-- { ... } -->
    const headerMatch = line.match(
      /^(\s*)(#+)\s+([^\n<!]*?)(?:\s*<!--\s*\{\s*([\s\S]*?)\s*\}\s*-->)?\s*$/,
    );

    if (headerMatch) {
      const level = headerMatch[2].length;
      const title = headerMatch[3].trim();
      const commentStr = headerMatch[4] ? headerMatch[4].trim() : "";
      const props = parsePropsFromComment(commentStr);

      const isHero =
        level === 1 &&
        (props.mode === "hero" || ["img", "video"].includes(props.as));
      const isTour = level === 2 && props.mode === "tour";
      const isText = level === 2 && props.mode !== "tour";
      const isStep =
        level === 3 &&
        currentBlock &&
        currentBlock.component === "EOxStorytellingTour";
      const isStepTitle = level === 4 && currentStep;

      const isBlockBoundary = isHero || isTour || isText || isStep;

      if (isBlockBoundary) {
        // Flush previous block contents
        if (currentBlock && currentBlock.component === "EOxStorytellingText") {
          currentBlock.markdown = textBuffer.join("\n").trim();
        } else if (currentStep) {
          currentStep.description = textBuffer.join("\n").trim();
        } else if (
          currentBlock &&
          currentBlock.component === "EOxStorytellingHero"
        ) {
          currentBlock.description = textBuffer.join("\n").trim();
        }
        textBuffer = [];

        if (isHero) {
          currentBlock = {
            id: props.id || `welcome`,
            component: "EOxStorytellingHero",
            title: title,
            background: props.src || "",
            as: props.as || "img",
            position: props.position || "center",
            description: "",
          };
          blocks.push(currentBlock);
          currentStep = null;
        } else if (isTour) {
          currentBlock = {
            id: props.id || `tour-${blockCounter++}`,
            component: "EOxStorytellingTour",
            title: title,
            as: props.as || "eox-map",
            position: props.position || "left",
            children: [],
          };
          blocks.push(currentBlock);
          currentStep = null;
        } else if (isText) {
          currentBlock = {
            id: props.id || `text-${blockCounter++}`,
            component: "EOxStorytellingText",
            markdown: "",
          };
          let commentSuffix = commentStr ? ` <!--{ ${commentStr} }-->` : "";
          if (title || commentStr) {
            textBuffer.push(`## ${title}${commentSuffix}`);
          }
          blocks.push(currentBlock);
          currentStep = null;
        } else if (isStep) {
          const config = {};
          for (const [k, v] of Object.entries(props)) {
            if (k !== "id") config[k] = v;
          }

          currentStep = {
            id: props.id || `step-${blockCounter++}`,
            component: "EOxStorytellingTourStep",
            title: "",
            description: "",
            config: config,
          };
          blocks.push(currentStep);
          currentBlock.children.push(currentStep.id);
        }
      } else if (isStepTitle) {
        currentStep.title = title;
      } else {
        // Not a block boundary, so it's just standard markdown heading text inside the current block/step
        if (!currentBlock && !currentStep) {
          currentBlock = {
            id: `text-${blockCounter++}`,
            component: "EOxStorytellingText",
            markdown: "",
          };
          blocks.push(currentBlock);
        }
        let commentSuffix = commentStr ? ` <!--{ ${commentStr} }-->` : "";
        textBuffer.push(`${"#".repeat(level)} ${title}${commentSuffix}`);
      }
    } else {
      // Accumulate text, auto-initializing a default text block if leading content occurs before first heading
      if (line.trim() !== "") {
        if (!currentBlock && !currentStep) {
          currentBlock = {
            id: `text-${blockCounter++}`,
            component: "EOxStorytellingText",
            markdown: "",
          };
          blocks.push(currentBlock);
        }
      }
      if (currentBlock || currentStep) {
        textBuffer.push(line);
      }
    }
  }

  if (currentBlock && currentBlock.component === "EOxStorytellingText") {
    currentBlock.markdown = textBuffer.join("\n").trim();
  } else if (currentStep) {
    currentStep.description = textBuffer.join("\n").trim();
  } else if (currentBlock && currentBlock.component === "EOxStorytellingHero") {
    currentBlock.description = textBuffer.join("\n").trim();
  }

  return blocks;
}
