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
   * @param {import("ol-mapbox-style/dist/apply").Options} applyOptions ol-mapbox-style apply options
   * @returns
   */
  applyMapboxStyle(mapboxStyle, applyOptions) {
    return apply(this, mapboxStyle, applyOptions);
  }
}

export default MapboxStyle;
