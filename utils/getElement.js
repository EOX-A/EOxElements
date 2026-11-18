/**
 * Return a DOM element from either a query selector or from directly passing a DOM element.
 * Supports finding elements inside shadow DOMs by searching through all elements in the document
 *
 * @param {string | HTMLElement | undefined} stringOrElement query selector string or DOM element
 * @returns {HTMLElement | undefined} the DOM element
 */
export const getElement = (stringOrElement) => {
  let domElement;
  if (typeof stringOrElement === "string") {
    /**
     * Recursively searches for an element inside nested shadow roots
     *
     * @param {Document | ShadowRoot} root - The root to search inside
     * @param {string} selector - The CSS selector
     * @returns {HTMLElement | null} - The found element or null
     */
    const findElementDeep = (root, selector) => {
      let el = root.querySelector(selector);
      if (el) return /** @type {HTMLElement} */ (el);

      const children = root.querySelectorAll("*");
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.shadowRoot) {
          el = findElementDeep(child.shadowRoot, selector);
          if (el) return /** @type {HTMLElement} */ (el);
        }
      }
      return null;
    };

    domElement = findElementDeep(document, stringOrElement) || undefined;
  } else {
    domElement = stringOrElement;
  }
  return domElement;
};
