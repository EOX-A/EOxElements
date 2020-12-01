<template>
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    style="height: 400px"
  >
    <vl-view
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
    ></vl-view>
    <vl-layer-tile
      v-if="osm"
      id="osm"
    >
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>
    <vl-layer-tile
      v-if="eox"
      id="eox"
    >
      <source-eox :layer-name="layerName"></source-eox>
    </vl-layer-tile>
  </vl-map>
</template>

<script>
import Vue from 'vue';
import { Map, TileLayer, OsmSource } from 'vuelayers';
import 'vuelayers/lib/style.css';
import SourceEox from './SourceEox.vue';

Vue.use(Map);
Vue.use(TileLayer);
Vue.use(OsmSource);

export default {
  name: 'map-basic',
  components: {
    SourceEox,
  },
  props: {
    osm: Boolean,
    eox: Boolean,
    layerName: String,
  },
  data: () => ({
    zoom: 2,
    center: [0, 0],
    rotation: 0,
  }),
  mounted() {
    console.log('map-basic loaded');
  },
};
</script>

<style>
</style>
