import Map from "ol/Map.js";
import Group from "ol/layer/Group.js";
import TileLayer from "ol/layer/Tile.js";
import { unByKey } from "ol/Observable.js";
import {
  syncGlobeLayerOrder,
  watchGlobeLayerOrder,
} from "../../../src/plugins/globe/openglobus.js";

/**
 * Creates an OL tile layer with the given id.
 *
 * @param {string} id
 */
const layer = (id) => new TileLayer({ properties: { id } });

/**
 * Creates a minimal stub of an OpenGlobus globe whose layers only track z-index.
 *
 * @param {Array<string>} ids
 */
const createGlobeStub = (ids) => {
  const layers = Object.fromEntries(
    ids.map((id) => {
      let zIndex = 0;
      return [
        id,
        {
          getZIndex: () => zIndex,
          setZIndex: (/** @type {number} */ z) => (zIndex = z),
        },
      ];
    }),
  );
  return /** @type {any} */ ({
    planet: { getLayerByName: (/** @type {string} */ id) => layers[id] },
  });
};

/**
 * Returns the globe layer ids ordered from bottom to top by z-index.
 *
 * @param {any} globe
 * @param {Array<string>} ids
 */
const globeOrder = (globe, ids) =>
  [...ids].sort(
    (a, b) =>
      globe.planet.getLayerByName(a).getZIndex() -
      globe.planet.getLayerByName(b).getZIndex(),
  );

/**
 * Tests that the OL rendering order (including nested groups and zIndex) is
 * mirrored onto the globe layers, and that reordering the OL collection
 * (as done by eox-layercontrol) re-syncs the globe order.
 */
export const testGlobeLayerOrder = () => {
  const ids = ["A", "B", "C", "D"];
  // OL collections are ordered bottom -> top: D, Group[C, B], A
  const group = new Group({ layers: [layer("C"), layer("B")] });
  const map = new Map({ layers: [layer("D"), group, layer("A")] });
  const EOxMap = /** @type {any} */ ({ map, globeEnabled: true });
  const globe = createGlobeStub(ids);

  // initial order respects nested groups
  syncGlobeLayerOrder(EOxMap, globe);
  expect(globeOrder(globe, ids)).to.deep.equal(["D", "C", "B", "A"]);

  // explicit OL zIndex takes precedence over collection order
  map.getLayers().item(0).setZIndex(10);
  syncGlobeLayerOrder(EOxMap, globe);
  expect(globeOrder(globe, ids)).to.deep.equal(["C", "B", "A", "D"]);
  map.getLayers().item(0).setZIndex(undefined);

  // live sync: move "A" from top to bottom, like eox-layercontrol sorting
  const key = watchGlobeLayerOrder(EOxMap, globe);
  const collection = map.getLayers();
  const a = collection.removeAt(2);
  collection.insertAt(0, a);

  cy.wrap(null)
    .then(() => new Promise((resolve) => requestAnimationFrame(resolve)))
    .then(() => {
      expect(globeOrder(globe, ids)).to.deep.equal(["A", "D", "C", "B"]);

      // reordering inside a nested group
      const groupLayers = group.getLayers();
      const c = groupLayers.removeAt(0);
      groupLayers.push(c);
    })
    .then(() => new Promise((resolve) => requestAnimationFrame(resolve)))
    .then(() => {
      expect(globeOrder(globe, ids)).to.deep.equal(["A", "D", "B", "C"]);
      unByKey(key);
    });
};
