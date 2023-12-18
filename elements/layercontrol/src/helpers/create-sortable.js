import Sortable from "sortablejs";

/** @param {Sortable.SortableEvent} e */
const onStart = (e) => {
  // https://github.com/SortableJS/Sortable/issues/546

  const node = e.item;
  // Remember the list of child nodes when drag started.
  let childNodes = Array.prototype.slice.call(node.parentNode.childNodes);

  // Filter out the 'sortable-fallback' element used on mobile/old browsers.
  childNodes = childNodes.filter(
    (node) =>
      node.nodeType != Node.ELEMENT_NODE ||
      !node.classList.contains("sortable-fallback")
  );

  return childNodes;
};

/**
 * @param {Sortable.SortableEvent} e
 * @param {import("lit").LitElement} that
 * @param {any[]} childNodes
 * @param {import("ol").Collection<import("ol/layer").Layer | import("ol/layer").Group>} collection
 * @param {string} idProperty
 * @param {HTMLElement} related
 */
const onEnd = (e, that, childNodes, collection, idProperty, related) => {
  // Undo DOM changes by re-adding all children in their original order.
  const node = e.item;
  const parentNode = node.parentNode;
  for (const childNode of childNodes) {
    parentNode.appendChild(childNode);
  }

  // If the item didn't change position, return
  if (e.oldIndex == e.newIndex) return;

  // Then move the element using your own logic.
  // automatically dispatches "sort" event
  const layers = collection.getArray();

  const layerId =
    /** @type {Element & {layer: import("ol/layer").Layer}} */
    (e.item.querySelector("eox-layercontrol-layer")).layer.get(idProperty);
  const layer = layers.find((l) => l.get(idProperty) === layerId);

  const relatedLayerId = related.dataset.layer;
  const relatedLayer = layers.find(
    (layer) => layer.get(idProperty) == relatedLayerId
  );

  let draggedIndex;
  let dropIndex;
  for (draggedIndex = 0; draggedIndex < layers.length; draggedIndex++) {
    if (layers[draggedIndex] == layer) {
      collection.removeAt(draggedIndex);
      break;
    }
  }
  for (dropIndex = 0; dropIndex < layers.length; dropIndex++) {
    if (layers[dropIndex] === relatedLayer) {
      if (draggedIndex > dropIndex) collection.insertAt(dropIndex, layer);
      else collection.insertAt(dropIndex + 1, layer);
      break;
    }
  }

  that.requestUpdate();
};

/**
 * Initializes the sortable functionality for a given element.
 * This handles the drag-and-drop sorting of elements within the specified element.
 *
 * @param {HTMLElement} element - The HTML element to make sortable.
 * @param {import("ol").Collection<import("ol/layer").Layer | import("ol/layer").Group>} collection - Collection of layers.
 * @param {string} idProperty - The property used as an identifier.
 * @param {import("lit").LitElement} that - The LitElement instance.
 */
export default function createSortable(element, collection, idProperty, that) {
  // Variables to store related elements during the sorting process

  /** * @type {any[]} */
  let childNodes = [];

  /** * @type {HTMLElement} */
  let related = null;

  /** @type {HTMLElement & {_sortable: import("sortablejs")}} */
  (element)._sortable = Sortable.create(element, {
    handle: ".drag-handle",
    filter: ".drag-handle.disabled",
    swapThreshold: 0.5,
    animation: 150,
    easing: "cubic-bezier(1, 0, 0, 1)",
    onStart: (e) => (childNodes = onStart(e)),
    onMove: (e) => {
      related = e.related;
    },
    onEnd: (e) => onEnd(e, that, childNodes, collection, idProperty, related),
  });
}
