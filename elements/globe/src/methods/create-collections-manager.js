/**
 * Description placeholder
 *
 * @param {import("cesium").Viewer} viewer
 */
const createCollectionsManager = (viewer) => {
  /**
   * @typedef {import("cesium").PointPrimitive
   * | import("cesium").Primitive
   * | import("cesium").BillboardCollection
   * } PrimitiveCollection
   */

  /**
   * Collection that are visible on the map
   *  @type { Record<string|number|symbol, PrimitiveCollection>} */
  const visibleCollections = {};
  /**
   * Collections that are added but not yet visible on the map
   * @type { Record<string|number|symbol, PrimitiveCollection>} */
  const hiddenCollections = {};

  /**
   * Description placeholder
   *
   * @param {string|number|symbol} name
   */
  const removeVisible_ = (name) => {
    const collection = visibleCollections[name];
    delete visibleCollections[name];
    collection.show = false;
  };
  /**
   * Description placeholder
   *
   * @param {string|number|symbol} name
   */
  const hide = (name) => {
    add(name, visibleCollections[name]);
    removeVisible_(name);
  };

  const hideAll = () => {
    Object.keys(visibleCollections).forEach(hide);
  };

  /**
   * Description placeholder
   *
   * @param {string|number|symbol} name
   * @param {PrimitiveCollection} collection
   */
  const addVisible_ = (name, collection) => {
    const primitives = viewer.scene.primitives;
    if (primitives?.contains(collection)) {
      collection.show = true;
    } else {
      primitives?.add(collection);
    }
    visibleCollections[name] = collection;
  };

  /** Lists collection names */
  const list = () => [
    ...Object.keys(visibleCollections),
    ...Object.keys(hiddenCollections),
  ];

  /**
   *  Returns true if named feature collection exists or false otherwise
   *
   * @param {string|number|symbol} name
   * @returns {boolean}
   */
  const contains = (name) =>
    name in visibleCollections || name in hiddenCollections;

  /**
   * Returns an existing named feature collection or undefined
   *
   * @param {string|number|symbol} name
   */
  const get = (name) => visibleCollections[name] ?? hiddenCollections[name];

  /**
   *  Adds a new not yet visible named feature collection
   *
   * @param {string|number|symbol} name
   * @param {PrimitiveCollection} collection
   */
  const add = (name, collection) => {
    hiddenCollections[name] = collection;
  };

  /**
   * Shows a new not-yet-visible named collection on the globe
   *
   * @param {string|number|symbol} name
   */
  const show = (name) => {
    const collection = hiddenCollections[name];
    delete hiddenCollections[name];
    addVisible_(name, collection);
  };

  /** Shows all feature collections on the globe */
  const showAll = () => {
    Object.keys(hiddenCollections).forEach(show);
  };

  /**
   * Removes an existing named feature collection
   *
   * @param {string|number|symbol} name
   */
  const remove = (name) => {
    const removed = viewer.scene.primitives.remove(get(name));
    if (removed) {
      delete visibleCollections[name];
      delete hiddenCollections[name];
    } else {
      console.error(`[eox-globe] Failed to remove collection ${name.toString()}`);
    }
  };

  /** Removes all feature collections */
  const removeAll = () => {
    for (const col in hiddenCollections) {
      delete hiddenCollections[col];
    }
    Object.keys(visibleCollections).forEach(removeVisible_);
  };

  return /** @type {const} */ ({
    remove,
    removeAll,
    hide,
    hideAll,
    show,
    showAll,
    add,
    get,
    contains,
    list,
  });
};

export default createCollectionsManager;
