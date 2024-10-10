import { html } from "lit";
import { equals } from "ol/coordinate";

/**
 * Tests to check parsed `lon`, `lat` and `center` of web mercator
 */
const checkParsedLonLatCenter = () => {
  cy.mount(html`<eox-map .zoom=${7} .center=${[20, 20]}></eox-map>`).as(
    "eox-map"
  );
  cy.get("eox-map").and(($el) => {
    expect(
      equals(
        $el[0].map.getView().getCenter(),
        [2226389.8158654715, 2273030.926987689]
      ),
      "parse lon lat center"
    ).to.be.true;
  });
};

export default checkParsedLonLatCenter;
