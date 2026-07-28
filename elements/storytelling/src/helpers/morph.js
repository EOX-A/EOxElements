/**
 * Recursively morphs/patches an existing DOM node to match a target node in-place.
 *
 * @param {Node} existingNode - The live DOM node to update.
 * @param {Node} targetNode - The newly parsed virtual node containing the updates.
 */
export function morphDOM(existingNode, targetNode) {
  if (existingNode.nodeType !== targetNode.nodeType) {
    /** @type {ChildNode} */ (existingNode).replaceWith(targetNode);
    return;
  }

  // Update text or comment nodes
  if (
    existingNode.nodeType === Node.TEXT_NODE ||
    existingNode.nodeType === Node.COMMENT_NODE
  ) {
    if (existingNode.nodeValue !== targetNode.nodeValue) {
      existingNode.nodeValue = targetNode.nodeValue;
    }
    return;
  }

  // Update elements
  if (existingNode.nodeType === Node.ELEMENT_NODE) {
    const existingEl = /** @type {HTMLElement} */ (existingNode);
    const targetEl = /** @type {HTMLElement} */ (targetNode);

    if (existingEl.tagName !== targetEl.tagName) {
      existingEl.replaceWith(targetEl);
      return;
    }

    // 1. Sync attributes
    const existingAttrs = existingEl.attributes;
    const targetAttrs = targetEl.attributes;

    // Remove attributes that are not in target
    for (let i = existingAttrs.length - 1; i >= 0; i--) {
      const attrName = existingAttrs[i].name;
      if (!targetEl.hasAttribute(attrName)) {
        existingEl.removeAttribute(attrName);
      }
    }

    // Add or update attributes
    for (let i = 0; i < targetAttrs.length; i++) {
      const attrName = targetAttrs[i].name;
      const attrVal = targetAttrs[i].value;
      if (existingEl.getAttribute(attrName) !== attrVal) {
        existingEl.setAttribute(attrName, attrVal);
      }
    }

    // 2. Sync Web Component / Custom Element properties
    if (existingEl.tagName.includes("-")) {
      for (const key of Object.keys(targetEl)) {
        if (targetEl[key] !== undefined && existingEl[key] !== targetEl[key]) {
          existingEl[key] = targetEl[key];
        }
      }
    }

    // 3. Reconcile child nodes recursively
    const existingChildren = Array.from(existingEl.childNodes);
    const targetChildren = Array.from(targetEl.childNodes);

    let eIdx = 0;
    let tIdx = 0;

    while (eIdx < existingChildren.length || tIdx < targetChildren.length) {
      const existingChild = existingChildren[eIdx];
      const targetChild = targetChildren[tIdx];

      if (!existingChild && targetChild) {
        // Target has more children, append them
        existingEl.appendChild(targetChild);
        tIdx++;
      } else if (existingChild && !targetChild) {
        // Target has fewer children, remove extra
        existingChild.remove();
        eIdx++;
      } else {
        const existingChildEl = /** @type {Element} */ (existingChild);
        const targetChildEl = /** @type {Element} */ (targetChild);

        // Both exist, reconcile them if they are compatible
        if (
          existingChild.nodeType === targetChild.nodeType &&
          existingChildEl.tagName === targetChildEl.tagName
        ) {
          morphDOM(existingChild, targetChild);
          eIdx++;
          tIdx++;
        } else {
          // Mismatch: replace in-place
          /** @type {ChildNode} */ (existingChild).replaceWith(targetChild);
          eIdx++;
          tIdx++;
        }
      }
    }
  }
}

/**
 * Reconciles the children of a container element to match a list of target elements.
 *
 * @param {HTMLElement} parent - The live parent element.
 * @param {HTMLElement[]} newElements - The array of newly parsed elements.
 */
export function reconcileChildren(parent, newElements) {
  const existingChildren = Array.from(parent.childNodes);

  let eIdx = 0;
  let tIdx = 0;

  while (eIdx < existingChildren.length || tIdx < newElements.length) {
    const existingChild = existingChildren[eIdx];
    const targetChild = newElements[tIdx];

    if (!existingChild && targetChild) {
      parent.appendChild(targetChild);
      tIdx++;
    } else if (existingChild && !targetChild) {
      existingChild.remove();
      eIdx++;
    } else {
      const existingChildEl = /** @type {Element} */ (existingChild);
      const targetChildEl = /** @type {Element} */ (targetChild);

      if (
        existingChild.nodeType === targetChild.nodeType &&
        existingChildEl.tagName === targetChildEl.tagName
      ) {
        morphDOM(existingChild, targetChild);
        eIdx++;
        tIdx++;
      } else {
        /** @type {ChildNode} */ (existingChild).replaceWith(targetChild);
        eIdx++;
        tIdx++;
      }
    }
  }
}
