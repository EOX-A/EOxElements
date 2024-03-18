export function renderHtmlString(htmlString) {
  // Parse the HTML string into a document
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // Process child nodes of the document body
  const dom = Array.from(doc.body.childNodes).map(processNode);

  console.log(dom);
  return dom;
}

/**
 * Process a DOM node, handling specific node types.
 */
function processNode(node) {
  if (node.classList.contains("section-custom")) {
    for (let i = 0; i < node.attributes.length; i++) {
      const attr = node.attributes[i].name;
      node[attr] = convertAndSetAttributeValue(node, attr);
    }
  }
  return node;
}

function convertAndSetAttributeValue(element, attributeName) {
  const attributeValue = element.getAttribute(attributeName);
  let convertedValue;

  try {
    convertedValue = JSON.parse(attributeValue);
  } catch (e) {
    if (!isNaN(attributeValue) && attributeValue.trim() !== "")
      convertedValue = Number(attributeValue);
    else
      convertedValue =
        attributeValue === "true"
          ? true
          : attributeValue === "false"
          ? false
          : attributeValue;
  }

  return convertedValue;
}
