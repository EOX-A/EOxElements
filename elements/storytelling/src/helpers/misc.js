/**
 * Create anchor click event and scroll into view when navigation anchor clicked
 *
 * @param {import("lit").LitElement} that - The LitElement instance.
 * @param {String} selector - element selector string
 */
export function scrollAnchorClickEvent(that, selector) {
  that.shadowRoot.querySelectorAll(selector).forEach((doc) => {
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
