/**
 * Create anchor click event and scroll into view when navigation anchor clicked
 *
 * @param {import("lit").LitElement} that - The LitElement instance.
 * @param {String} selector - element selector string
 */
export function scrollAnchorClickEvent(that, selector) {
  (that.shadowRoot || that).querySelectorAll(selector).forEach((doc) => {
    doc.addEventListener("click", (e) => {
      e.preventDefault();
      window.parent.location.hash = e.target.hash.replace("#", "");
      scrollIntoView(that);
    });
  });
}

/**
 * Scroll Into View if hash and element with same `id` is present.
 *
 * @param {import("lit").LitElement} that - The LitElement instance.
 */
export function scrollIntoView(that) {
  const hash = window.parent.location.hash;
  const element = hash ? that.shadowRoot.querySelector(hash) : null;
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

/**
 * Generate custom element handling config.
 *
 * @param {import("markdown-it").default} md - Markdown-It instances
 * @return {{tagNameCheck: String, attributeNameCheck: String, allowCustomizedBuiltInElements: Boolean}}
 */
export function getCustomEleHandling(md) {
  const tagNameCheck = (tagName) =>
    tagName.match(new RegExp(/^[a-z]+(-[a-z0-9]+)*$/));
  const attributeNameCheck = (attr) =>
    attr.match(new RegExp(md.attrs.keys.join("|")));

  return {
    tagNameCheck,
    attributeNameCheck,
    allowCustomizedBuiltInElements: true,
  };
}

/**
 * Add lightbox external library CSS
 */
export function addLightBoxScript() {
  const style = document.createElement("style");
  style.innerHTML = `
      @import url("https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css");
    `;
  document.body.appendChild(style);
}
