<template>
  <map-basic
    :mapZoom="13"
    :mapCenter="[1783019, 6148052]"
    :backgroundLayers="allLayers"
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
    allLayers: [
      {
        type: 'tile',
        name: 'terrain-light',
        title: 'Terrain Light',
        dataProvider: 'WMTScapabilites',
        capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
        matrixSet: 'WGS84',
      },
      {
        type: 'vector',
        url: 'https://agri.demo.hub.eox.at/parcels-api/demo.agri_data_declaration/{z}/{x}/{y}.pbf',
        title: 'Declarations',
        style: {
          stroke: {
            color: 'black',
            width: 1,
          },
          fill: {
            color: 'blue',
          },
        },
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
      const layer = this.$refs.mapbasic.$refs.vectorLayer[0].$layer;
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
