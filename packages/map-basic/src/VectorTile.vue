<template>
  <div>
    <!-- <vl-layer-vector-tile :z-index="3">
      <vl-source-vector-tile :url="url"></vl-source-vector-tile>
      <vl-style-box>
        <vl-style-fill color="#ffffff55"></vl-style-fill>
        <vl-style-stroke :width="2" color="#000"></vl-style-stroke>
      </vl-style-box>
    </vl-layer-vector-tile> -->
    <vl-layer-vector-tile :z-index="4">
      <vl-source-vector-tile :url="url2"></vl-source-vector-tile>
      <vl-style-func :factory="styleFuncProp" />
    </vl-layer-vector-tile>
  </div>
</template>

<script>
import Vue from 'vue';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import {
  VectorTileLayer, VectorTileSource,
  FillStyle, StyleBox, StrokeStyle,
  StyleFunc,
} from 'vuelayers';

Vue.use(VectorTileLayer);
Vue.use(VectorTileSource);
Vue.use(FillStyle);
Vue.use(StyleBox);
Vue.use(StrokeStyle);
Vue.use(StyleFunc);

export default {
  props: {
    currentFeature: Object,
  },
  data: () => ({
    url: 'http://lpvis-demo.s3-website.eu-central-1.amazonaws.com/geodata/physical_blocks/{z}/{x}/{y}.pbf',
    url2: 'http://lpvis-demo.s3-website.eu-central-1.amazonaws.com/geodata/agricultural_parcels/{z}/{x}/{y}.pbf',
  }),
  computed: {
    styleFuncProp() {
      const { currentFeature } = this;
      return () => (feature) => [
        new Style({
          stroke: new Stroke({
            color: 'black',
            width: 1,
          }),
          fill: new Fill({
            color: this.trafficLightStyle(feature.properties_.match, feature.properties_.accuracy, feature === currentFeature),
          }),
        }),
      ];
    },
  },
  methods: {
    trafficLightStyle(match, accuracy, isHighlighted) {
      if (accuracy < 0.95) {
        return isHighlighted ? '#ffff00ff' : '#ffff0099';
      }
      if (match === 'True') {
        return isHighlighted ? '#008000ff' : '#00800099';
      }
      if (match === 'False') {
        return isHighlighted ? '#ff0000ff' : '#ff000099';
      }
      return '#99999999';
    },
  },
};
</script>
