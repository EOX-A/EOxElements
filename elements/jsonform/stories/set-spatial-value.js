import { html } from "lit";

/**
 * Story demonstrating programmatic value updates on spatial inputs (eox-drawtools).
 *
 * Calling `editor.setValue(...)` or updating the element's `.value` property dynamically
 * parses spatial geometries (bounding-boxes, polygons, points) and synchronizes them
 * with the underlying `eox-drawtools` instance on internal or external maps.
 */
const schema = {
  type: "object",
  properties: {
    area: {
      type: "array",
      title: "Target Area (Bounding Box)",
      format: "bounding-box",
      options: {
        drawtools: {
          for: "eox-map#spatial-map",
        },
      },
    },
    polygonArea: {
      type: "array",
      title: "Target Area (Polygon)",
      format: "polygon",
      options: {
        drawtools: {
          for: "eox-map#spatial-map",
        },
      },
    },
  },
};

const initialValue = {
  area: [12.0, 41.5, 13.5, 42.5],
};

const updatedBboxValue = {
  area: [-5.0, 36.0, 2.0, 43.0],
  polygonArea: [
    [
      [10.0, 45.0],
      [15.0, 45.0],
      [15.0, 48.0],
      [10.0, 48.0],
      [10.0, 45.0],
    ],
  ],
};

export default {
  args: {
    schema,
    value: initialValue,
  },
  render: (args) => html`
    <div style="display: flex; gap: 20px; align-items: flex-start;">
      <div style="flex: 1; max-width: 450px;">
        <div style="margin-bottom: 12px; display: flex; gap: 8px;">
          <button
            @click=${() => {
              const form = document.querySelector("#spatial-set-value-form");
              if (form && form.editor) {
                form.editor.setValue(updatedBboxValue);
              }
            }}
          >
            Programmatically Set Value
          </button>
          <button
            @click=${() => {
              const form = document.querySelector("#spatial-set-value-form");
              if (form && form.editor) {
                form.editor.setValue(initialValue);
              }
            }}
          >
            Reset to Initial Value
          </button>
        </div>
        <eox-jsonform
          id="spatial-set-value-form"
          .schema=${args.schema}
          .value=${args.value}
        ></eox-jsonform>
      </div>
      <div style="flex: 1; height: 400px; min-width: 300px;">
        <eox-map
          id="spatial-map"
          style="width: 100%; height: 100%; display: block;"
          .layers=${[
            {
              type: "Tile",
              properties: { id: "osm" },
              source: { type: "OSM" },
            },
          ]}
        ></eox-map>
      </div>
    </div>
  `,
};
