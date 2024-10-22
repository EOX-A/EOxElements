import { html } from "lit";

/**
 * Tests to check lonLatExtent delivering correct WGS coordinates
 */
const getWgsCoordinates = () => {
  cy.mount(html`<eox-map .layers=${[]}></eox-map>`).as("eox-map");

  cy.get("eox-map").then(($el) => {
    return new Cypress.Promise((resolve) => {
      const eoxMap = $el[0];
      eoxMap.registerProjection(
        "EPSG:32633",
        "+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs +type=crs",
      );
      eoxMap.setAttribute("projection", "EPSG:32633");

      eoxMap.zoomExtent = [
        392701.77019148885, 5265405.179340378, 406068.14557063236,
        5275429.960874735,
      ]; // hallstatt in 32633

      // timeout because setting zoomExtent causes debounced animation
      setTimeout(() => {
        expect(
          eoxMap.lonLatExtent.map((n) => n.toFixed(4)),
          "getter of lonLatExtent",
        ).to.be.deep.equal(["13.5719", "47.5332", "13.7519", "47.6255"]);
        resolve();
      }, 10);
    });
  });
};

export default getWgsCoordinates;
