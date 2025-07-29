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
     * Get an element using querySelector from a given root
     *
     * @param {Document | ShadowRoot} root the root document or shadow root to search in
     * @returns {HTMLElement | null} the found DOM element or null if not found
     */
    const getElementViaQuerySelector = (root) => {
      return /** @type {HTMLElement} */ (root.querySelector(stringOrElement));
    };

    // Try to get element in document
    domElement = getElementViaQuerySelector(document);

    // If the element is not found, search in shadow roots
    // This is useful for elements that are inside shadow DOMs
    // and not directly accessible via document.querySelector
    if (!domElement) {
      const allElements = document.querySelectorAll("html *");
      for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].shadowRoot) {
          domElement = getElementViaQuerySelector(allElements[i].shadowRoot);
          if (domElement) {
            break;
          }
        }
      }
    }
  } else {
    domElement = stringOrElement;
  }
  return domElement;
};
