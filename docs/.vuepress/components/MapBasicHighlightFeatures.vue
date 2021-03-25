<template>
  <map-basic
    :mapZoom="mapZoom"
    :mapCenter="mapCenter"
    :mapLayers="allLayers"
    style="height: 100%; width: 100%;"
    ref='mapbasic'
  >
  <v-btn @click="btnclicked">
    HIGHLIGHT SOME FEATURES
  </v-btn>
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'
import { Style, Stroke, Fill } from 'ol/style'; // eslint-disable-line

export default {
  components: {
    MapBasic
  },
  data: () => ({
    mapZoom: 13,
    mapCenter: [1783019, 6148052],
    allLayers: [
      {
        id: 'terrain-light',
        title: 'Terrain Light',
        type: 'tile',
        source: {
          type: 'wmts-capabilities',
          url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
          layerName: 'terrain-light',
          matrixSet: 'WGS84',

        },
      },
      {
        id: 'declarations',
        title: 'Declarations',
        type: 'vector-tile',
        source: {
          type: 'vector-tile',
          url: 'https://agri-8h5ffg409jlmduiuijhc.demo.hub.eox.at/agri-api/vectortiles/2020/06/30/{z}/{x}/{y}.pbf?config_date=2021-02-18&model_name=dummy',
        },
        style: [
          {
            stroke: {
              color: 'black',
              width: 1,
            },
            fill: {
              color: 'blue',
            },
          }
        ],
      },
    ],
  }),
  computed: {
    basicStyle() {
      return new Style({
        stroke: new Stroke({
          color: 'black',
          width: 2,
        }),
        fill: new Fill({
          color: 'yellow',
        }),
      });
    },
  },
  methods: {
    btnclicked() {
      this.highlighted = {SNAR_BEZEICHNUNG: 'KÖRNERMAIS'};
      const layer = this.$refs.mapbasic.$refs.declarations[0].$children[0].$layer;
      // update style
      layer.setStyle(this.featureStyle);
    },
    featureStyle(feature) {
      const highlightedArr = Array.isArray(this.highlighted) ? this.highlighted : [this.highlighted];
      let style = undefined; // hides the feature by default
      highlightedArr.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          if (feature.properties_[key] === obj[key]) {
            style = this.basicStyle; // shows the feature with matching key/val
          }
        });
      });
      return style;
    },
  },
}
</script>
