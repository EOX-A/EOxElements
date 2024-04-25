import { EVENT_REQ_MODES } from "../enums/index.js";
import GLightbox from "glightbox";

let sectionObservers = [];
let stepSectionObservers = [];

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
  const parent = that.shadowRoot || that;

  const isNavigation = !!(that.showNav && that.nav.length);

  // Disconnecting old observers to create new empty Observers
  sectionObservers.forEach((observer) => observer?.disconnect());
  sectionObservers = [];
  stepSectionObservers.forEach((observer) => observer?.disconnect());
  stepSectionObservers = [];

  // Creating new Section Observer for navigation and section intersection
  if (isNavigation) {
    that.nav.forEach((section) => {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const intersecting = entry.isIntersecting;
            const id = entry.target.getAttribute("id");
            if (intersecting) {
              parent.querySelectorAll(".navigation li").forEach((nav) => {
                if (nav.classList.contains(`nav-${id}`))
                  nav.classList.add("active");
                else nav.classList.remove("active");
              });
            }
          });
        },
        { rootMargin: "-50% 0px" }
      );

      setTimeout(() => {
        const sectionDom = parent.querySelector(`#${section.id}`);
        if (sectionDom) {
          sectionObserver.observe(sectionDom);
          sectionObservers.push(sectionObserver);
        }
      }, 200);
    });
  }

  // Creating new scroll Step Section Observer
  Object.keys(sections).forEach((sectionId) => {
    const section = sections[sectionId];

    if (EVENT_REQ_MODES.includes(section.mode) && section.steps) {
      const elementSelector = `${section.as}#${section.id}`;

      // Creating new scroll Step Section Observer and assign new value for attribute of element
      const stepSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          const index = Number(entry.target.getAttribute("key"));

          if (intersecting)
            assignNewAttrValue(section, index, elementSelector, parent);
        });
      });

      // Create scroll Step Section Observer with a small delay
      setTimeout(() => {
        const contentParent = parent.querySelector(`#${sectionId}`);
        if (!contentParent) return;

        const contentChildren = parent.querySelectorAll(
          `#${sectionId} section-step`
        );

        contentChildren.forEach((dom, key) => {
          dom.setAttribute("key", `${key}`);
          stepSectionObserver.observe(dom);
        });

        stepSectionObservers.push(stepSectionObserver);

        assignNewAttrValue(section, 0, elementSelector, parent);
      }, 100);
    }
  });

  function generateParallaxEffect() {
    // Get the current scroll position
    const scrolled = window.scrollY;

    // Find all elements with the specified selector
    const parallaxItems = parent.querySelectorAll(
      ".story-telling .hero img, .story-telling .hero video"
    );

    // Apply the transformation to each element
    parallaxItems.forEach(function (parallaxItem) {
      const parallaxEnabled =
        parallaxItem.getAttribute("data-parallax") === "true";
      if (parallaxEnabled)
        parallaxItem.style.transform = "translateY(" + scrolled * 0.3 + "px)";
    });
  }

  // Listen for the scroll event on the window
  window.removeEventListener("scroll", generateParallaxEffect);
  window.addEventListener("scroll", generateParallaxEffect);

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

  /**
   * Lightbox setup
   * See https://github.com/biati-digital/glightbox?tab=readme-ov-file#lightbox-options
   */
  if (node.querySelectorAll) {
    // Set up empty Lightbox
    const lightboxGallery = GLightbox({
      autoplayVideos: true,
    });
    const lightboxElements = [];

    const images = node.querySelectorAll("img");
    // Loop over each image
    images.forEach((img) => {
      // Check if the image is already inside a link (to avoid double wrapping)
      const mode = img.getAttribute("mode");

      if (img.parentNode.tagName !== "A" && mode !== "hero") {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => {
          lightboxGallery.open();
        });

        lightboxElements.push({
          type: "image",
          href: img.src,
        });
      }
    });
    lightboxGallery.setElements(lightboxElements);
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

  return convertValueToType(attributeValue);
}

export function convertValueToType(value) {
  let convertedValue;

  try {
    convertedValue = JSON.parse(value);
  } catch (e) {
    if (!isNaN(value) && value.trim() !== "") convertedValue = Number(value);
    else if (value === "true") convertedValue = true;
    else if (value === "false") convertedValue = false;
    else convertedValue = value;
  }

  return convertedValue;
}

function generateAddSectionClickEvt(
  event,
  isFirstSection,
  that,
  EOxStoryTelling
) {
  const rect = that.getBoundingClientRect();

  const center = (rect.right + rect.left) / 2;
  const halfSizeBtn = 25 / 2;

  const addBeforeBtnTop = isFirstSection ? rect.top - halfSizeBtn : undefined;
  const addBeforeBtnBottom = isFirstSection
    ? rect.top + halfSizeBtn
    : undefined;
  const addAfterBtnTop = rect.bottom - halfSizeBtn;
  const addAfterBtnBottom = rect.bottom + halfSizeBtn;
  const addBtnLeft = center - halfSizeBtn;
  const addBtnRight = center + halfSizeBtn;

  const { clientX, clientY } = event;

  const isClicked =
    clientX >= addBtnLeft &&
    clientX <= addBtnRight &&
    (clientY >= addAfterBtnTop || clientY >= addBeforeBtnTop) &&
    (clientY <= addAfterBtnBottom || clientY <= addBeforeBtnBottom);

  if (isClicked) {
    const isBeforeBtnTriggered = isFirstSection
      ? clientY >= addBeforeBtnTop && clientY <= addBeforeBtnBottom
      : false;
    const sectionIndex = Number(that.getAttribute("data-section"));

    EOxStoryTelling.addCustomSectionIndex = isBeforeBtnTriggered
      ? sectionIndex - 1
      : sectionIndex;

    EOxStoryTelling.requestUpdate();
  }
}

/**
 * Parse Nav and generate a new Element Node with add section button
 *
 * @param {Array<Element>} html - List of html elements
 * @param {Array} nav - List of nav elements
 * @param {Boolean} showNav - Whether to show nav or not
 * @param {Boolean} showEditor - Whether to show editor or not
 * @param {import("../main.js").EOxStoryTelling} EOxStoryTelling - EOxStoryTelling instance.
 * @returns {Element[]} An array of processed DOM nodes after adding navigation.
 */
export function parseNavWithAddSection(
  html,
  nav,
  showNav,
  showEditor,
  EOxStoryTelling
) {
  const parser = new DOMParser();
  let navIndex = -1;

  if (showNav && nav.length && html.length) {
    navIndex = 0;

    const navHtml = `
    <div class="navigation">
      <div class="container">
        <ul>
          ${nav
            .map(
              ({ id, title }) =>
                `<li class="nav-${id}"><a href="#${id}">${title}</a></li>`
            )
            .join("")}
        </ul>
      </div>
    </div>
  `;
    const navDOM = parser.parseFromString(navHtml, "text/html").body.firstChild;

    if (html[0].classList.contains("hero")) navIndex = 1;
    html.splice(navIndex, 0, navDOM);
  }

  if (html.length) {
    const sectionStartIndex = navIndex + 1;
    html[sectionStartIndex].classList.add("section-start");
    html.slice(sectionStartIndex).forEach((section, key) => {
      section.classList.add("section-item");
      section.setAttribute("data-section", `${key + 1}`);

      if (showEditor) {
        const isFirstSection = section.classList.contains("section-start");

        section.addEventListener("click", function (event) {
          generateAddSectionClickEvt(
            event,
            isFirstSection,
            this,
            EOxStoryTelling
          );
        });
      }
    });
  }

  return html;
}
