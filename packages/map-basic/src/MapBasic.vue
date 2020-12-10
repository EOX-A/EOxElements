<template>
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    ref="map"
    style="height: 400px"
  >
    <vl-view
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
    ></vl-view>
    <vl-layer-group :z-index="0">
      <vl-layer-tile
        v-for="layer in backgroundLayers"
        :key="layer.name"
        :id="layer.name"
        :z-index="backgroundLayers.indexOf(layer)"
      >
        <template v-if="layer">
          <vl-source-osm v-if="layer.name === 'osm'"></vl-source-osm>
          <source-eox v-else :layer-name="layer.name"></source-eox>
        </template>
      </vl-layer-tile>
    </vl-layer-group>
    <vl-layer-tile
      v-for="layer in foregroundLayers"
      :key="layer.name"
      :id="layer.name"
      :z-index="foregroundLayers.indexOf(layer) + 1"
    >
      <template v-if="layer">
        <vl-source-osm v-if="layer.name === 'osm'"></vl-source-osm>
        <source-eox v-else :layer-name="layer.name"></source-eox>
      </template>
    </vl-layer-tile>
    <slot :mapObject="mapObject"></slot>
  </vl-map>
</template>

<script>
import Vue from 'vue';
import {
  Map, TileLayer, OsmSource, GroupLayer,
} from 'vuelayers';
import 'vuelayers/lib/style.css';
import SourceEox from './SourceEox.vue';

Vue.use(Map);
Vue.use(TileLayer);
Vue.use(OsmSource);
Vue.use(GroupLayer);

export default {
  name: 'map-basic',
  components: {
    SourceEox,
  },
  props: {
    backgroundLayers: Array,
    foregroundLayers: Array,
  },
  data: () => ({
    zoom: 2,
    center: [0, 0],
    rotation: 0,
    mapObject: null,
  }),
  mounted() {
    this.$refs.map.$createPromise.then(() => {
      this.mapObject = this.$refs.map;
      this.$root.$on('renderMap', () => this.$refs.map
        && this.$refs.map.render());
    });
  },
};
</script>

<style>
.vl-map {
  position: relative;
}
.ol-control button {
  background: var(--v-primary-base);
}
</style>
