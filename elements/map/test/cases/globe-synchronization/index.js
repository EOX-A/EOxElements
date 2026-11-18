import { html } from "lit";
import TileLayer from "ol/layer/Tile.js";
import TileWMS from "ol/source/TileWMS.js";
import { LonLat, Vec3 } from "@openglobus/og";
import { createMapPool } from "../../../src/plugins/globe/methods.js";
import { registerGlobeLayerSynchronization } from "../../../src/plugins/globe/index.js";
import { disableGlobe } from "../../../src/plugins/globe/openglobus.js";
import { disposeGlobeSynchronization } from "../../../src/plugins/globe/lifecycle.js";

/**
 * @typedef {import("../../../src/main.js").EOxMap} EOxMap
 * @typedef {import("@openglobus/og").Globe} Globe
 * @typedef {ReturnType<typeof import("../../../src/plugins/globe/openglobus.js").createGlobusLayer>} GlobeLayer
 */

/** @param {(map: EOxMap) => void} test - The assertions to run on a mounted map. */
function withMap(test) {
  cy.mount(html`<eox-map .layers=${[]} .controls=${{}}></eox-map>`);
  cy.get("eox-map").then(([element]) => test(/** @type {EOxMap} */ (element)));
}

/** Creates a globe boundary stub without a WebGL renderer or network traffic. */
function createGlobeStub() {
  /** @type {GlobeLayer[]} */
  const layers = [];
  const planet = {
    layers,
    getLayerByName: (/** @type {string} */ id) =>
      layers.find((layer) => layer.name === id),
    addLayer: (/** @type {GlobeLayer} */ layer) => layers.push(layer),
    removeLayer: (/** @type {GlobeLayer} */ layer) =>
      layers.splice(layers.indexOf(layer), 1),
    getLonLatFromPixelTerrain: () => new LonLat(0, 0),
    getCartesianFromPixelTerrain: () => null,
    camera: { eye: new Vec3(1, 0, 0) },
    flyCartesian: cy.stub(),
  };
  const globe = /** @type {Globe} */ (
    /** @type {unknown} */ ({
      planet,
      renderer: { handler: { getCenter: () => ({ x: 0, y: 0 }) } },
    })
  );
  return { globe, planet };
}

/** @param {EOxMap} map - The host for an internal offscreen map. */
function createPool(map) {
  const target = document.createElement("div");
  map.shadowRoot.appendChild(target);
  return createMapPool(1, map, target);
}

/** @param {EOxMap} map - The root map. */
function activate(map) {
  const { globe, planet } = createGlobeStub();
  const pool = createPool(map);
  map.globe = globe;
  map.globeEnabled = true;
  registerGlobeLayerSynchronization(map, globe, pool);
  return { globe, planet, pool };
}

/** Creates a network-intercepted WMS definition with a real select interaction. */
function wmsDefinition() {
  return /** @type {import("../../../src/layers.js").EoxLayer} */ ({
    type: "Tile",
    properties: { id: "dynamic" },
    source: {
      type: "TileWMS",
      url: new URL("test-wms", window.location.href).href,
      params: { LAYERS: "test" },
    },
    interactions: [
      { type: "select", options: { id: "dynamic-select", condition: "click" } },
    ],
  });
}

/** Internal map events remain local, while root map events still bubble and compose. */
export function testPoolEventIsolation() {
  withMap((map) => {
    const parent = map.parentElement;
    const publicEvent = cy.spy();
    const activity = cy.spy();
    parent.addEventListener("layerschanged", publicEvent);
    parent.addEventListener("eox:activity", activity);
    const pool = createPool(map);
    const tileMap = pool[0].tileMap;
    const local = cy.spy();
    const leaked = cy.spy();
    const types = [
      "layerschanged",
      "mapmounted",
      "loadend",
      "resize",
      "select",
      "clusterSelect",
      "drawend",
      "addfeatures",
      "eox:activity",
    ];
    types.forEach((type) => {
      tileMap.addEventListener(type, local);
      map.addEventListener(type, leaked);
      tileMap.dispatchEvent(
        new CustomEvent(type, { bubbles: true, composed: true }),
      );
    });
    expect(local.callCount).to.equal(types.length);
    expect(leaked).not.to.have.been.called;
    expect(publicEvent).not.to.have.been.called;
    expect(activity).not.to.have.been.called;
    map.layers = [];
    expect(publicEvent).to.have.been.calledOnce;
    expect(publicEvent.firstCall.args[0].bubbles).to.equal(true);
    expect(publicEvent.firstCall.args[0].composed).to.equal(true);
    expect(activity).not.to.have.been.called;
    parent.removeEventListener("layerschanged", publicEvent);
    parent.removeEventListener("eox:activity", activity);
  });
}

/** A root update reconciles once, but retargeted child events cannot trigger synchronization. */
export function testSynchronizationOrigin() {
  withMap((map) => {
    const { pool } = activate(map);
    const dispatch = cy
      .spy(pool[0].tileMap, "dispatchEvent")
      .withArgs(Cypress.sinon.match.has("type", "layerschanged"));
    map.layers = [];
    expect(dispatch).to.have.been.calledOnce;

    const nested = document.createElement("div");
    map.shadowRoot.appendChild(nested);
    const retargeted = cy.spy();
    map.addEventListener("layerschanged", retargeted);
    nested.dispatchEvent(
      new CustomEvent("layerschanged", { bubbles: true, composed: true }),
    );
    expect(retargeted.firstCall.args[0].target).to.equal(map);
    expect(dispatch).to.have.been.calledOnce;
  });
}

/** Projection exit disposes synchronization before a new globe instance takes ownership. */
export function testGlobeToggleOwnership() {
  withMap((map) => {
    const first = activate(map);
    const oldDispatch = cy
      .spy(first.pool[0].tileMap, "dispatchEvent")
      .withArgs(Cypress.sinon.match.has("type", "layerschanged"));
    disableGlobe(map);
    expect(first.planet.flyCartesian).to.have.been.calledOnce;
    map.layers = [];
    expect(oldDispatch).not.to.have.been.called;

    const second = activate(map);
    const newDispatch = cy
      .spy(second.pool[0].tileMap, "dispatchEvent")
      .withArgs(Cypress.sinon.match.has("type", "layerschanged"));
    map.layers = [];
    expect(newDispatch).to.have.been.calledOnce;
    expect(oldDispatch).not.to.have.been.called;
    disposeGlobeSynchronization(first.globe);
  });
}

/** Detachment pauses all synchronization and reconnection restores exactly one owner. */
export function testGlobeReconnectOwnership() {
  withMap((map) => {
    const { pool } = activate(map);
    const parent = map.parentElement;
    const dispatch = cy
      .spy(pool[0].tileMap, "dispatchEvent")
      .withArgs(Cypress.sinon.match.has("type", "layerschanged"));
    map.remove();
    map.layers = [];
    expect(dispatch).not.to.have.been.called;
    parent.appendChild(map);
    expect(dispatch).to.have.been.calledOnce;
    dispatch.resetHistory();
    map.layers = [];
    expect(dispatch).to.have.been.calledOnce;
  });
}

/** Late globe initialization on a detached host must wait for reconnection. */
export function testDetachedGlobeRegistration() {
  withMap((map) => {
    const parent = map.parentElement;
    map.remove();
    const { pool } = activate(map);
    const dispatch = cy
      .spy(pool[0].tileMap, "dispatchEvent")
      .withArgs(Cypress.sinon.match.has("type", "layerschanged"));
    map.layers = [];
    expect(dispatch).not.to.have.been.called;
    parent.appendChild(map);
    expect(dispatch).to.have.been.calledOnce;
    dispatch.resetHistory();
    map.layers = [];
    expect(dispatch).to.have.been.calledOnce;
  });
}

/** Dynamic WMS selection retains its functional event and exactly one user-activity envelope. */
export function testDynamicGlobeSelection() {
  cy.intercept("**/test-wms*", {
    fixture: "map/test/fixtures/tiles/osm/0/0/0.png",
  });
  withMap((map) => {
    const { planet } = activate(map);
    const selected = cy.spy();
    const activity = cy.spy();
    map.addEventListener("select", selected);
    map.addEventListener("eox:activity", activity);
    map.layers = [wmsDefinition()];
    expect(activity).not.to.have.been.called;
    const layer = planet.getLayerByName("dynamic");
    const event = {
      pos: { x: 0, y: 0 },
      pickingObject: { _layer: layer, properties: { name: "picked" } },
    };
    layer.events.dispatch(layer.events.lclick, event);
    expect(selected).to.have.been.calledOnce;
    expect(selected.firstCall.args[0].detail.feature.get("name")).to.equal(
      "picked",
    );
    expect(activity).to.have.been.calledOnce;
    expect(activity.firstCall.args[0].detail).to.include({
      element: "eox-map",
      action: "select",
      originalEvent: event,
    });
  });
}

/** Replacing an OL instance with the same ID disposes the old instance's subscriptions. */
export function testSameIdGlobeReplacement() {
  cy.intercept("**/test-wms*", {
    fixture: "map/test/fixtures/tiles/osm/0/0/0.png",
  });
  withMap((map) => {
    map.layers = [wmsDefinition()];
    const { planet } = activate(map);
    const old = map.map.getAllLayers()[0];
    const previousGlobeLayer = planet.getLayerByName("dynamic");
    const replacement = new TileLayer({
      properties: { id: "dynamic", _jsonDefinition: wmsDefinition() },
      source: new TileWMS({
        url: new URL("test-wms", window.location.href).href,
        params: { LAYERS: "test" },
      }),
    });
    map.map.removeLayer(old);
    map.map.addLayer(replacement);
    map.dispatchEvent(
      new CustomEvent("layerschanged", { bubbles: true, composed: true }),
    );
    const current = planet.getLayerByName("dynamic");
    expect(current).not.to.equal(previousGlobeLayer);
    const visibility = cy.spy(current, "setVisibility");
    old.setVisible(false);
    old.setOpacity(0.2);
    expect(visibility).not.to.have.been.called;
    expect(current.getVisibility()).to.equal(true);
    expect(current.opacity).to.equal(1);
    replacement.setVisible(false);
    replacement.setOpacity(0.4);
    expect(visibility).to.have.been.calledOnceWith(false);
    expect(current.opacity).to.equal(0.4);
  });
}
