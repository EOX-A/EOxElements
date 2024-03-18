export function renderHtmlString(htmlString) {
  // Parse the HTML string into a document
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // Process child nodes of the document body
  const dom = Array.from(doc.body.childNodes).map(processNode);

  console.log(dom);
}

/**
 * Process a DOM node, handling specific node types.
 */
function processNode(node) {
  console.log(node.classList.contains("section-custom"));
  console.log(node.attributes);
  if (
    node.nodeName === "P" ||
    node.nodeName === "DIV" ||
    node.nodeName === "MAIN"
  ) {
    // Process custom elements within child nodes
    // const childElements = node.querySelectorAll("*");
    // childElements.forEach((element) => {
    //   if (/^(eox-|story-telling-)/.test(element.tagName.toLowerCase())) {
    //     processCustomElement(element);
    //   }
    // });
  }
  return node;
}
