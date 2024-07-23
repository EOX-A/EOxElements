/**
 * Return a DOM element from either a query selector or from directly passing a DOM element
 *
 * @param {string | HTMLElement | undefined} stringOrElement query selector string or DOM element
 * @returns {HTMLElement | undefined} the DOM element
 */
export const getElement = (stringOrElement) => {
  let domElement;
  if (typeof stringOrElement === "string") {
    domElement = document.querySelector(stringOrElement);
  } else {
    domElement = stringOrElement;
  }
  return domElement;
};
