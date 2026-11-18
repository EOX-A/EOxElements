import {
  translateOLColorExpression,
  translateOLColorScale,
} from "../../../src/plugins/globe/colorScale.js";

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

  // 1b. Runtime override of variables
  const res1Updated = translateOLColorExpression(globeStoryStyle, {
    vmin: 10,
    vmax: 100,
  });
  expect(res1Updated.domain).to.deep.equal([10, 100]);

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

  // 7. Named colormap string
  const res7 = translateOLColorExpression("inferno");
  expect(res7.colorScale).to.equal("inferno");
  expect(res7.domain).to.deep.equal([0, 1]);

  // 8. Alias check
  expect(translateOLColorScale).to.equal(translateOLColorExpression);
};
