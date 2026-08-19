import { html } from "lit";
import schemaFixture from "../fixtures/rasterformBranchingSchema.json";

/**
 * Updates URL parameters with given form values
 *
 * @param {string} url
 * @param {Record<string, any>} values
 * @returns {string}
 */
function updateUrl(url, values) {
  const parsedUrl = new URL(url);
  Object.entries(values).forEach(([key, value]) => {
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      Object.keys(value).forEach((k) => {
        parsedUrl.searchParams.set(k, value[k]);
      });
    } else if (Array.isArray(value)) {
      parsedUrl.searchParams.delete(key);
      value.forEach((v) => {
        parsedUrl.searchParams.append(key, v);
      });
    } else {
      parsedUrl.searchParams.set(key, value);
    }
  });
  return parsedUrl.href;
}

/**
 * Test switching between anyOf branches with minmax sliders and checking default values and source URL
 */
const loadMinMaxBranchSwitchTest = () => {
  cy.intercept("**/mock-rasterform-schema.json", (req) => {
    req.reply(schemaFixture);
  });

  const baseUrl =
    "https://example.com/{z}/{x}/{y}?assets=HH&rescale=0,0.05&colormap_name=gray";
  let currentSourceUrl = baseUrl;

  cy.mount(
    html`<eox-jsonform
      .schema=${"/mock-rasterform-schema.json"}
      @change=${(/** @type {CustomEvent<Record<string, any>>} */ e) => {
        currentSourceUrl = updateUrl(baseUrl, e.detail);
      }}
    ></eox-jsonform>`,
  );

  cy.get("eox-jsonform").should(([$el]) => {
    expect($el.editor).to.not.be.undefined;
  });

  // Verify initial branch (HH)
  cy.get("eox-jsonform")
    .shadow()
    .within(() => {
      cy.get("tc-range-slider")
        .should("have.attr", "step", "0.005")
        .and("have.attr", "round", "3")
        .and("have.attr", "value1", "0")
        .and("have.attr", "value2", "0.05");
    });

  // Switch to HV branch in anyOf selector
  cy.get("eox-jsonform")
    .shadow()
    .within(() => {
      cy.get("select").first().select("HV");
    });

  // Verify switched branch (HV) slider attributes
  cy.get("eox-jsonform")
    .shadow()
    .within(() => {
      cy.get("tc-range-slider:visible")
        .should("have.attr", "step", "0.0005")
        .and("have.attr", "round", "4")
        .and("have.attr", "value1", "0")
        .and("have.attr", "value2", "0.005");
    });

  // Verify form values and updated source URL
  cy.get("eox-jsonform").should(([$el]) => {
    expect($el.value.assets).to.eq("HV");
    expect($el.value.vminmax.vmin).to.eq(0);
    expect($el.value.vminmax.vmax).to.eq(0.005);
    expect($el.value.rescale).to.eq("0,0.005");

    const decodedUrl = decodeURIComponent(currentSourceUrl);
    expect(decodedUrl).to.include("assets=HV");
    expect(decodedUrl).to.include("rescale=0,0.005");
  });
};

export default loadMinMaxBranchSwitchTest;
