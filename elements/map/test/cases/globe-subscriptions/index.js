import Map from "ol/Map.js";
import TileLayer from "ol/layer/Tile.js";
import { unByKey } from "ol/Observable.js";
import { CanvasTiles } from "@openglobus/og";
import {
  setupLayerListeners,
  watchGlobeLayerOrder,
} from "../../../src/plugins/globe/openglobus.js";

/**
 * @typedef {{ opacity: number, setVisibility: (visible: boolean) => void,
 * getZIndex: () => number, setZIndex: (index: number) => void }} GlobeLayerStub
 */

/**
 * Only the globe boundary is stubbed; OL subscriptions use real layers and maps.
 * @param {GlobeLayerStub} layer
 * @param {CanvasTiles[]} [layers]
 * @returns {import("@openglobus/og").Globe}
 */
const globeStub = (layer, layers = []) =>
  /** @type {import("@openglobus/og").Globe} */ (
    /** @type {unknown} */ ({
      planet: { getLayerByName: () => layer, layers },
    })
  );

/** @returns {GlobeLayerStub} */
const globeLayerStub = () => ({
  opacity: 1,
  setVisibility: cy.stub(),
  getZIndex: () => -1,
  setZIndex: cy.stub(),
});

/** Disposed OL instances cannot mutate a globe layer reusing their ID. */
export const testDisposedLayerReplacement = () => {
  const oldLayer = new TileLayer({ properties: { id: "shared" } });
  const replacement = new TileLayer({ properties: { id: "shared" } });
  const globeLayer = globeLayerStub();
  const globe = globeStub(globeLayer);
  const disposeOld = setupLayerListeners(oldLayer, globe, []);
  disposeOld();
  disposeOld();
  const disposeReplacement = setupLayerListeners(replacement, globe, []);
  try {
    expect(oldLayer.hasListener("change")).to.equal(false);
    expect(oldLayer.hasListener("propertychange")).to.equal(false);
    oldLayer.setVisible(false);
    oldLayer.setOpacity(0.2);
    oldLayer.changed();
    expect(globeLayer.setVisibility).not.to.have.been.called;
    expect(globeLayer.opacity).to.equal(1);
    replacement.setVisible(false);
    replacement.setOpacity(0.6);
    expect(globeLayer.setVisibility).to.have.been.calledOnceWith(false);
    expect(globeLayer.opacity).to.equal(0.6);
  } finally {
    disposeReplacement();
  }
};

/** Pending style refreshes are cancelled, including their timer handles. */
export const testDisposedLayerDebounce = () => {
  const layer = new TileLayer({ properties: { id: "canvas" } });
  const canvas = new CanvasTiles("canvas", { drawTile: () => undefined });
  const timerConfig = {
    global: window,
    toFake: ["setTimeout", "clearTimeout"],
  };
  const clock = Cypress.sinon.useFakeTimers(timerConfig);
  const abortLoading = cy.stub(canvas, "abortLoading");
  const dispose = setupLayerListeners(
    layer,
    globeStub(globeLayerStub(), [canvas]),
    [],
  );
  try {
    Object.assign(layer, { styleVariables_: { brightness: 1 } });
    layer.changed();
    expect(clock.countTimers()).to.equal(1);
    dispose();
    expect(clock.countTimers()).to.equal(0);
    clock.tick(500);
    expect(abortLoading).not.to.have.been.called;
  } finally {
    dispose();
    clock.restore();
  }
};

/** Refresh targets the subscribed globe and cleanup owns the animation reset. */
export const testCapturedGlobeRefresh = () => {
  const layer = new TileLayer({ properties: { id: "canvas" } });
  const canvas = new CanvasTiles("canvas", { drawTile: () => undefined });
  const timerConfig = {
    global: window,
    toFake: ["setTimeout", "clearTimeout"],
  };
  const clock = Cypress.sinon.useFakeTimers(timerConfig);
  const abortLoading = cy.stub(canvas, "abortLoading");
  const dispose = setupLayerListeners(
    layer,
    globeStub(globeLayerStub(), [canvas]),
    [],
  );
  try {
    Object.assign(layer, { styleVariables_: { brightness: 1 } });
    layer.changed();
    clock.tick(200);
    expect(abortLoading).to.have.been.calledOnce;
    expect(canvas.animated).to.equal(true);
    expect(clock.countTimers()).to.equal(1);
    dispose();
    expect(canvas.animated).to.equal(false);
    expect(clock.countTimers()).to.equal(0);
    layer.changed();
    clock.tick(500);
    expect(abortLoading).to.have.been.calledOnce;
  } finally {
    dispose();
    clock.restore();
  }
};

/** Abort removes the OL subscription and cancels the pending order frame. */
export const testAbortedOrderFrame = () => {
  const layer = new TileLayer({ properties: { id: "ordered" } });
  const map = new Map({ layers: [layer] });
  const component = /** @type {import("../../../src/main.js").EOxMap} */ (
    /** @type {unknown} */ ({ map, globeEnabled: true })
  );
  const globeLayer = globeLayerStub();
  const controller = new AbortController();
  /** @type {FrameRequestCallback | undefined} */
  let pending;
  const request = cy.stub(window, "requestAnimationFrame").callsFake(
    /** @param {FrameRequestCallback} callback */
    (callback) => {
      pending = callback;
      return 42;
    },
  );
  const cancel = cy.stub(window, "cancelAnimationFrame");
  const group = map.getLayerGroup();
  const initialListeners = group.getListeners("change")?.length ?? 0;
  const key = watchGlobeLayerOrder(
    component,
    globeStub(globeLayer),
    controller.signal,
  );
  try {
    expect(group.getListeners("change").length).to.equal(initialListeners + 1);
    layer.setZIndex(2);
    layer.setZIndex(3);
    expect(request).to.have.been.calledOnce;
    controller.abort();
    controller.abort();
    expect(cancel).to.have.been.calledOnceWith(42);
    expect(group.getListeners("change")?.length ?? 0).to.equal(
      initialListeners,
    );
    // Even an already-delivered callback cannot act after abort.
    pending?.(0);
    layer.setZIndex(4);
    expect(request).to.have.been.calledOnce;
    expect(globeLayer.setZIndex).not.to.have.been.called;
    unByKey(key);
  } finally {
    controller.abort();
    map.dispose();
  }
};

/** An already-aborted signal never leaves an active subscription. */
export const testAlreadyAbortedOrder = () => {
  const layer = new TileLayer({ properties: { id: "ordered" } });
  const map = new Map({ layers: [layer] });
  const component = /** @type {import("../../../src/main.js").EOxMap} */ (
    /** @type {unknown} */ ({ map, globeEnabled: true })
  );
  const controller = new AbortController();
  controller.abort();
  const group = map.getLayerGroup();
  const initialListeners = group.getListeners("change")?.length ?? 0;
  const key = watchGlobeLayerOrder(
    component,
    globeStub(globeLayerStub()),
    controller.signal,
  );
  try {
    expect(group.getListeners("change")?.length ?? 0).to.equal(
      initialListeners,
    );
    layer.changed();
    unByKey(key);
  } finally {
    map.dispose();
  }
};
