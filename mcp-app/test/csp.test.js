import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  buildEoxCspMeta,
  DEFAULT_EOX_CSP_CONNECT_DOMAINS,
  DEFAULT_EOX_CSP_RESOURCE_DOMAINS,
} from "../src/index.js";

describe("buildEoxCspMeta", () => {
  it("returns compliant _meta.ui.csp with default EOX basemap origins, blob:, and data:", () => {
    const meta = buildEoxCspMeta();

    assert.ok(meta.ui);
    assert.ok(meta.ui.csp);
    assert.deepEqual(meta.ui.csp.connectDomains, [
      ...DEFAULT_EOX_CSP_CONNECT_DOMAINS,
    ]);
    assert.deepEqual(meta.ui.csp.resourceDomains, [
      ...DEFAULT_EOX_CSP_RESOURCE_DOMAINS,
    ]);
    assert.ok(
      meta.ui.csp.resourceDomains.includes("https://tiles.maps.eox.at"),
    );
    assert.ok(meta.ui.csp.resourceDomains.includes("https://s2maps-tiles.eu"));
    assert.ok(meta.ui.csp.resourceDomains.includes("blob:"));
    assert.ok(meta.ui.csp.resourceDomains.includes("data:"));
  });

  it("merges and deduplicates caller-supplied STAC and TiTiler origin arrays", () => {
    const meta = buildEoxCspMeta([
      "https://earth-search.aws.element84.com",
      " https://titiler.xyz ",
      "https://tiles.maps.eox.at",
      "",
    ]);

    assert.deepEqual(meta.ui.csp.connectDomains, [
      "https://tiles.maps.eox.at",
      "https://s2maps-tiles.eu",
      "https://earth-search.aws.element84.com",
      "https://titiler.xyz",
    ]);
    assert.deepEqual(meta.ui.csp.resourceDomains, [
      "https://tiles.maps.eox.at",
      "https://s2maps-tiles.eu",
      "blob:",
      "data:",
      "https://earth-search.aws.element84.com",
      "https://titiler.xyz",
    ]);
  });

  it("supports a single origin string", () => {
    const meta = buildEoxCspMeta("https://stac.eox.at");
    assert.ok(meta.ui.csp.connectDomains.includes("https://stac.eox.at"));
    assert.ok(meta.ui.csp.resourceDomains.includes("https://stac.eox.at"));
  });

  it("supports granular options object including prefersBorder and domain", () => {
    const meta = buildEoxCspMeta({
      includeBasemaps: false,
      connectDomains: ["https://api.example.com"],
      resourceDomains: ["https://cdn.example.com"],
      frameDomains: ["https://embed.example.com"],
      baseUriDomains: ["https://base.example.com"],
      prefersBorder: true,
      domain: "viewer.example.com",
    });

    assert.deepEqual(meta, {
      ui: {
        csp: {
          connectDomains: ["https://api.example.com"],
          resourceDomains: ["https://cdn.example.com"],
          frameDomains: ["https://embed.example.com"],
          baseUriDomains: ["https://base.example.com"],
        },
        prefersBorder: true,
        domain: "viewer.example.com",
      },
    });
  });
});
