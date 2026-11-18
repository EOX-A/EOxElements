import { base64EncodeSpec, parseSpec } from "../../src/main";

/**
 * Test case for encoding and decoding large specs exceeding JS call stack limit.
 */
const base64LargeSpecTest = () => {
  // Generate a large data array (>100KB) to exceed the call stack limit of String.fromCharCode.apply
  const largeData = Array.from({ length: 3000 }, (_, i) => ({
    id: i,
    label: `Record-${i}-long-string-identifier-value`,
    value: Math.random() * 1000,
    timestamp: new Date(2025, 0, 1, 0, i).toISOString(),
  }));

  /** @type {import("vega-embed").VisualizationSpec} */
  const largeSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    data: { values: largeData },
    mark: "line",
    encoding: {
      x: { field: "timestamp", type: "temporal" },
      y: { field: "value", type: "quantitative" },
    },
  };

  const encoded = base64EncodeSpec(largeSpec);
  expect(typeof encoded).to.eq("string");
  expect(encoded.length).to.be.greaterThan(100000);

  const decoded = parseSpec(encoded);
  expect(decoded).to.deep.equal(largeSpec);
};

export default base64LargeSpecTest;
