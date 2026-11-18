import { html } from "lit";
import lightningClusterFixture from "../../fixtures/lightning_cluster.json";

const LIGHTNING_URL = "https://example.test/lightning_cluster.json";

/**
 * adding a select interaction on a Vector layer must not fire a
 * second request for the shared source while it is still loading.
 */
const noDuplicateVectorLoad = () => {
  let requestCount = 0;
  cy.intercept("GET", LIGHTNING_URL, (req) => {
    requestCount++;
    // large fixture to ensure the request takes long enough to trigger the duplicate load if it were to happen
    req.reply(lightningClusterFixture);
  }).as("loadVector");

  const layers = [
    {
      type: "Vector",
      properties: { id: "lightning" },
      source: {
        type: "Vector",
        url: LIGHTNING_URL,
        format: "GeoJSON",
      },
      interactions: [
        {
          type: "select",
          options: {
            id: "selectInteraction",
            condition: "click",
          },
        },
      ],
    },
  ];

  cy.mount(html`<eox-map .layers=${layers}></eox-map>`).as("eox-map");
  cy.wait("@loadVector");
  cy.get("eox-map").then(
    ($el) =>
      new Promise((resolve) => {
        $el[0].map.once("loadend", resolve);
      }),
  );
  cy.then(() => {
    expect(requestCount, "vector source fetched exactly once").to.equal(1);
  });
};

export default noDuplicateVectorLoad;
