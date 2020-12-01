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
    <slot></slot>
    <!-- <vl-layer-tile
      v-if="eox"
      id="eox"
    >
      <source-eox :layer-name="layerName"></source-eox>
    </vl-layer-tile> -->
    <!-- <div slot="layerSwipe" slot-scope="{ onPrecompose, onPostcompose }">
      <vl-layer-tile
        id="eox"
        @precompose="onPrecompose"
        @postcompose="onPostcompose"
      >
        <source-eox :layerName="'s2cloudless-2019'"></source-eox>
      </vl-layer-tile>
    </div> -->
  </vl-map>
</template>

<script>
import { Map, TileLayer, OsmSource } from 'vuelayers';
import 'vuelayers/lib/style.css';
import * as Vue from 'vue';
// import SourceEox from './SourceEox.vue';

Vue.use(Map);
Vue.use(TileLayer);
Vue.use(OsmSource);

export default {
  name: 'map-basic',
  components: {
    // SourceEox,
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
};
</script>

<style>
</style>
