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
      id="osm"
    >
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>
  </vl-map>
</template>

<script>
import { Map, TileLayer, OsmSource } from 'vuelayers';
import 'vuelayers/lib/style.css';
import * as Vue from 'vue';

Vue.use(Map);
Vue.use(TileLayer);
Vue.use(OsmSource);

export default {
  name: 'map-basic',
  data: () => ({
    zoom: 2,
    center: [0, 0],
    rotation: 0,
  }),
};
</script>

<style>
</style>
