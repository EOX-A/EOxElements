import LayerGroup from "ol/layer/Group";
import { apply } from "ol-mapbox-style";

class MapboxStyle extends LayerGroup {
  constructor(options = {}) {
    const { mapboxStyle, applyOptions, ...groupOptions } = options;

    super(groupOptions);

    if (mapboxStyle) {
      this.applyMapboxStyle(mapboxStyle, applyOptions);
    }
  }

  /**
   *
   * @param {*} mapboxStyle mapbox style definition
   * @param {Parameters<typeof import("ol-mapbox-style").apply>[2]} applyOptions ol-mapbox-style apply options
   * @returns
   */
  applyMapboxStyle(mapboxStyle, applyOptions) {
    return apply(this, mapboxStyle, applyOptions);
  }
}

export default MapboxStyle;
