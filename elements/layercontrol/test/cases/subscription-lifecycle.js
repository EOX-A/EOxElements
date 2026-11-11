import { html } from "lit";
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";

/** Rows release subscriptions while detached and restore one set on reconnect. */
export const layerRowSubscriptionLifecycle = () => {
  const view = new View({ center: [0, 0], zoom: 3 });
  const map = new Map({ view, controls: [], interactions: [] });
  const layer = new TileLayer({ minZoom: 2, maxZoom: 8 });
  const initialResolutionCount =
    view.getListeners("change:resolution")?.length || 0;
  const initialViewCount = map.getListeners("change:view")?.length || 0;
  cy.mount(
    html`<eox-layercontrol-layer
      .layer=${layer}
      .map=${map}
      .showLayerZoomState=${true}
    ></eox-layercontrol-layer>`,
  );
  cy.get("eox-layercontrol-layer").then(async ([row]) => {
    await row.updateComplete;
    const parent = row.parentNode;
    const count = (observable, type) =>
      observable.getListeners(type)?.length || 0;
    const resolutionCount = count(view, "change:resolution");
    const propertyCount = count(layer, "propertychange");
    const mapCount = count(map, "change:view");
    expect(resolutionCount).to.equal(initialResolutionCount + 1);
    expect(mapCount).to.equal(initialViewCount + 1);
    const requestUpdate = cy.spy(row, "requestUpdate");
    const resolution = cy.spy();
    row.addEventListener("change:resolution", resolution);

    for (let i = 0; i < 3; i++) {
      row.remove();
      expect(count(view, "change:resolution")).to.equal(resolutionCount - 1);
      expect(count(layer, "propertychange")).to.equal(propertyCount - 1);
      expect(count(map, "change:view")).to.equal(mapCount - 1);
      requestUpdate.resetHistory();
      view.setZoom(1);
      layer.set("layerDatetime", `detached-${i}`);
      expect(requestUpdate).not.to.have.been.called;
      parent.append(row);
      await row.updateComplete;
      expect(row.currLayerVisibilityBasedOnZoom).to.equal(false);
      expect(count(view, "change:resolution")).to.equal(resolutionCount);
      expect(count(layer, "propertychange")).to.equal(propertyCount);
      expect(count(map, "change:view")).to.equal(mapCount);
      resolution.resetHistory();
      view.setZoom(3);
      expect(resolution).to.have.been.calledOnce;
      await row.updateComplete;
      requestUpdate.resetHistory();
      layer.set("layerDatetime", `connected-${i}`);
      expect(requestUpdate).to.have.been.calledOnce;
      await row.updateComplete;
    }
    row.remove();
    map.dispose();
  });
};

/** Subscriptions follow replacement layers, maps, views, and zoom-state settings. */
export const layerRowSubscriptionReplacement = () => {
  const oldView = new View({ center: [0, 0], zoom: 3 });
  const map = new Map({ view: oldView, controls: [], interactions: [] });
  const oldLayer = new TileLayer({ minZoom: 2, maxZoom: 8 });
  cy.mount(
    html`<eox-layercontrol-layer
      .layer=${oldLayer}
      .map=${map}
      .showLayerZoomState=${true}
    ></eox-layercontrol-layer>`,
  );
  cy.get("eox-layercontrol-layer").then(async ([row]) => {
    await row.updateComplete;
    const requestUpdate = cy.spy(row, "requestUpdate");
    const view = new View({ center: [0, 0], zoom: 1 });
    map.setView(view);
    await row.updateComplete;
    expect(row.currLayerVisibilityBasedOnZoom).to.equal(false);
    requestUpdate.resetHistory();
    oldView.setZoom(1);
    expect(requestUpdate).not.to.have.been.called;
    view.setZoom(3);
    await row.updateComplete;
    expect(row.currLayerVisibilityBasedOnZoom).to.equal(true);

    const layer = new TileLayer({ minZoom: 4, maxZoom: 8 });
    row.layer = layer;
    await row.updateComplete;
    await row.updateComplete;
    requestUpdate.resetHistory();
    oldLayer.set("layerDatetime", "old");
    expect(requestUpdate).not.to.have.been.called;
    layer.set("layerDatetime", "new");
    expect(requestUpdate).to.have.been.calledOnce;
    await row.updateComplete;

    const replacementMap = new Map({
      view: new View({ center: [0, 0], zoom: 5 }),
      controls: [],
      interactions: [],
    });
    row.map = replacementMap;
    await row.updateComplete;
    await row.updateComplete;
    expect(row.currLayerVisibilityBasedOnZoom).to.equal(true);
    requestUpdate.resetHistory();
    view.setZoom(6);
    expect(requestUpdate).not.to.have.been.called;
    row.showLayerZoomState = false;
    await row.updateComplete;
    requestUpdate.resetHistory();
    replacementMap.getView().setZoom(1);
    expect(requestUpdate).not.to.have.been.called;
    row.showLayerZoomState = true;
    await row.updateComplete;
    await row.updateComplete;
    expect(row.currLayerVisibilityBasedOnZoom).to.equal(false);
    row.remove();
    map.dispose();
    replacementMap.dispose();
  });
};
