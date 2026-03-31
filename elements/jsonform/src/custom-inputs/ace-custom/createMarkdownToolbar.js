/**
 * Creates a markdown toolbar for the ace editor instance.
 * @param {any} editorInstance - The ace editor instance wrapper
 */
export const createMarkdownToolbar = (editorInstance) => {
  const aceInstance = /** @type {any} */ (editorInstance).ace_editor_instance;
  if (!aceInstance) {
    return;
  }

  // Check if toolbar already exists to prevent duplicate insertion
  if (
    editorInstance.ace_container.previousElementSibling?.classList.contains(
      "markdown-toolbar",
    )
  ) {
    return;
  }
  const aceContainer = editorInstance.ace_container;
  const parent = aceContainer.parentNode;

  if (!parent) return;

  const toolbar = document.createElement("nav");
  toolbar.className =
    "surface-container-low no-round no-margin tiny-padding no-space markdown-toolbar";

  const insertText = (text, placeholder = "") => {
    const selected = aceInstance.getSelectedText();
    if (selected) {
      aceInstance.insert(text.replace("...", selected));
    } else {
      aceInstance.insert(text.replace("...", placeholder));
    }
    aceInstance.focus();
  };

  const headerOneIcon =
    "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z";
  const boldIcon =
    "M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z";
  const italicIcon = "M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z";
  const strikethroughIcon =
    "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z";
  const quoteIcon = "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z";
  const linkIcon =
    "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z";
  const imageIcon =
    "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z";
  const listIcon =
    "M7 5h14v2H7V5m0 6h14v2H7v-2m0 6h14v2H7v-2M4 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z";
  const numberedListIcon =
    "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z";

  const icon = (path) =>
    `<svg style="width:20px;height:20px" viewBox="0 0 24 24"><path fill="currentColor" d="${path}" /></svg>`;

  toolbar.innerHTML = `
      <button type="button" class="transparent no-round small" id="md-heading" title="Heading">
        <i class="small">${icon(headerOneIcon)}</i>
        <span class="tooltip">Heading</span>
      </button>
      <button type="button" class="transparent no-round small" id="md-bold" title="Bold">
        <i class="small">${icon(boldIcon)}</i>
        <span class="tooltip">Bold</span>
      </button>
      <button type="button" class="transparent no-round small" id="md-italic" title="Italic">
        <i class="small">${icon(italicIcon)}</i>
        <span class="tooltip">Italic</span>
      </button>
      <button type="button" class="transparent no-round small" id="md-strikethrough" title="Strikethrough">
        <i class="small">${icon(strikethroughIcon)}</i>
        <span class="tooltip">Strikethrough</span>
      </button>
      <button type="button" class="transparent no-round small" id="md-quote" title="Quote">
        <i class="small">${icon(quoteIcon)}</i>
        <span class="tooltip">Quote</span>
      </button>
      <button type="button" class="transparent no-round small" id="md-link" title="Link">
        <i class="small">${icon(linkIcon)}</i>
        <span class="tooltip">Link</span>
      </button>
      <button type="button" class="transparent no-round small" id="md-image" title="Image">
        <i class="small">${icon(imageIcon)}</i>
        <span class="tooltip">Image</span>
      </button>
      <button type="button" class="transparent no-round small" id="md-list" title="Bulleted List">
        <i class="small">${icon(listIcon)}</i>
        <span class="tooltip">Bulleted List</span>
      </button>
      <button type="button" class="transparent no-round small" id="md-numbered-list" title="Numbered List">
        <i class="small">${icon(numberedListIcon)}</i>
        <span class="tooltip">Numbered List</span>
      </button>
    `;

  /** @type {HTMLButtonElement} */ (
    toolbar.querySelector("#md-heading")
  ).onclick = () => insertText("# ...", "Heading");
  /** @type {HTMLButtonElement} */ (toolbar.querySelector("#md-bold")).onclick =
    () => insertText("**...**", "bold text");
  /** @type {HTMLButtonElement} */ (
    toolbar.querySelector("#md-italic")
  ).onclick = () => insertText("*...*", "italic text");
  /** @type {HTMLButtonElement} */ (
    toolbar.querySelector("#md-strikethrough")
  ).onclick = () => insertText("~~...~~", "strikethrough text");
  /** @type {HTMLButtonElement} */ (
    toolbar.querySelector("#md-quote")
  ).onclick = () => insertText("\n> ...", "quote block");
  /** @type {HTMLButtonElement} */ (toolbar.querySelector("#md-link")).onclick =
    () => insertText("[...](url)", "link text");
  /** @type {HTMLButtonElement} */ (
    toolbar.querySelector("#md-image")
  ).onclick = () => insertText("![...](url)", "image alt text");
  /** @type {HTMLButtonElement} */ (toolbar.querySelector("#md-list")).onclick =
    () => insertText("\n- ...", "list item");
  /** @type {HTMLButtonElement} */ (
    toolbar.querySelector("#md-numbered-list")
  ).onclick = () => insertText("\n1. ...", "list item");

  // Insert the toolbar before the ace editor container
  if (parent && parent.contains(aceContainer)) {
    parent.insertBefore(toolbar, aceContainer);
  }
};
