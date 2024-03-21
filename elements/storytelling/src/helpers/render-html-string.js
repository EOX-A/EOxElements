import { EVENT_REQ_MODES } from "../enums/index.js";

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

  Object.keys(sections).forEach((sectionId) => {
    const section = sections[sectionId];
    if (EVENT_REQ_MODES.includes(section.mode) && section.steps) {
      const parent = that.shadowRoot || that;
      const elementSelector = `${section.as}#${section.id}`;
      let currentSection = null;

      // Handle event function
      const handleScroll = () => {
        currentSection = updateEleBasedOnSectionChange(
          currentSection,
          getCurrentSection(section, sectionId, parent),
          section,
          elementSelector,
          parent
        );
      };

      // Create scroll handle with a wait time
      setTimeout(() => {
        const contentParent = parent.querySelector(`#${sectionId}`);
        if (!contentParent) return;

        contentParent.removeEventListener("wheel", handleScroll);
        const createScrollEvt = () =>
          contentParent.addEventListener("wheel", handleScroll);
        setTimeout(createScrollEvt, 200);

        assignNewAttrValue(section, 0, elementSelector, parent);
      }, 100);
    }
  });

  // Process child nodes of the document body
  return Array.from(doc.body.childNodes).map(processNode);
}

/**
 * get current section index and dom based on it's visibility
 *
 * @param {Object} section - section meta
 * @param {String} sectionId - section id based on scroll generation
 * @param {import("lit").LitElement} parent - The LitElement instance.
 * @returns {{ index: Number, dom: Node }} new current section based on scroll
 */
function getCurrentSection(section, sectionId, parent) {
  const contentChildren = parent.querySelectorAll(`#${sectionId} section-step`);

  const scrollY = window.scrollY;
  let newCurrentSection = null;

  contentChildren.forEach((content, key) => {
    const rect = content.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const sectionBottom = sectionTop + rect.height;

    const threshold =
      sectionTop + rect.height * (section.mode === "tour" ? -7 : -0.4);

    if (scrollY >= threshold && scrollY < sectionBottom) {
      newCurrentSection = {
        index: key,
        dom: content,
      };
    }
  });

  return newCurrentSection;
}

/**
 * Update elements attribute value based on section visibility change
 *
 * @param {{ index: Number, dom: Node }} currentSection - current section which was updated earlier
 * @param {{ index: Number, dom: Node }} newCurrentSection - new current section changed based on scroll
 * @param {Object} section - section meta
 * @param {String} elementSelector - sector string for element
 * @param {import("lit").LitElement} parent - The LitElement instance.
 * @returns {{ index: Number, dom: Node }} new current section based on scroll
 */
function updateEleBasedOnSectionChange(
  currentSection,
  newCurrentSection,
  section,
  elementSelector,
  parent
) {
  if (newCurrentSection?.index !== currentSection?.index || !currentSection) {
    currentSection = newCurrentSection;

    if (currentSection)
      assignNewAttrValue(
        section,
        currentSection.index,
        elementSelector,
        parent
      );
  }

  return currentSection;
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
