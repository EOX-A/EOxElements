import { html } from "lit";
import { Entity } from "@openglobus/og";
import Feature from "ol/Feature.js";
import VectorLayer from "ol/layer/Vector.js";
import Point from "ol/geom/Point.js";
import Polygon from "ol/geom/Polygon.js";
import { translateOLStyleExpressions } from "../../../src/plugins/globe/openglobus.js";
import {
  highlightGlobeEntity,
  resetGlobeEntity,
} from "../../../src/plugins/globe/select.js";

const polygon = new Polygon([
  [
    [0, 0],
    [10, 0],
    [10, 10],
    [0, 0],
  ],
]);
const point = new Point([0, 0]);
const svg =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'/>";

/**
 * @param {any} style - OL flat style.
 * @param {Record<string, any>} properties
 * @param {import("ol/geom/Geometry").default} geometry
 */
const translate = (style, properties, geometry = polygon) =>
  translateOLStyleExpressions(
    new VectorLayer({ style }).getStyleFunction(),
    new Feature({ geometry, ...properties }),
  );

/** @param {number[]} actual @param {number[]} expected */
const expectColor = (actual, expected) =>
  expected.forEach((value, i) => expect(actual[i]).to.be.closeTo(value, 0.01));

/**
 * Tests that OL vector styles, resolved by OL as in 2D, translate into
 * OpenGlobus geometry, billboard and label options.
 */
export const testTranslateVectorStyle = () => {
  const rules = [
    {
      filter: ["==", ["get", "kind"], "a"],
      style: { "fill-color": "#ff000080" },
    },
    {
      else: true,
      style: { "fill-color": "blue", "stroke-color": "red", "stroke-width": 0 },
    },
  ];
  expectColor(
    translate(rules, { kind: "a" }).geometry.fillColor,
    [1, 0, 0, 0.5],
  );
  const other = translate(rules, { kind: "b" }).geometry;
  expectColor(other.fillColor, [0, 0, 1, 1]);
  expect(other.lineColor[3]).to.equal(0);

  // A later style's stroke merges with an earlier fill; "none" adds no fill.
  const merged = translate(
    [
      { "fill-color": "blue" },
      { "fill-color": "none", "stroke-color": "red", "stroke-width": 2 },
    ],
    {},
  ).geometry;
  expectColor(merged.fillColor, [0, 0, 1, 1]);
  expectColor(merged.lineColor, [1, 0, 0, 1]);
  expect(merged.lineWidth).to.equal(2);
  expect(translate({ "fill-color": "none" }, {}).geometry).to.equal(undefined);
  expect(
    translateOLStyleExpressions(undefined, new Feature(polygon)),
  ).to.deep.equal({});

  const byType = [
    {
      filter: ["==", ["geometry-type"], "Point"],
      style: { "circle-radius": 6, "circle-fill-color": "red" },
    },
    { else: true, style: { "fill-color": "blue" } },
  ];
  const circle = translate(byType, {}, point).billboard;
  expect(circle.src).to.match(/^data:image\/png/);
  expect(translate(byType, {}, point).billboard.src).to.equal(circle.src);
  expect(translate(byType, {}).billboard).to.equal(undefined);

  expect(translate({ "icon-src": svg }, {}, point).billboard.src).to.equal(svg);

  const { label } = translate(
    {
      "text-value": ["concat", ["to-string", ["get", "v"]], "%"],
      "text-font": "bold 14px sans-serif",
      "text-fill-color": "#00ff00",
      "text-offset-x": 5,
      "text-offset-y": 10,
      "text-align": "end",
    },
    { v: 12 },
    point,
  );
  expect(label).to.include({ text: "12%", size: 14, align: "right" });
  expectColor(label.color, [0, 1, 0, 1]);
  expect(label.offset).to.deep.equal([5, -10]);
};

/**
 * Tests that a highlighted point swaps its billboard image and gets it back on reset.
 */
export const testGlobePointHighlight = () => {
  const { billboard } = translate(
    { "circle-radius": 6, "circle-fill-color": "red" },
    {},
    point,
  );
  const entity = /** @type {any} */ (
    new Entity({ lonlat: [0, 0], billboard, properties: {} })
  );

  highlightGlobeEntity(entity, {
    "circle-radius": 10,
    "circle-fill-color": "blue",
  });
  expect(entity.billboard.getSrc()).to.match(/^data:image\/png/);
  expect(entity.billboard.getSrc()).not.to.equal(billboard.src);

  resetGlobeEntity(entity);
  expect(entity.billboard.getSrc()).to.equal(billboard.src);
};

/**
 * Tests that a GeoJSON vector layer renders multi-points, polygons and labels on
 * the globe, selects with the feature id, and follows `setStyle`, also for
 * features a style hid before.
 */
export const testGlobeVectorLayer = () => {
  const symbolRules = [
    {
      filter: ["!=", ["geometry-type"], "Polygon"],
      style: { "circle-radius": 6, "circle-fill-color": "red" },
    },
    {
      else: true,
      style: { "fill-color": "blue", "text-value": ["get", "name"] },
    },
  ];
  cy.intercept("**/globe-vector.json", {
    body: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          id: "p1",
          properties: { name: "P" },
          geometry: {
            type: "MultiPoint",
            coordinates: [
              [16, 48],
              [15, 47],
            ],
          },
        },
        {
          type: "Feature",
          id: "a1",
          properties: { name: "Austria" },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [10, 46],
                [17, 46],
                [17, 49],
                [10, 49],
                [10, 46],
              ],
            ],
          },
        },
      ],
    },
  });
  cy.mount(
    html`<eox-map
      .layers=${[
        {
          type: "Vector",
          properties: { id: "vectors" },
          source: {
            type: "Vector",
            url: "/globe-vector.json",
            format: "GeoJSON",
          },
          style: symbolRules,
          interactions: [
            { type: "select", options: { id: "sel", condition: "click" } },
          ],
        },
      ]}
      .projection=${"globe"}
    ></eox-map>`,
  ).as("eox-map");

  /** @param {any} eoxMap */
  const entities = (eoxMap) =>
    eoxMap.globe?.planet.getLayerByName("vectors")?.getEntities?.() || [];
  /** @param {any[]} all */
  const polygonEntity = (all) => all.find((e) => e.geometry);

  cy.get("eox-map").should(($el) => {
    const all = entities($el[0]);
    // One entity per point of the MultiPoint, plus the polygon.
    expect(all).to.have.length(3);
    const pointEntity = all.find((e) => e.billboard);
    expect(pointEntity, "point entity").to.exist;
    expect(pointEntity.billboard.getSrc()).to.match(/^data:image\/png/);
    expect(polygonEntity(all).label.getText()).to.equal("Austria");
    expectColor(
      polygonEntity(all).geometry._style.fillColor.toArray(),
      [0, 0, 1, 1],
    );
  });

  cy.get("eox-map").then(($el) => {
    const eoxMap = /** @type {any} */ ($el[0]);
    const selected = cy.spy();
    eoxMap.addEventListener("select", selected);
    const layer = eoxMap.globe.planet.getLayerByName("vectors");
    const pointEntity = entities(eoxMap).find((e) => e.billboard);
    layer.events.dispatch(layer.events.lclick, {
      pos: { x: 0, y: 0 },
      pickingObject: pointEntity,
    });
    expect(selected.firstCall.args[0].detail.feature.getId()).to.equal("p1");
  });

  cy.get("eox-map").then(($el) => {
    $el[0].map.getAllLayers()[0].setStyle({ "fill-color": "red" });
  });
  cy.get("eox-map").should(($el) => {
    const all = entities($el[0]);
    // The new style has no symbol, so the points are not drawn, as in 2D.
    expect(all).to.have.length(1);
    expectColor(
      polygonEntity(all).geometry._style.fillColor.toArray(),
      [1, 0, 0, 1],
    );
  });

  cy.get("eox-map").then(($el) => {
    $el[0].map.getAllLayers()[0].setStyle(symbolRules);
  });
  cy.get("eox-map").should(($el) => expect(entities($el[0])).to.have.length(3));
};
