/**
 * Assign new value for attribute of element (specifically maps for story transitions)
 *
 * @param {Object} section - section meta
 * @param {Number} index - current section index
 * @param {any} elementSelectorOrElement - selector string for element, or the element itself
 * @param {HTMLElement | ShadowRoot | any} parent - The parent container element/shadow root
 * @param {Array} allLayers - List of all layers in the section
 */
export function assignNewAttrValue(
  section,
  index,
  elementSelectorOrElement,
  parent,
  allLayers = [],
) {
  const element = /** @type {any} */ (
    typeof elementSelectorOrElement === "string"
      ? parent.querySelector(elementSelectorOrElement)
      : elementSelectorOrElement
  );
  if (!element) return;

  const steps = section.steps || [];
  const attrs = steps[index];
  if (!attrs) return;

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
 *
 * @param {any} element - The map element
 * @param {string} layerId - The ID of the layer to fade
 * @param {number} start - The start opacity
 * @param {number} end - The target opacity
 * @param {number} duration - Animation duration in milliseconds
 */
export function fadeLayer(element, layerId, start, end, duration) {
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
 * Preloads map tiles for all steps in a section to optimize map-tour transitions.
 *
 * @param {any} eoxMap - The eox-map element
 * @param {Array<any>} steps - The list of steps with zoom, center, layers
 */
export function preloadMapTiles(eoxMap, steps) {
  if (eoxMap && eoxMap.preloadTiles) {
    steps.forEach((step, stepIndex) => {
      // Stagger requests to prevent freezing the main thread & network congestion
      setTimeout(() => {
        const stepLayers = step.layers || [];
        // Collect IDs
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
}
