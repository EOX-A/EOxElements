import { EVENT_REQ_MODES } from "../enums/index.js";

let observers = [];

/**
 * Converts an HTML string into DOM nodes and processes each node.
 *
 * @param {string} htmlString - The HTML string to be rendered.
 * @param {Object} sections - List of sections meta
 * @param {import("lit").LitElement} that - The LitElement instance.
 * @returns {Element[]} An array of processed DOM nodes.
 */
export function renderHtmlString(htmlString, sections, that) {
  // Parse the HTML string into a document
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // Disconnecting old observers to create new observer
  observers.forEach((observer) => observer?.disconnect());
  observers = [];

  // Creating new scroll observer
  Object.keys(sections).forEach((sectionId) => {
    const section = sections[sectionId];
    if (EVENT_REQ_MODES.includes(section.mode) && section.steps) {
      const parent = that.shadowRoot || that;
      const elementSelector = `${section.as}#${section.id}`;

      // Creating new scroll observer and assign new value for attribute of element
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          const index = Number(entry.target.getAttribute("key"));

          if (intersecting)
            assignNewAttrValue(section, index, elementSelector, parent);
        });
      });

      // Create scroll observer with a small delay
      setTimeout(() => {
        const contentParent = parent.querySelector(`#${sectionId}`);
        if (!contentParent) return;

        const contentChildren = parent.querySelectorAll(
          `#${sectionId} section-step`
        );

        contentChildren.forEach((dom, key) => {
          dom.setAttribute("key", `${key}`);
          observer.observe(dom);
        });

        observers.push(observer);

        assignNewAttrValue(section, 0, elementSelector, parent);
      }, 100);
    }
  });

  // Process child nodes of the document body
  return Array.from(doc.body.childNodes).map(processNode);
}

/**
 * Assign new value for attribute of element
 *
 * @param {Object} section - section meta
 * @param {Number} index - current section index
 * @param {String} elementSelector - sector string for element
 * @param {import("lit").LitElement} parent - The LitElement instance.
 */
function assignNewAttrValue(section, index, elementSelector, parent) {
  const element = parent.querySelector(elementSelector);

  Object.keys(section.steps[index]).forEach((attr) => {
    element[attr] = section.steps[index][attr];
  });
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
 * @param {Element|String} element - The DOM element containing the attribute or element with actual value.
 * @param {string} attributeName - The name of the attribute to convert.
 * @returns {string|number|boolean|array|object} The attribute value converted to its detected type.
 */
export function convertAttributeValueBasedOnItsType(
  element,
  attributeName = undefined
) {
  const attributeValue = attributeName
    ? element.getAttribute(attributeName)
    : element;
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

/**
 * Parse Nav and generate a new Element Node
 *
 * @param {Array<Element>} html - List of html elements
 * @param {Array} nav - List of nav elements
 * @returns {Element[]} An array of processed DOM nodes after adding navigation.
 */
export function parseNav(html, nav) {
  const parser = new DOMParser();
  let navIndex = 0;

  const navHtml = `
    <div class="navigation">
      <div class="container">
        <ul>
          ${nav.map(
            ({ id, title }) =>
              `<li class="nav-${id}"><a href="#${id}">${title}</a></li>`
          )}
        </ul>
      </div>
    </div>
  `;
  const navDOM = parser.parseFromString(navHtml, "text/html").body.firstChild;

  if (html[0].classList.contains("hero")) navIndex = 1;
  html.splice(navIndex, 0, navDOM);

  return html;
}
