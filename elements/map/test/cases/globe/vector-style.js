import { html } from "lit";
import { Vector } from "@openglobus/og";
import Feature from "ol/Feature.js";
import VectorLayer from "ol/layer/Vector.js";
import Point from "ol/geom/Point.js";
import Polygon from "ol/geom/Polygon.js";
import { fromLonLat } from "ol/proj.js";
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
  // A stroke without colour gets the default stroke colour.
  expectColor(
    translate({ "stroke-width": 2 }, {}).geometry.lineColor,
    [0.2, 0.6, 0.8, 1],
  );
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
 * Tests that `setStyle` on a globe vector layer updates what the globe draws:
 * polygons, icons and labels follow every style change, a new icon gets its own
 * size, a new icon scale shows, and a highlighted feature stays highlighted.
 */
export const testGlobeVectorRestyle = () => {
  /** @param {number} size */
  const icon = (size) =>
    `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'/>`;
  /**
   * One style for both features; the icon also reaches the polygon's style.
   *
   * @param {{ fill: string, rotation?: number, outline?: number, align?: string, size?: number, scale?: number }} options
   */
  const style = ({
    fill,
    rotation = 0,
    outline = 1,
    align = "left",
    size = 8,
    scale = 1,
  }) => ({
    "fill-color": fill,
    "icon-src": icon(size),
    "icon-rotation": rotation,
    "icon-displacement": [rotation * 10, 0],
    "icon-scale": scale,
    "text-value": "P",
    "text-rotation": rotation,
    "text-stroke-color": "white",
    "text-stroke-width": outline,
    "text-align": align,
    "text-offset-x": outline,
  });
  cy.intercept("**/globe-restyle.json", {
    body: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: { type: "Point", coordinates: [16, 48] },
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [10, 46],
                [17, 46],
                [17, 49],
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
          properties: { id: "restyle" },
          source: {
            type: "Vector",
            url: "/globe-restyle.json",
            format: "GeoJSON",
          },
          style: style({ fill: "red" }),
        },
      ]}
      .projection=${"globe"}
    ></eox-map>`,
  );

  /** @param {any} eoxMap */
  const entities = (eoxMap) =>
    eoxMap.globe?.planet.getLayerByName("restyle")?.getEntities?.() || [];
  /** @param {any} eoxMap */
  const area = (eoxMap) => entities(eoxMap).find((e) => e.geometry);
  /** @param {any} eoxMap */
  const place = (eoxMap) => entities(eoxMap).find((e) => !e.geometry);
  /** @param {any} entity - og exposes no fill colour getter. */
  const fillOf = (entity) => entity.geometry._style.fillColor.toArray();
  /** @param {any} style - OL flat style. */
  const setStyle = (style) =>
    cy.get("eox-map").then(($el) => $el[0].map.getAllLayers()[0].setStyle(style));

  cy.get("eox-map").should(($el) => expect(entities($el[0])).to.have.length(2));

  // Polygon, icon and label follow the new style; the polygon isn't rebuilt
  // although the style also has an icon.
  /** @type {any} */
  let redArea;
  cy.get("eox-map").then(($el) => (redArea = area($el[0])));
  setStyle(style({ fill: "blue", rotation: 1, outline: 3, align: "right" }));
  cy.get("eox-map").should(($el) => {
    expect(area($el[0]), "same polygon").to.equal(redArea);
    expectColor(fillOf(area($el[0])), [0, 0, 1, 1]);
    const { billboard, label } = place($el[0]);
    expect(billboard.getRotation()).to.be.closeTo(1, 1e-6);
    expect(billboard.getOffset().x).to.equal(10);
    expect(label.getRotation()).to.be.closeTo(1, 1e-6);
    expect(label.getOutline()).to.equal(3);
    expect(label.getAlign()).to.equal("right");
    expect(label.getOffset().x).to.equal(3);
  });

  // A different icon is drawn at its own size, not the previous icon's.
  setStyle(style({ fill: "blue", size: 16 }));
  cy.get("eox-map").should(($el) =>
    expect(place($el[0]).billboard.getWidth()).to.equal(16),
  );

  // A new icon scale shows.
  setStyle(style({ fill: "blue", size: 16, scale: 2 }));
  cy.get("eox-map").should(($el) =>
    expect(place($el[0]).billboard.getScale()).to.equal(2),
  );

  // Highlighted features stay highlighted and go back to the new style; icons
  // are drawn at their own size throughout.
  const highlight = { "fill-color": "yellow", "icon-src": icon(12) };
  /** @type {any} */
  let blueArea;
  cy.get("eox-map").then(($el) => {
    blueArea = area($el[0]);
    highlightGlobeEntity(area($el[0]), highlight);
    highlightGlobeEntity(place($el[0]), highlight);
  });
  cy.get("eox-map").should(($el) =>
    expect(place($el[0]).billboard.getWidth()).to.equal(12),
  );
  setStyle(style({ fill: "green", size: 24, scale: 2 }));
  cy.get("eox-map").should(($el) => {
    expect(area($el[0]), "same polygon").to.equal(blueArea);
    expectColor(fillOf(area($el[0])), [1, 1, 0, 1]);
    expect(place($el[0]).billboard.getSrc()).to.equal(icon(12));
  });
  cy.get("eox-map").then(($el) => {
    resetGlobeEntity(area($el[0]));
    resetGlobeEntity(place($el[0]));
  });
  cy.get("eox-map").should(($el) => {
    expectColor(fillOf(area($el[0])), [0, 0.5, 0, 1]);
    const { billboard } = place($el[0]);
    expect(billboard.getSrc()).to.equal(icon(24));
    expect(billboard.getWidth()).to.equal(24);
  });
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
    // Lets the test change the style before the globe layer exists.
    delay: 300,
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

  // Another style while the GeoJSON loads, then the original style function again.
  /** @type {any} */
  let originalStyle;
  cy.get("eox-map").then(($el) => {
    // Precondition: the GeoJSON is still loading.
    expect(
      /** @type {any} */ ($el[0]).globe?.planet.getLayerByName("vectors"),
    ).not.to.be.instanceOf(Vector);
    const layer = $el[0].map.getAllLayers()[0];
    originalStyle = layer.getStyleFunction();
    layer.setStyle({ "fill-color": "red" });
  });
  cy.get("eox-map").should(($el) => expect(entities($el[0])).to.have.length(1));
  cy.get("eox-map").then(($el) =>
    $el[0].map.getAllLayers()[0].setStyle(originalStyle),
  );

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

  const fillStyle = { "fill-color": "red" };
  cy.get("eox-map").then(($el) => {
    $el[0].map.getAllLayers()[0].setStyle(fillStyle);
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

  // The same style object, changed and set again, also updates the globe.
  cy.get("eox-map").then(($el) => {
    fillStyle["fill-color"] = "blue";
    $el[0].map.getAllLayers()[0].setStyle(fillStyle);
  });
  cy.get("eox-map").should(($el) =>
    expectColor(
      polygonEntity(entities($el[0])).geometry._style.fillColor.toArray(),
      [0, 0, 1, 1],
    ),
  );

  cy.get("eox-map").then(($el) => {
    $el[0].map.getAllLayers()[0].setStyle(symbolRules);
  });
  cy.get("eox-map").should(($el) => expect(entities($el[0])).to.have.length(3));
};

/**
 * Tests that GeoJSON in another projection, declared by its `crs` member, is
 * reprojected and rendered on the globe.
 */
export const testGlobeVectorProjection = () => {
  cy.intercept("**/globe-vector-3857.json", {
    body: {
      type: "FeatureCollection",
      crs: { type: "name", properties: { name: "urn:ogc:def:crs:EPSG::3857" } },
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: { type: "Point", coordinates: fromLonLat([16, 48]) },
        },
      ],
    },
  });
  cy.mount(
    html`<eox-map
      .layers=${[
        {
          type: "Vector",
          properties: { id: "projected" },
          source: {
            type: "Vector",
            url: "/globe-vector-3857.json",
            format: "GeoJSON",
          },
          style: { "circle-radius": 6, "circle-fill-color": "red" },
        },
      ]}
      .projection=${"globe"}
    ></eox-map>`,
  );

  cy.get("eox-map").should(($el) => {
    const layer = /** @type {any} */ ($el[0]).globe?.planet.getLayerByName(
      "projected",
    );
    const [entity] = layer?.getEntities?.() || [];
    expect(entity, "point entity").to.exist;
    expect(entity.getLonLat().lon).to.be.closeTo(16, 1e-6);
    expect(entity.getLonLat().lat).to.be.closeTo(48, 1e-6);
  });
};
