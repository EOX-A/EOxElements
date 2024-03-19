/**
 * Converts an HTML string into DOM nodes and processes each node.
 *
 * @param {string} htmlString - The HTML string to be rendered.
 * @returns {Element[]} An array of processed DOM nodes.
 */
export function renderHtmlString(htmlString) {
  // Parse the HTML string into a document
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // Process child nodes of the document body
  return Array.from(doc.body.childNodes).map(processNode);
}

/**
 * Processes a DOM node by potentially modifying its attributes value based on it's datatype
 *
 * @param {Element} node - The DOM node to process.
 * @returns {Element} The processed DOM node.
 */
function processNode(node) {
  if (
    node.nodeType === Node.ELEMENT_NODE &&
    node.classList.contains("section-custom")
  ) {
    const childElements = node.querySelectorAll("*");
    childElements.forEach((element) => {
      if (/^[a-z]+(-[a-z0-9]+)*$/.test(element.tagName.toLowerCase())) {
        Array.from(element.attributes).forEach(
          // Update the attribute with its converted value
          (attr) =>
            (element[attr.name] = convertAttributeValueBasedOnItsType(
              element,
              attr.name
            ))
        );
      }
    });
  }
  return node;
}

/**
 * Converts an attribute value of a DOM element into its detected type and returns the converted value.
 *
 * @param {Element} element - The DOM element containing the attribute.
 * @param {string} attributeName - The name of the attribute to convert.
 * @returns {string|number|boolean|array|object} The attribute value converted to its detected type.
 */
function convertAttributeValueBasedOnItsType(element, attributeName) {
  const attributeValue = element.getAttribute(attributeName);
  let convertedValue;

  try {
    convertedValue = JSON.parse(attributeValue);
  } catch (e) {
    if (!isNaN(attributeValue) && attributeValue.trim() !== "") {
      convertedValue = Number(attributeValue);
    } else if (attributeValue === "true") {
      convertedValue = true;
    } else if (attributeValue === "false") {
      convertedValue = false;
    } else {
      convertedValue = attributeValue;
    }
  }

  return convertedValue;
}
