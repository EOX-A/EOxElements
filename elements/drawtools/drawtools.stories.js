import { html } from "lit";
import "../map/main";
import "./src/main";

export default {
  title: "Elements/eox-drawtools",
  tags: ["autodocs"],
  component: "eox-drawtools",
};

export const Primary = {
  render: () => html` <eox-map
      id="primary"
      style="width: 400px; height: 300px;"
      layers='[
    {"type":"Tile","source":{"type":"OSM"}}
  ]'
    ></eox-map>
    <eox-drawtools for="eox-map#primary"></eox-drawtools>`,
};

/**
 * By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,
 * multiple polygons can be drawn.
 */
export const MultiPolygon = {
  render: () => html` <eox-map
      id="multi"
      style="width: 400px; height: 300px;"
      layers='[
      {"type":"Tile","source":{"type":"OSM"}}
    ]'
    ></eox-map>
    <eox-drawtools for="eox-map#multi" multiple-features></eox-drawtools>`,
};

/**
 * By setting the `allow-modify` attribute or `allowModify` property,
 * the user can modify features after drawing
 */
export const ModifyFeatures = {
  render: () => html` <eox-map
      id="modify"
      style="width: 400px; height: 300px;"
      layers='[
      {"type":"Tile","source":{"type":"OSM"}}
    ]'
    ></eox-map>
    <eox-drawtools
      for="eox-map#modify"
      multiple-features
      allow-modify
    ></eox-drawtools>`,
};

/**
 * The `type` attribute/property controls which drawing type is enabled
 * (defaults to "Polygon")
 */
export const DrawType = {
  render: () => html` <div style="display: flex">
    <div>
      <eox-map
        id="box"
        style="width: 400px; height: 300px;"
        layers='[
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
      ></eox-map>
      Box
      <eox-drawtools
        for="eox-map#box"
        multiple-features
        allow-modify
        type="Box"
      ></eox-drawtools>
    </div>
    <div>
      <eox-map
        id="point"
        style="width: 400px; height: 300px;"
        layers='[
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
      ></eox-map>
      Point
      <eox-drawtools
        for="eox-map#point"
        multiple-features
        allow-modify
        type="Point"
      ></eox-drawtools>
    </div>
    <div>
      <eox-map
        id="circle"
        style="width: 400px; height: 300px;"
        layers='[
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
      ></eox-map>
      Circle
      <eox-drawtools
        for="eox-map#circle"
        multiple-features
        allow-modify
        type="Circle"
      ></eox-drawtools>
    </div>
    <div>
      <eox-map
        id="linestring"
        style="width: 400px; height: 300px;"
        layers='[
        {"type":"Tile","source":{"type":"OSM"}}
      ]'
      ></eox-map>
      LineString
      <eox-drawtools
        for="eox-map#linestring"
        multiple-features
        allow-modify
        type="LineString"
      ></eox-drawtools>
    </div>
  </div>`,
};
