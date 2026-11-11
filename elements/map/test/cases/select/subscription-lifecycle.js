import { html } from "lit";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import { EOxSelectInteraction } from "../../../src/helpers/select.js";

/** Verify that repeated removal releases OL and DOM subscriptions. */
export const selectSubscriptionLifecycle = () => {
  cy.mount(html`<eox-map .layers=${[]}></eox-map>`);
  cy.get("eox-map").then(([eoxMap]) => {
    const map = eoxMap.map;
    const originalTarget = map.getTargetElement();
    const target = document.createElement("div");
    target.id = "select-lifecycle-target";
    eoxMap.append(target);
    const source = new VectorSource({
      features: [new Feature(new Point([0, 0]))],
    });
    const layer = new VectorLayer({ source });
    layer.set("_jsonDefinition", { type: "Vector" });
    const count = (observable, type) =>
      observable.getListeners(type)?.length || 0;
    const targetCount = count(map, "change:target");
    const opacityCount = count(layer, "change:opacity");
    const visibleCount = count(layer, "change:visible");
    const group = map.getLayerGroup();
    const groupCount = count(group, "change");

    for (let i = 0; i < 3; i++) {
      const interaction = new EOxSelectInteraction(eoxMap, layer, {
        id: "lifecycle",
        condition: "pointermove",
        tooltip: false,
      });
      const changed = cy.spy(interaction.selectStyleLayer, "changed");
      interaction.selectedFids = ["selected"];
      map.setTarget(target.id);
      originalTarget.dispatchEvent(new Event("pointerleave"));
      expect(interaction.selectedFids).to.deep.equal(["selected"]);
      target.dispatchEvent(new Event("pointerleave"));
      expect(interaction.selectedFids).to.deep.equal([]);
      expect(changed).to.have.been.calledOnce;

      const opacity = cy.spy(interaction.selectStyleLayer, "setOpacity");
      const visible = cy.spy(interaction.selectStyleLayer, "setVisible");
      layer.setOpacity(0.5);
      layer.setVisible(false);
      expect(opacity).to.have.been.calledOnce;
      expect(visible).to.have.been.calledOnce;
      interaction.remove();
      interaction.remove();
      changed.resetHistory();
      opacity.resetHistory();
      visible.resetHistory();
      interaction.selectedFids = ["removed"];
      target.dispatchEvent(new Event("pointerleave"));
      map.setTarget(originalTarget);
      originalTarget.dispatchEvent(new Event("pointerleave"));
      layer.setOpacity(1);
      layer.setVisible(true);
      expect(changed).not.to.have.been.called;
      expect(opacity).not.to.have.been.called;
      expect(visible).not.to.have.been.called;
      expect(interaction.selectedFids).to.deep.equal(["removed"]);
      expect(count(map, "change:target")).to.equal(targetCount);
      expect(count(layer, "change:opacity")).to.equal(opacityCount);
      expect(count(layer, "change:visible")).to.equal(visibleCount);
      expect(count(group, "change")).to.equal(groupCount);
    }
    target.remove();
  });
};

/** Late source load events must not restore a removed style layer. */
export const selectDeferredSubscriptionCleanup = () => {
  cy.mount(html`<eox-map .layers=${[]}></eox-map>`);
  cy.get("eox-map").then(([eoxMap]) => {
    const source = new VectorSource();
    const layer = new VectorLayer({ source });
    layer.set("_jsonDefinition", { type: "Vector" });
    const interaction = new EOxSelectInteraction(eoxMap, layer, {
      id: "deferred",
      tooltip: false,
    });
    const setMap = cy.spy(interaction.selectStyleLayer, "setMap");
    interaction.remove();
    setMap.resetHistory();
    source.dispatchEvent("featuresloadend");
    source.dispatchEvent("featuresloaderror");
    expect(setMap).not.to.have.been.called;
    expect(source.hasListener("featuresloadend")).to.equal(false);
    expect(source.hasListener("featuresloaderror")).to.equal(false);
  });
};
