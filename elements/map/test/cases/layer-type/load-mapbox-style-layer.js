import { html } from "lit";
import mapboxStyleLayerJson from "../../fixtures/mapboxStyleLayer.json";
import mapboxStyleLayerWithOsm from "../../fixtures/mapboxStyleLayerWithOsm.json";

/**
 * Tests to load mapbox-style layer
 */
const loadMapboxStyleLayer = () => {
  cy.mount(html`<eox-map .layers=${mapboxStyleLayerJson}></eox-map>`).as(
    "eox-map",
  );
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const layers = eoxMap.map.getLayers().getArray();
    expect(layers, "loads a mapbox layer").to.have.length(1);
    const features = layers[0]
      .getLayers()
      .getArray()[0]
      .getSource()
      .getFeatures();
    expect(
      features,
      "adds features defined in mapbox style synchronously",
    ).to.have.length(1);

    eoxMap.layers = mapboxStyleLayerWithOsm;

    const newLayers = eoxMap.map
      .getLayers()
      .getArray()[0]
      .getLayers()
      .getArray();
    expect(newLayers, "updates a mapbox layer").to.have.length(2);
    expect(
      newLayers[1].getSource().getFeatures(),
      "updates the sources of mapbox layers",
    ).to.have.length(2);
  });
};

export default loadMapboxStyleLayer;
