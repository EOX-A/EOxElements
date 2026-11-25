import { GeoTIFFLayer } from "@openglobus/og";
import {
  translateOLColorExpression,
  translateOLColorScale,
} from "../../../src/plugins/globe/colorScale.js";

/**
 * Value og colours for a pixel, or null when og hides it.
 *
 * @param {any} result Translated render options.
 * @param {Record<string, number>} bands Band values, e.g. `{ b1: 3 }`.
 */
const renderedValue = ({ single }, bands) => {
  const value = single.expression
    ? new Function(...Object.keys(bands), `return (${single.expression});`)(
        ...Object.values(bands),
      )
    : bands[`b${single.band}`];
  const [low, high] = single.displayRange ?? [-Infinity, Infinity];
  return value < low || value > high ? null : value;
};

/**
 * Colour of the class stop nearest to a value.
 *
 * @param {any} result Translated render options.
 * @param {number} value
 */
const colorAt = ({ single }, value) => {
  const [min, max] = single.domain;
  const distance = ([stop]) => Math.abs(stop - (value - min) / (max - min));
  return single.colors.reduce((nearest, stop) =>
    distance(stop) < distance(nearest) ? stop : nearest,
  )[1];
};

/**
 * Tests translating OpenLayers color expressions into OpenGlobus ColorScale and renderOptions.
 */
export const testTranslateColorExpression = () => {
  // 1. Globe story style with variables and Viridis colormap
  const globeStoryStyle = {
    variables: { vmin: 2, vmax: 5, settlementDistance: 0 },
    color: [
      "case",
      [
        "all",
        [">", ["band", 1], 1],
        [">=", ["band", 2], ["var", "settlementDistance"]],
      ],
      [
        "interpolate",
        ["linear"],
        [
          "/",
          ["-", ["band", 1], ["var", "vmin"]],
          ["-", ["var", "vmax"], ["var", "vmin"]],
        ],
        0,
        [68, 1, 84, 1],
        0.5,
        [33, 144, 141, 1],
        1,
        [253, 231, 37, 1],
      ],
      ["color", 0, 0, 0, 0],
    ],
  };

  const res1 = translateOLColorExpression(globeStoryStyle);
  expect(res1.band).to.equal(1);
  expect(res1.domain).to.deep.equal([2, 5]);
  expect(res1.displayRange).to.deep.equal([1, Infinity]);
  expect(res1.colorScale).to.equal("viridis");
  expect(res1.colors).to.have.length(3);
  expect(res1.colors[0][0]).to.equal(0);
  expect(res1.colors[0][1]).to.equal("rgba(68, 1, 84, 1)");
  expect(res1.colors[2][0]).to.equal(1);
  expect(res1.colors[2][1]).to.equal("rgba(253, 231, 37, 1)");
  expect(res1.single.band).to.equal(1);
  expect(res1.single.domain).to.deep.equal([2, 5]);
  // The band 2 condition masks inside the expression.
  expect(renderedValue(res1, { b1: 3, b2: 1 })).to.equal(3);
  expect(renderedValue(res1, { b1: 3, b2: -1 })).to.equal(null);
  expect(renderedValue(res1, { b1: 0.5, b2: 1 })).to.equal(null);

  // 1b. Runtime override of variables
  const res1Updated = translateOLColorExpression(globeStoryStyle, {
    vmin: 10,
    vmax: 100,
  });
  expect(res1Updated.domain).to.deep.equal([10, 100]);
  const res1Distance = translateOLColorExpression(globeStoryStyle, {
    settlementDistance: 2,
  });
  expect(renderedValue(res1Distance, { b1: 3, b2: 1 })).to.equal(null);

  // 2. Multi-band RGB composite with nodata check
  const rgbStyle = {
    color: [
      "case",
      [
        "any",
        ["==", ["band", 1], 0],
        ["==", ["band", 2], 0],
        ["==", ["band", 3], 0],
      ],
      "#00000000",
      [
        "array",
        ["/", ["band", 1], 255],
        ["/", ["band", 2], 255],
        ["/", ["band", 3], 255],
        1,
      ],
    ],
  };

  const res2 = translateOLColorExpression(rgbStyle);
  expect(res2.nodata).to.equal(0);
  expect(res2.multi).to.exist;
  expect(res2.multi.r).to.deep.equal({ band: 1, min: 0, max: 255 });
  expect(res2.multi.g).to.deep.equal({ band: 2, min: 0, max: 255 });
  expect(res2.multi.b).to.deep.equal({ band: 3, min: 0, max: 255 });
  expect(res2.convertToRGB).to.be.true;

  // 2b. Affine RGB channels map to the band range
  const res2b = translateOLColorExpression({
    variables: { vmin: 10, vmax: 110 },
    color: [
      "color",
      [
        "*",
        255,
        [
          "/",
          ["-", ["band", 1], ["var", "vmin"]],
          ["-", ["var", "vmax"], ["var", "vmin"]],
        ],
      ],
      ["interpolate", ["linear"], ["band", 2], 0, 0, 3000, 255],
      [
        "interpolate",
        ["linear"],
        ["-", ["*", ["band", 3], 0.0001], 0.1],
        0,
        0,
        0.3,
        255,
      ],
      1,
    ],
  });
  expect(res2b.multi.r.band).to.equal(1);
  expect(res2b.multi.r.min).to.be.closeTo(10, 1e-6);
  expect(res2b.multi.r.max).to.be.closeTo(110, 1e-6);
  expect(res2b.multi.g).to.deep.equal({ band: 2, min: 0, max: 3000 });
  expect(res2b.multi.b.band).to.equal(3);
  expect(res2b.multi.b.min).to.be.closeTo(1000, 1e-6);
  expect(res2b.multi.b.max).to.be.closeTo(4000, 1e-6);

  // 2c. RGB ramps with more stops stretch from the first to the last stop
  const res2c = translateOLColorExpression([
    "color",
    ["interpolate", ["linear"], ["band", 1], 0, 0, 100, 200, 1000, 255],
    ["band", 2],
    ["band", 3],
    1,
  ]);
  expect(res2c.multi.r.min).to.be.closeTo(0, 1e-6);
  expect(res2c.multi.r.max).to.be.closeTo(1000, 1e-6);

  // 3. Cross-band math expression (NDVI)
  const ndviStyle = {
    color: [
      "interpolate",
      ["linear"],
      ["/", ["-", ["band", 4], ["band", 3]], ["+", ["band", 4], ["band", 3]]],
      -0.2,
      [0, 0, 0, 1],
      0.8,
      [0, 255, 0, 1],
    ],
  };

  const res3 = translateOLColorExpression(ndviStyle);
  expect(res3.expression).to.equal("(b4 - b3) / (b4 + b3)");
  expect(res3.domain).to.deep.equal([-0.2, 0.8]);
  expect(res3.colors[0][0]).to.equal(0);
  expect(res3.colors[0][1]).to.equal("rgba(0, 0, 0, 1)");
  expect(res3.colors[1][0]).to.equal(1);
  expect(res3.colors[1][1]).to.equal("rgba(0, 255, 0, 1)");

  // 3b. Single-band arithmetic is kept as an expression
  const res3b = translateOLColorExpression([
    "interpolate",
    ["linear"],
    ["*", ["band", 1], 0.01],
    0,
    "black",
    1,
    "white",
  ]);
  expect(renderedValue(res3b, { b1: 50 })).to.equal(0.5);

  // 3b2. OL `atan` with two arguments is atan2
  const direction = translateOLColorExpression([
    "interpolate",
    ["linear"],
    ["atan", ["band", 1], ["band", 2]],
    0,
    "black",
    1,
    "white",
  ]);
  expect(renderedValue(direction, { b1: 1, b2: -1 })).to.be.closeTo(
    Math.atan2(1, -1),
    1e-12,
  );

  // 3c. Arithmetic inside a normalized input is kept
  const offsetBand = translateOLColorExpression({
    variables: { vmin: -20, vmax: 45 },
    color: [
      "case",
      ["<=", ["band", 1], 0],
      [0, 0, 0, 0],
      [
        "interpolate",
        ["linear"],
        [
          "/",
          ["-", ["-", ["band", 1], 273.15], ["var", "vmin"]],
          ["-", ["var", "vmax"], ["var", "vmin"]],
        ],
        0,
        [0, 7, 40, 1],
        1,
        [255, 0, 0, 1],
      ],
    ],
  });
  expect(offsetBand.domain).to.deep.equal([-20, 45]);
  expect(renderedValue(offsetBand, { b1: 300 })).to.be.closeTo(26.85, 1e-9);
  expect(renderedValue(offsetBand, { b1: 0 })).to.equal(null);

  // 3d. A band subtracted from a constant is no normalized band
  const invertedBand = translateOLColorExpression([
    "interpolate",
    ["linear"],
    ["/", ["-", 1, ["band", 1]], 2],
    0,
    "black",
    1,
    "white",
  ]);
  expect(renderedValue(invertedBand, { b1: 0.5 })).to.equal(0.25);

  // 4. Raw band interpolate with data range
  const rawBandStyle = [
    "interpolate",
    ["linear"],
    ["band", 1],
    10,
    "#000000",
    50,
    "#ffffff",
  ];

  const res4 = translateOLColorExpression(rawBandStyle);
  expect(res4.band).to.equal(1);
  expect(res4.domain).to.deep.equal([10, 50]);
  expect(res4.colors[0]).to.deep.equal([0, "#000000"]);
  expect(res4.colors[1]).to.deep.equal([1, "#ffffff"]);

  // 4a. Named colours become rgba, og draws them black; no nodata guess
  const res4a = translateOLColorExpression([
    "interpolate",
    ["linear"],
    ["band", 1],
    10,
    "red",
    50,
    "blue",
  ]);
  expect(res4a.colors[0]).to.deep.equal([0, "rgba(255, 0, 0, 1)"]);
  expect(res4a).not.to.have.property("nodata");

  // 4b. Band chosen by variables
  const bandOf = (band, variables) =>
    translateOLColorExpression(
      ["interpolate", ["linear"], ["band", band], 0, "black", 1, "white"],
      variables,
    ).band;
  expect(bandOf(["var", "b"], { b: 3 })).to.equal(3);
  expect(
    bandOf(["match", ["var", "layer"], "lst", 1, "ndvi", 2, 1], {
      layer: "ndvi",
    }),
  ).to.equal(2);
  // An unset band variable without an alpha band is no constant alpha value
  expect(
    translateOLColorExpression([
      "interpolate",
      ["linear"],
      ["band", ["var", "b"]],
      0,
      "black",
      1,
      "white",
    ]).expression,
  ).to.equal(undefined);

  // 4c. Band picked by a string variable inside the expression
  const selectedBand = [
    "match",
    ["var", "mode"],
    "a",
    ["band", 1],
    "b",
    ["band", 2],
    ["band", 1],
  ];
  const bandByVariable = translateOLColorExpression({
    variables: { mode: "b" },
    color: [
      "case",
      ["<=", selectedBand, -9000],
      [0, 0, 0, 0],
      ["interpolate", ["linear"], selectedBand, 0, "blue", 50, "red"],
    ],
  });
  expect(renderedValue(bandByVariable, { b2: 30 })).to.equal(30);
  expect(renderedValue(bandByVariable, { b2: -9999 })).to.equal(null);

  // 5. Palette expression
  const paletteStyle = [
    "palette",
    ["band", 1],
    ["#000000", "#ff0000", "#00ff00"],
  ];
  const res5 = translateOLColorExpression(paletteStyle);
  expect(res5.band).to.equal(1);
  expect(res5.domain).to.deep.equal([0, 2]);
  expect(res5.colors).to.have.length(3);
  expect(res5.colors[0][0]).to.equal(0);
  expect(res5.colors[1][0]).to.equal(0.5);
  expect(res5.colors[2][0]).to.equal(1);

  // 5b. A palette inside a case keeps the band range
  const maskedPalette = translateOLColorExpression([
    "case",
    [">", ["band", 1], 0],
    paletteStyle,
    "transparent",
  ]);
  expect(maskedPalette.displayRange).to.deep.equal([0, Infinity]);

  // 6. Match expression
  const matchStyle = [
    "match",
    ["band", 1],
    1,
    "#ff0000",
    2,
    "#00ff00",
    "#00000000",
  ];
  const res6 = translateOLColorExpression(matchStyle);
  expect(res6.band).to.equal(1);
  expect(res6.domain).to.deep.equal([1, 2]);
  expect(res6.colors).to.have.length(2);

  // 6a. Categorical match: one colour per class, transparent fallback hidden
  const matchClasses = translateOLColorExpression([
    "match",
    ["band", 1],
    10,
    "red",
    20,
    "#00ff00",
    "#00000000",
  ]);
  const matchClassOf = (b1) => renderedValue(matchClasses, { b1 });
  expect(colorAt(matchClasses, matchClassOf(10))).to.equal(
    "rgba(255, 0, 0, 1)",
  );
  expect(colorAt(matchClasses, matchClassOf(20))).to.equal("#00ff00");
  expect(matchClassOf(15)).to.equal(null);

  // 6b. Categorical case with constant colours and `in`
  const caseClasses = translateOLColorExpression({
    color: [
      "case",
      ["==", ["band", 1], 0],
      "transparent",
      ["<=", ["band", 1], 30],
      "blue",
      ["in", ["band", 1], [50, 60]],
      "#00ff00",
      "red",
    ],
  });
  const caseClassOf = (b1) => renderedValue(caseClasses, { b1 });
  expect(caseClassOf(0)).to.equal(null);
  expect(colorAt(caseClasses, caseClassOf(20))).to.equal("rgba(0, 0, 255, 1)");
  expect(colorAt(caseClasses, caseClassOf(60))).to.equal("#00ff00");
  expect(colorAt(caseClasses, caseClassOf(40))).to.equal("rgba(255, 0, 0, 1)");

  // 6b2. `in` with an OL literal list
  const literalClasses = translateOLColorExpression([
    "case",
    ["in", ["band", 1], ["literal", [1, 2]]],
    "red",
    "transparent",
  ]);
  expect(renderedValue(literalClasses, { b1: 2 })).to.equal(1);
  expect(renderedValue(literalClasses, { b1: 3 })).to.equal(null);

  // 6c. Nested categorical case per band 2 class
  const nestedClasses = translateOLColorExpression({
    color: [
      "case",
      ["<=", ["band", 1], 0],
      [0, 0, 0, 0],
      ["==", ["band", 2], 1],
      [
        "case",
        ["in", ["band", 1], [850, 852]],
        [205, 133, 63, 1],
        [0, 0, 0, 0],
      ],
      ["==", ["band", 2], 2],
      ["case", ["==", ["band", 1], 1], [46, 139, 87, 1], [0, 0, 0, 0]],
      [0, 0, 0, 0],
    ],
  });
  const nestedClassesColor = (b1, b2) => {
    const value = renderedValue(nestedClasses, { b1, b2 });
    return value === null ? null : colorAt(nestedClasses, value);
  };
  expect(nestedClassesColor(850, 1)).to.equal("rgba(205, 133, 63, 1)");
  expect(nestedClassesColor(1, 2)).to.equal("rgba(46, 139, 87, 1)");
  expect(nestedClassesColor(1, 1)).to.equal(null);

  // 7. Named colormap string
  const res7 = translateOLColorExpression("inferno");
  expect(res7.colorScale).to.equal("inferno");
  expect(res7.domain).to.deep.equal([0, 1]);

  // 8. Alias check
  expect(translateOLColorScale).to.equal(translateOLColorExpression);

  // 9. Conditions on the OL alpha band are dropped; og has no alpha band
  const res9 = translateOLColorExpression(
    {
      color: [
        "case",
        [">", ["band", 2], 0],
        ["interpolate", ["linear"], ["band", 1], 0, "black", 10, "white"],
        "transparent",
      ],
    },
    {},
    2,
  );
  expect(res9.single.expression ?? "").not.to.contain("b2");
  expect(renderedValue(res9, { b1: 5 })).to.equal(5);

  // 9b. An alpha band mask never becomes nodata
  const alphaMasked = translateOLColorExpression(
    {
      color: [
        "case",
        ["==", ["band", 4], 0],
        "transparent",
        [
          "array",
          ["/", ["band", 1], 255],
          ["/", ["band", 2], 255],
          ["/", ["band", 3], 255],
          1,
        ],
      ],
    },
    {},
    4,
  );
  expect(alphaMasked.multi).to.exist;
  expect(alphaMasked).not.to.have.property("nodata");

  // 10. Injection: only bands, numbers and known operators reach og's Function
  const warn = cy.stub(console, "warn");
  [
    ["*", ["band", "1);alert(1"], 2],
    ["+", ["band", 1], "alert(1)"],
    ["+", ["band", 1], ["var", "x;alert(1)"]],
    ["alert", ["band", 1]],
  ].forEach((input) => {
    const { single } = translateOLColorExpression([
      "interpolate",
      ["linear"],
      input,
      0,
      "black",
      1,
      "white",
    ]);
    expect(single.expression ?? "").not.to.contain("alert");
  });
  expect(warn).to.have.been.called;
};

/**
 * Tests that og hides nodata, NaN and masked pixels of a translated categorical
 * style, and keeps the first class visible when the file nodata is 0.
 */
export const testGeoTIFFMaskRendering = () => {
  /**
   * Renders one row of band 1 values with og, file nodata 0.
   * Private og API: renders rasters without loading a file.
   *
   * @param {any} style OL color expression
   * @param {number[]} values
   */
  const render = (style, values) =>
    /** @type {any} */ (
      new GeoTIFFLayer("mask", {
        src: new ArrayBuffer(0),
        renderOptions: { ...translateOLColorExpression(style), nodata: 0 },
      })
    )._renderToImageData({
      rasters: [Float32Array.from(values)],
      width: values.length,
      height: 1,
    }).data;

  const data = render(
    ["match", ["band", 1], 10, "red", 20, "blue", "transparent"],
    [0, NaN, 15, 10, 20],
  );
  const alpha = (pixel) => data[4 * pixel + 3];
  expect([0, 1, 2].map(alpha)).to.deep.equal([0, 0, 0]);
  expect(data[4 * 3]).to.be.greaterThan(200);
  expect(alpha(3)).to.be.greaterThan(0);
  expect(data[4 * 4 + 2]).to.be.greaterThan(200);
  expect(alpha(4)).to.be.greaterThan(0);

  // og's 256-entry colour table must not blend neighbouring classes
  const classes = Array.from({ length: 11 }, (_, i) => i + 1);
  const red = (k) => (k % 2) * 255;
  const pixels = render(
    [
      "match",
      ["band", 1],
      ...classes.flatMap((k) => [k * 10, [red(k), 0, 0, 1]]),
      "transparent",
    ],
    classes.map((k) => k * 10),
  );
  expect(classes.map((_, i) => pixels[4 * i])).to.deep.equal(classes.map(red));
};
