import { html } from "lit";

/**
 * Tests to parse `zoom` and `center` properties
 */
const parseProperties = () => {
  cy.mount(
    html`<eox-map
      .layers=${[
        { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
      ]}
      .zoom=${7}
      .center=${[1113194, 2273030]}
    ></eox-map>`,
  ).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const zoom = eoxMap.map.getView().getZoom();
    const center = eoxMap.map.getView().getCenter();
    expect(eoxMap.zoom).to.equal(zoom);
    expect(eoxMap.map.getView().getZoom()).to.equal(zoom);
    expect(eoxMap.center).to.deep.equal(center);
    expect(eoxMap.map.getView().getCenter()).to.deep.equal(center);

    eoxMap.zoom = 2;
    expect(eoxMap.map.getView().getZoom()).to.equal(2);

    const newCenter = [1113195, 2273031];
    eoxMap.center = newCenter;
    expect(eoxMap.map.getView().getCenter()).to.deep.equal(newCenter);
  });
};

export default parseProperties;
