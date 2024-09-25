import { html } from "lit";

/**
 * With the convenience functions `transform` and `transformExtent` it is possible to transform coordinates
 * and extents from any projection to EPSG.4326 (default) or any other projection.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const ProjectionTransformStory = {
  args: {
    layers: [
      {
        type: "Tile",
        properties: {
          id: "osm",
          title: "Background",
        },
        source: { type: "OSM" },
      },
    ],
    center: [16.8, 48.2],
    zoom: 7,
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      id="transformMap"
      style="width: 100%; height: 300px; display: none"
      .center=${args.center}
      .controls=${args.controls}
      .zoom=${args.zoom}
    >
    </eox-map>
    <button
      @click=${() => {
        const eoxMap = /** @type {import("../src/main").EOxMap} **/ (
          /** @type {any} **/ document.querySelector("#transformMap")
        );
        eoxMap.registerProjection(
          "ESRI:53009",
          "+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 " +
            "+b=6371000 +units=m +no_defs"
        );
        alert(eoxMap.transform([991693, 1232660], "ESRI:53009"));
      }}
    >
      Transform [991693, 1232660] ("ESRI:53009")
    </button>
  `,
};

export default ProjectionTransformStory;
