import Sortable from "sortablejs";

/**
 *
 * @param {HTMLElement} element
 * @param {import("ol").Collection<import("ol/layer").Layer | import("ol/layer").Group>} layers
 */
export const createSortable = (element, layers, that) => {
  let childNodes = [];
  element._sortable = Sortable.create(element, {
    handle: ".drag-handle",
    onStart: (e) => {
      // https://github.com/SortableJS/Sortable/issues/546
      const node = e.item;
      // Remember the list of child nodes when drag started.
      childNodes = Array.prototype.slice.call(node.parentNode.childNodes);
      // Filter out the 'sortable-fallback' element used on mobile/old browsers.
      childNodes = childNodes.filter(
        (node) =>
          node.nodeType != Node.ELEMENT_NODE ||
          !node.classList.contains("sortable-fallback")
      );
    },
    onEnd: (e) => {
      // Undo DOM changes by re-adding all children in their original order.
      const node = e.item;
      const parentNode = node.parentNode;
      for (const childNode of childNodes) {
        parentNode.appendChild(childNode);
      }
      if (e.oldIndex == e.newIndex) return;
      // Then move the element using your own logic.
      // automatically dispatches "sort" event
      const layer = layers
        .getArray()
        .find(
          (l) =>
            l.ol_uid ===
            e.item.querySelector("eox-layercontrol-layer").layer.ol_uid
        );
      layers.remove(layer);
      layers.insertAt(layers.getLength() - e.newIndex, layer);
      that.requestUpdate();
    },
  });
};

/**
 * Filter all map layers by property
 *
 * @param {Array<import("ol/layer").Layer>} layers
 * @param {string} key
 * @param {value} any
 * @returns {import("ol/layer").Layer} found layer
 */
export const filterLayers = (layers, key, value) => {
  let found = [];
  const search = (searchLayers, key, value) => {
    found = [...found, ...searchLayers.filter((l) => l.get(key) === value)];
    const groups = searchLayers.filter((l) => l.getLayers);
    if (groups.length > 0) {
      groups.forEach((group) =>
        search(group.getLayers().getArray(), key, value)
      );
    }
    return found;
  };
  search(layers, key, value);
  return found;
};

/**
 * Trying to guess the layer type from certain properties.
 * The proper way would be to use instanceOf, but for this
 * we'd need OL as a dependency, which we're trying to avoid
 * @param {import("ol/layer").Layer | import("ol/layer").Group} layer
 * @param {import("ol").Map} map
 */
export const getLayerType = (layer, map) => {
  if (!layer || !map) {
    return;
  }
  return layer.getLayers
    ? "group"
    : map
        .getInteractions()
        .getArray()
        .filter((i) => i.freehand_ !== undefined)
        .map((i) => i.source_)
        ?.ol_uid?.includes(
          layer.getSource ? layer.getSource()?.ol_uid : undefined
        )
    ? "draw"
    : layer.declutter_ !== undefined
    ? "vector"
    : "raster";
};
