<template>
  <vl-map
    :data-projection="dataProjection"
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    @pointermove="onPointerMove"
    @click="onPointerClick"
    ref="map"
    style="height: 400px"
    :class="hoverFeature ? 'cursorPointer' : ''"
    class="eox-map-basic"
  >
    <vl-view
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
    ></vl-view>
    <vl-layer-group :z-index="0">
      <template
        v-for="layer in backgroundLayers"
      >
        <vl-layer-tile
          v-if="layer.type === 'tile'"
          :key="layer.name"
          :id="layer.name"
          :visible="layer.visible"
          :z-index="backgroundLayers.indexOf(layer)"
        >
          <template v-if="layer">
            <vl-source-osm v-if="layer.name === 'osm'"></vl-source-osm>
            <source-eox v-else :layer-name="layer.name"></source-eox>
          </template>
        </vl-layer-tile>
        <vl-layer-vector-tile
          v-else-if="layer.type === 'vector'"
          :key="layer.name"
          ref="vectorLayer"
          :visible="layer.visible"
          :z-index="backgroundLayers.indexOf(layer)"
        >
          <vl-source-vector-tile :url="layer.url"></vl-source-vector-tile>
          <vector-style
            ref="vectorStyle"
            :url="layer.url"
            :styleObject="layer.style" />
        </vl-layer-vector-tile>
      </template>
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
    <tool-tip v-if="mapObject" ref="tooltip" :mapObject="mapObject" @addOverlay="addOverlay" />
    <slot :mapObject="mapObject"></slot>
    <span v-if="showCenter" class="showCenter">{{ center[0] }}, {{ center[1] }}</span>
  </vl-map>
</template>

<script>
import Vue from 'vue';
import {
  Map, TileLayer, OsmSource, GroupLayer,
  VectorTileLayer, VectorTileSource,
} from 'vuelayers';
import 'vuelayers/lib/style.css';
import SourceEox from './SourceEox.vue';
import VectorStyle from './VectorStyle.vue';
import ToolTip from './ToolTip.vue';

Vue.use(Map);
Vue.use(TileLayer);
Vue.use(OsmSource);
Vue.use(GroupLayer);
Vue.use(VectorTileLayer);
Vue.use(VectorTileSource);

export default {
  name: 'map-basic',
  components: {
    SourceEox,
    VectorStyle,
    ToolTip,
  },
  props: {
    backgroundLayers: Array,
    foregroundLayers: Array,
    dataProjection: String,
    mapZoom: {
      type: Number,
      default: 0,
    },
    mapCenter: {
      type: Array,
      default: () => [0, 0],
    },
    showCenter: Boolean,
  },
  data: () => ({
    zoom: null,
    center: null,
    rotation: 0,
    mapObject: null,
    overlay: null,
    hoverFeature: false,
  }),
  created() {
    this.zoom = this.mapZoom;
    this.center = this.mapCenter;
  },
  mounted() {
    this.$refs.map.$createPromise.then(() => {
      this.mapObject = this.$refs.map;
      this.$root.$on('renderMap', () => this.$refs.map
        && this.$refs.map.render());
    });
  },
  methods: {
    addOverlay(element) {
      this.overlay = element;
      this.mapObject.$map.addOverlay(element);
    },
    onPointerMove({ coordinate, pixel }) {
      let hasFeature = false;
      this.mapObject.forEachFeatureAtPixel(pixel, (f) => {
        this.overlay.setPosition(coordinate);
        hasFeature = true;
        this.hoverFeature = true;
        this.$refs.tooltip.onPointerMove(f);
      });
      if (!hasFeature) {
        this.hoverFeature = false;
        this.overlay.setPosition(undefined);
      }
    },
    onPointerClick({ pixel }) {
      this.mapObject.forEachFeatureAtPixel(pixel, (feature) => {
        this.$emit('featureClicked', feature);
      });
    },
  },
  watch: {
    mapZoom(zoom) {
      this.zoom = zoom;
    },
    mapCenter(center) {
      this.center = center;
    },
  },
};
</script>

<style lang="scss">
.eox-map-basic {
  .vl-map {
    position: relative;
  }
  .ol-attribution ul {
    margin: 0px !important;
    padding: 0 .5em !important;
  }
  .ol-control button {
    background: var(--v-primary-base);
  }
  .cursorPointer {
    cursor: pointer !important;
  }
}
</style>

<style lang="scss" scoped>
.eox-map-basic {
  .showCenter {
    position: absolute;
    bottom: .5em;
    left: .5em;
    z-index: 99;
    background: #fffc;
    padding: 2px;
    display: table;
    font-size: 0.8rem;
  }
}
</style>
