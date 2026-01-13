import { EVENT_REQ_MODES } from "../enums/index.js";
import { scrollIntoView } from "./misc.js";
import GLightbox from "glightbox";

// Set up empty Lightbox
let lightboxGallery = null;
let lightboxElements = [];

let sectionObservers = [];
let sectionNavObservers = [];
let stepSectionObservers = [];
let sectionOverlayObservers = [];

/**
 * Converts an HTML string into DOM nodes and processes each node.
 *
 * @param {string} htmlString - The HTML string to be rendered.
 * @param {Object} sections - List of sections meta
 * @param {Function} initDispatchFunc - Init dispatch event
 * @param {import("../main.js").EOxStoryTelling} that - The EOxStoryTelling instance.
 * @returns {HTMLElement[]} An array of processed DOM nodes.
 */
export function renderHtmlString(htmlString, sections, initDispatchFunc, that) {
  // Parse the HTML string into a document
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const parent = /** @type {HTMLElement} */ (that.shadowRoot || that);

  const isNavigation = !!(that.showNav && that.nav.length);

  // Open all links inside story in a new tab
  const anchorTagsArr = doc.querySelectorAll("a");
  anchorTagsArr.forEach((anchor) => {
    if (!anchor.getAttribute("href")?.startsWith("#")) {
      anchor.target = "_blank";
    } else {
      anchor.addEventListener("click", () => {
        setTimeout(() => {
          scrollIntoView(that);
        });
      });
    }
  });

  // Disconnecting old observers to create new empty Observers
  sectionObservers.forEach((observer) => observer?.disconnect());
  sectionObservers = [];
  sectionNavObservers.forEach((observer) => observer?.disconnect());
  sectionNavObservers = [];
  stepSectionObservers.forEach((observer) => observer?.disconnect());
  stepSectionObservers = [];

  // Creating new Section Observer for navigation and section intersection
  if (isNavigation) {
    that.nav.forEach((section) => {
      const sectionNavObserver = new IntersectionObserver(
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
        { rootMargin: "-50% 0px" },
      );

      setTimeout(() => {
        const sectionDom = parent.querySelector(`#${section.id}`);
        if (sectionDom) {
          sectionNavObserver.observe(sectionDom);
          sectionNavObservers.push(sectionNavObserver);
        }
      }, 200);
    });
  }

  // Creating new scroll Step Section Observer
  Object.keys(sections).forEach((sectionId) => {
    const section = sections[sectionId];

    if (EVENT_REQ_MODES.includes(section.mode) && section.steps) {
      const elementSelector = `${section.as}#${section.id}`;
      let sectionLoadedOnce = false;

      // Deduplicate layers: If the same ID is used with different sources, split them into unique IDs
      // This ensures eox-map creates separate layers (allowing simultaneous preloading) instead of updating one layer.
      const layerRegistry = new Map(); // Key: ID+SourceHash, Value: AssignedUniqueID
      const idCounters = new Map(); // Key: OriginalID, Value: Counter

      section.steps.forEach((step) => {
        if (step.layers) {
          step.layers.forEach((layer) => {
            if (layer.properties && layer.properties.id) {
              const originalId = layer.properties.id;
              // Create a clear fingerprint of the source configuration
              const sourceFingerprint = layer.source
                ? JSON.stringify(layer.source)
                : "null";
              const registryKey = `${originalId}::${sourceFingerprint}`;

              if (!layerRegistry.has(registryKey)) {
                // This is a new configuration for this ID.
                let newId = originalId;
                if (idCounters.has(originalId)) {
                  // ID already encountered with different source, append index
                  const count = idCounters.get(originalId) + 1;
                  idCounters.set(originalId, count);
                  newId = `${originalId}_${count}`;
                } else {
                  // First time seeing this ID
                  idCounters.set(originalId, 0);
                }
                layerRegistry.set(registryKey, newId);
              }

              // Update the layer ID in the step definition to the unique one
              const assignedId = layerRegistry.get(registryKey);
              layer.properties.id = assignedId;
            }
          });
        }
      });

      // Collect all unique layers from all steps to enable preloading
      const layerMap = new Map();
      section.steps.forEach((step) => {
        if (step.layers) {
          step.layers.forEach((layer) => {
            if (layer.properties && layer.properties.id) {
              layerMap.set(layer.properties.id, layer);
            }
          });
        }
      });
      const allLayers = Array.from(layerMap.values());

      // OPTIMIZATION: Prioritize first step layers to avoid network contention on load
      const step0Ids = new Set(
        (section.steps[0].layers || []).map((l) => l.properties?.id),
      );
      const initialLayers = allLayers.filter((l) =>
        step0Ids.has(l.properties?.id),
      );
      let layersLoaded = false;
      let currentIndex = 0;

      // Creating new scroll Section Observer
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;

          if (intersecting && !sectionLoadedOnce) {
            assignNewAttrValue(
              section,
              0,
              elementSelector,
              parent,
              layersLoaded ? allLayers : initialLayers,
            );
            sectionLoadedOnce = true;
          }
        });
      });

      // Creating new scroll Step Section Observer and assign new value for attribute of element
      const stepSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          const index = Number(entry.target.getAttribute("key"));

          if (intersecting) {
            currentIndex = index;
            // If user moves beyond first step, force all layers to load
            if (index > 0) layersLoaded = true;

            assignNewAttrValue(
              section,
              index,
              elementSelector,
              parent,
              layersLoaded ? allLayers : initialLayers,
            );
          }
        });
      });

      // Create scroll Step Section Observer with a small delay
      setTimeout(() => {
        const contentParent = parent.querySelector(`#${sectionId}`);
        if (!contentParent) return;

        const contentChildren = parent.querySelectorAll(
          `#${sectionId} section-step`,
        );

        contentChildren.forEach((dom, key) => {
          dom.setAttribute("key", `${key}`);
          stepSectionObserver.observe(dom);
        });

        stepSectionObservers.push(stepSectionObserver);

        assignNewAttrValue(
          section,
          0,
          elementSelector,
          parent,
          layersLoaded ? allLayers : initialLayers,
        );

        // Deferred load of remaining hidden layers
        // This ensures the initial view loads fast, then we inject the rest for caching/preloading
        setTimeout(() => {
          if (!layersLoaded) {
            layersLoaded = true;
            assignNewAttrValue(
              section,
              currentIndex,
              elementSelector,
              parent,
              allLayers,
            );
          }
        }, 2500);

        sectionObserver.observe(contentParent);
        sectionObservers.push(sectionObserver);
      }, 500);

      // Explicit Preloader: Forces loading of tiles for future steps (different zoom/center)
      // This complements the "Hidden Layer" strategy which only handles the current view.
      setTimeout(() => {
        const eoxMap = /** @type {any} */ (parent.querySelector(
          elementSelector,
        ));
        if (eoxMap && eoxMap.preloadTiles) {
          section.steps.forEach((step, stepIndex) => {
            // Stagger requests to prevent freezing the main thread & network congestion
            setTimeout(() => {
              const stepLayers = step.layers || [];
              // Collect IDs - these are already deduplicated in the previous block
              const layerIds = stepLayers
                .map((l) => l.properties?.id)
                .filter(Boolean);

              const zoom = step.zoom;
              const center = step.center;

              if (layerIds.length && zoom !== undefined && center) {
                // Buffer 0.5 for safety margin
                eoxMap.preloadTiles(layerIds, zoom, center, 0.5);
              }
            }, stepIndex * 1000); // 1-second delay between preloading each step
          });
        }
      }, 3000); // Start preloading 3s after init
    }
  });

  function generateParallaxEffect() {
    // Find all elements with the specified selector
    const parallaxItems = parent.querySelectorAll(
      ".story-telling .hero img, .story-telling .hero video",
    );

    // Apply the transformation to each element
    parallaxItems.forEach(function (parallaxItem) {
      if (!(parallaxItem instanceof HTMLElement)) return;
      const parallaxEnabled =
        parallaxItem.getAttribute("data-parallax") === "true";
      if (parallaxEnabled)
        parallaxItem.style.transform =
          "translateY(" +
          parallaxItem.getBoundingClientRect().top * 0.1 +
          "px)";
    });
  }

  // Listen for the scroll event on the window
  window.removeEventListener("scroll", generateParallaxEffect);
  window.addEventListener("scroll", generateParallaxEffect);

  // Initialize lightbox
  lightboxGallery = GLightbox({
    autoplayVideos: true,
  });

  // Initialize lightbox elements
  lightboxElements = [];

  /** type Element[] */
  const elements = [];
  const nodes = Array.from(doc.body.childNodes);

  // Process child nodes of the document body
  for (const node of nodes) {
    if (node instanceof Element) {
      elements.push(
        processNode(/** @type {HTMLElement} */ (node), initDispatchFunc, that),
      );
    }
  }

  // Set lightbox elements
  lightboxGallery.setElements(lightboxElements);

  // Return processed elements
  return elements;
}

/**
 * Assign new value for attribute of element
 *
 * @param {Object} section - section meta
 * @param {Number} index - current section index
 * @param {String} elementSelector - sector string for element
 * @param {HTMLElement} parent - The EOxStoryTelling instance.
 * @param {Array} allLayers - List of all layers in the section
 */
function assignNewAttrValue(
  section,
  index,
  elementSelector,
  parent,
  allLayers = [],
) {
  const element = /** @type {any} */ (parent.querySelector(elementSelector));
  const attrs = section.steps[index];

  Object.keys(attrs).forEach((attr) => {
    if (attr === "layers" && allLayers.length && Array.isArray(attrs[attr])) {
      const stepLayers = attrs[attr];
      const mergedLayers = allLayers.map((layer) => {
        const stepLayer = stepLayers.find(
          (l) => l.properties?.id === layer.properties?.id,
        );
        if (stepLayer) {
          return {
            ...layer,
            ...stepLayer,
            visible: true,
            opacity: stepLayer.opacity ?? 1,
          };
        } else {
          // Keep inactive layers visible but fully transparent (for preloading)
          return { ...layer, visible: true, opacity: 0 };
        }
      });

      // --- Fade Effect Logic ---
      // Capture current opacities before the update snaps them
      const startOpacities = new Map();
      if (element.getLayerById) {
        mergedLayers.forEach((l) => {
          const existingLayer = element.getLayerById(l.properties.id);
          if (existingLayer) {
            startOpacities.set(l.properties.id, existingLayer.getOpacity());
          }
        });
      }

      // Apply the update (this snaps opacity to the target value immediately)
      element[attr] = mergedLayers;

      // Animate from start opacity to target opacity
      if (element.getLayerById) {
        mergedLayers.forEach((l) => {
          const layerId = l.properties.id;
          const targetOpacity = l.opacity; // detailed in mergedLayers
          const startOpacity = startOpacities.get(layerId);

          // If we have a start opacity, and it differs from target, we animate
          if (
            startOpacity !== undefined &&
            Math.abs(startOpacity - targetOpacity) > 0.01
          ) {
            fadeLayer(element, layerId, startOpacity, targetOpacity, 800);
          }
        });
      }
    } else {
      element[attr] = attrs[attr];
    }
  });

  if (element["mode"] === "tour") element["style"] = "";
}

/**
 * Linearly fades a layer's opacity.
 */
function fadeLayer(element, layerId, start, end, duration) {
  const layer = element.getLayerById(layerId);
  if (!layer) return;

  // Reset to start to avoid jump
  layer.setOpacity(start);

  // Cancel previous animation
  if (layer._fadeFrame) cancelAnimationFrame(layer._fadeFrame);

  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    let progress = elapsed / duration;
    if (progress > 1) progress = 1;

    // Use easing to prevent seeing background during cross-fades
    // Fade In: Start fast (EaseOut) -> opacity rises quickly
    // Fade Out: Start slow (EaseIn) -> opacity stays high longer
    let easedProgress = progress;
    if (end > start) {
      // EaseOutQuad: 1 - (1-t)^2
      easedProgress = 1 - (1 - progress) * (1 - progress);
    } else if (end < start) {
      // EaseInQuad: t^2
      easedProgress = progress * progress;
    }

    const currentOpacity = start + (end - start) * easedProgress;
    layer.setOpacity(currentOpacity);

    if (progress < 1) {
      layer._fadeFrame = requestAnimationFrame(animate);
    } else {
      layer._fadeFrame = null;
      // Ensure final value is set exactly
      layer.setOpacity(end);
    }
  }

  layer._fadeFrame = requestAnimationFrame(animate);
}

/**
 * Processes a DOM node by potentially modifying its attributes value based on it's datatype
 *
 * @param {HTMLElement} node - The DOM node to process.
 * @param {Function} initDispatchFunc - Init dispatch event
 * @param {import("../main.js").EOxStoryTelling} that - The EOxStoryTelling instance.
 * @returns {HTMLElement} The processed DOM node.
 */
function processNode(node, initDispatchFunc, that) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    const childElements = node.querySelectorAll("*");
    childElements.forEach((element) => {
      if (
        /^[a-z]+(-[a-z0-9]+)*$/.test(element.tagName.toLowerCase()) &&
        node.classList.contains("section-custom")
      ) {
        Array.from(element.attributes).forEach(
          // Update the attribute with its converted value
          (attr) =>
            (element[attr.name] = convertAttributeValueBasedOnItsType(
              /** @type {HTMLElement} */ (element),
              attr.name,
            )),
        );
      }
      setTimeout(() => initDispatchFunc(element), 100);
    });
  }

  /**
   * Lightbox setup
   * See https://github.com/biati-digital/glightbox?tab=readme-ov-file#lightbox-options
   */
  if (node.querySelectorAll) {
    const images = node.querySelectorAll("img");
    const videos = node.querySelectorAll("video");

    // Loop over each image/video
    [...images, ...videos].forEach((media) => {
      // Check if the image is already inside a link (to avoid double wrapping)
      const mode = media.getAttribute("mode");

      if (/** @type {Element} **/ (media.parentNode).tagName !== "A") {
        if (mode !== "hero" && media.getAttribute("mode") !== "tour") {
          media.style.cursor = "zoom-in";
          const index = lightboxElements.length;
          media.addEventListener("click", () => {
            lightboxGallery.openAt(index);
          });
          lightboxElements.push({
            type: "image",
            href: media.src,
          });
        }

        // Handle media loading error by switching to backup URL if available
        media.onerror = () => {
          if (
            that.renderRoot.contains(media) &&
            media.getAttribute("data-fallback-src")
          ) {
            media.src = media.getAttribute("data-fallback-src");
            media.removeAttribute("data-fallback-src");
          } else {
            media.src = "https://placehold.co/600x400?text=Media+not+found";
          }
        };

        // Function to clear the backup URL title attribute after successful load
        const loadFunc = () => {
          if (
            document.body.contains(media) &&
            media.getAttribute("data-fallback-src")
          ) {
            media.removeAttribute("data-fallback-src");
          }
        };

        media.onload = loadFunc;
        media.onloadeddata = loadFunc;
      }
    });
  }

  return node;
}

/**
 * Converts an attribute value of a DOM element into its detected type and returns the converted value.
 *
 * @param {HTMLElement} element - The DOM element containing the attribute or element with actual value.
 * @param {string} attributeName - The name of the attribute to convert.
 * @returns {string|number|boolean|array|object} The attribute value converted to its detected type.
 */
export function convertAttributeValueBasedOnItsType(
  element,
  attributeName = undefined,
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
  } catch (_) {
    if (!isNaN(value) && value.trim() !== "") convertedValue = Number(value);
    else if (value === "true") convertedValue = true;
    else if (value === "false") convertedValue = false;
    else convertedValue = value;
  }

  return convertedValue;
}

/**
 * Click event for add section button in ::after and ::before
 *
 * @param {MouseEvent} event - Click event
 * @param {Boolean} isStartSection - Whether the clicked section is start section or not
 * @param {Boolean} isEndSection - Whether the clicked section is end section or not
 * @param {Boolean} isDirectClick - Whether the click is direct or not
 * @param {HTMLElement} that - DOM Element
 * @param {import("../main.js").EOxStoryTelling} EOxStoryTelling - EOxStoryTelling instance.
 */
function generateAddSectionClickEvt(
  event,
  isStartSection,
  isEndSection,
  isDirectClick,
  that,
  EOxStoryTelling,
) {
  // Positioning click button
  const rect = that.getBoundingClientRect();

  const center = (rect.right + rect.left) / 2;
  const halfSizeBtn = 25 / 2;

  const addBeforeBtnTop = rect.top - halfSizeBtn;
  const addBeforeBtnBottom = rect.top + halfSizeBtn;
  let addAfterBtnTop = isEndSection ? rect.bottom - halfSizeBtn : undefined;
  let addAfterBtnBottom = isEndSection ? rect.bottom + halfSizeBtn : undefined;
  const addBtnLeft = center - halfSizeBtn;
  const addBtnRight = center + halfSizeBtn;

  const { clientX, clientY } = event;

  const isBeforeBtnTriggered = isStartSection
    ? clientY >= addBeforeBtnTop && clientY <= addBeforeBtnBottom
    : false;

  const isAfterBtnTriggered = isEndSection
    ? clientY >= addAfterBtnTop && clientY <= addAfterBtnBottom
    : false;

  if (!isAfterBtnTriggered) {
    addAfterBtnTop = undefined;
    addAfterBtnBottom = undefined;
  }

  // Check click happen or not
  const isClicked =
    clientX >= addBtnLeft &&
    clientX <= addBtnRight &&
    (clientY >= addAfterBtnTop || clientY >= addBeforeBtnTop) &&
    (clientY <= addAfterBtnBottom || clientY <= addBeforeBtnBottom);

  // If click happened enable custom section selection popup
  if ((isClicked || isDirectClick) && EOxStoryTelling.showEditor !== "closed") {
    const sectionIndex = Number(that.getAttribute("data-section"));
    const isHeroSection = that.classList.contains("hero");

    if (isHeroSection && isBeforeBtnTriggered) return;

    EOxStoryTelling.addCustomSectionIndex = isDirectClick
      ? 0
      : isAfterBtnTriggered
        ? sectionIndex
        : sectionIndex - 1;

    EOxStoryTelling.requestUpdate();
  }
}

/**
 * Parse Nav and generate a new Element Node with add section button
 *
 * @param {Array<HTMLElement>} html - List of html elements
 * @param {Array} nav - List of nav elements
 * @param {Boolean} showNav - Whether to show nav or not
 * @param {String | "closed" | undefined} showEditor - Whether to show editor or not
 * @param {import("../main.js").EOxStoryTelling} EOxStoryTelling - EOxStoryTelling instance.
 * @returns {HTMLElement[]} An array of processed DOM nodes after adding navigation.
 */
export function parseNavWithAddSection(
  html,
  nav,
  showNav,
  showEditor,
  EOxStoryTelling,
) {
  const parser = new DOMParser();
  let navIndex = -1;

  if (showNav && nav.length && html.length) {
    navIndex = 0;

    const navHtml = `
    <div class="navigation">
      <div class="container nav-container">
        <span class="hamburger-menu" aria-label="Toggle navigation">
        </span>
        <div class="nav-overlay"></div>
        <ul class="nav-list">
          ${nav
            .map(({ id, title, state }) =>
              state
                ? `<li class="nav-${id} center-align"><a href="#${id}"><small class="truncate">${title}</small></a></li>`
                : "",
            )
            .join("")}
        </ul>
      </div>
    </div>
  `;
    const navDOM = /** @type {HTMLElement} */ (
      parser.parseFromString(navHtml, "text/html").body.firstChild
    );

    // Add click handler for hamburger menu
    const hamburgerBtn = navDOM.querySelector(".hamburger-menu");
    const navList = navDOM.querySelector(".navigation .container ul");
    const navOverlay = navDOM.querySelector(".nav-overlay");
    const navListItems = navDOM.querySelectorAll(".nav-list li");

    if (hamburgerBtn && navList) {
      const navEventHandlers = () => {
        hamburgerBtn.classList.toggle("active");
        navList.classList.toggle("show");
        navOverlay.classList.toggle("show");
      };
      hamburgerBtn.addEventListener("click", () => navEventHandlers());
      navOverlay.addEventListener("click", () => navEventHandlers());
      navListItems.forEach((item) => {
        item.addEventListener("click", () => navEventHandlers());
      });
    }

    if (html[0].classList.contains("hero")) navIndex = 1;
    html.splice(navIndex, 0, navDOM);
  }

  let containsSectionWrap = false;

  if (html.length) {
    const sectionStartIndex = navIndex + 1;
    if (sectionStartIndex)
      html[sectionStartIndex].classList.add("section-after-nav");
    html[navIndex === 0 ? 1 : 0].classList.add("section-start");
    html[html.length - 1].classList.add("section-end");

    const sectionOverlayObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;

          if (intersecting) {
            entry.target.classList.add("show-overlay");
          } else {
            entry.target.classList.remove("show-overlay");
          }
        });
      },
      { rootMargin: "-50% 0px" },
    );

    html
      .slice(0, navIndex === -1 ? 0 : navIndex)
      .concat(html.slice(sectionStartIndex))
      .forEach((section, key) => {
        if (!section.classList) return;
        if (section.classList.contains("section-wrap"))
          containsSectionWrap = true;

        const eoxMap = section.querySelector("eox-map");
        const isTour = section.classList.contains("tour");
        if (eoxMap) {
          const sectionChildren = Array.from(section.children).filter(
            (child) => {
              return (
                child.tagName.toLowerCase() !== "section-step" &&
                child.getAttribute("as") !== "eox-map"
              );
            },
          );
          const eoxMapChildren = Array.from(eoxMap.children);
          const children = [...sectionChildren, ...eoxMapChildren];
          if (children.length) {
            const hasOverlayClass = Array.from(eoxMap.classList).filter(
              (className) => className.startsWith("overlay-"),
            );

            const overlayMap = document.createElement("div");
            overlayMap.className = "eox-map-overlay";
            overlayMap.classList.add(
              hasOverlayClass.length ? hasOverlayClass[0] : "overlay-br",
            );

            const overlayMapContent = document.createElement("div");
            overlayMapContent.className = "eox-map-overlay-content";

            children.forEach((child) => overlayMapContent.appendChild(child));
            overlayMap.appendChild(overlayMapContent);
            eoxMap.innerHTML = "";
            section.insertBefore(overlayMap, eoxMap.nextSibling);

            if (isTour) {
              sectionOverlayObserver.observe(section);
              sectionOverlayObservers.push(sectionOverlayObserver);
            }
          }
        }

        section.classList.add("section-item");
        section.setAttribute("data-section", `${key + 1}`);

        // Add click event function to identify add button click
        if (showEditor !== undefined) {
          const isStartSection = section.classList.contains("section-start");
          const isEndSection = section.classList.contains("section-end");

          section.addEventListener("click", function (event) {
            generateAddSectionClickEvt(
              /** @type {MouseEvent} */ (event),
              isStartSection,
              isEndSection,
              false,
              /** @type {HTMLElement} */ (section),
              EOxStoryTelling,
            );
          });
        }
      });
  }

  if (!containsSectionWrap) {
    let sectionWrap = document.createElement("div");
    sectionWrap.className = "section-wrap container section-item section-start";
    html.forEach((element) => {
      sectionWrap.appendChild(element);
    });
    sectionWrap.addEventListener("click", function (event) {
      generateAddSectionClickEvt(
        event,
        false,
        false,
        true,
        this,
        EOxStoryTelling,
      );
    });
    html = [sectionWrap];
  }

  if (
    html[0].classList.contains("hero") &&
    EOxStoryTelling.showHeroScrollIndicator
  ) {
    const sectionWraps =
      html.filter((el) => el.classList?.contains("section-wrap")) || [];

    if (sectionWraps.length > 1) {
      const isNavigation = html[1].classList.contains("navigation");
      const scrollAnchor = document.createElement("a");
      scrollAnchor.classList.add("hero-scroll-indicator");

      scrollAnchor.addEventListener("click", (e) => {
        e.preventDefault();
        (isNavigation ? html : sectionWraps)[1].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      html[0].appendChild(scrollAnchor);
    }
  }

  return html;
}
