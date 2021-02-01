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
  >
    <vl-view
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
    >
      <feature-layer
        v-for="(layer, index) in featureLayers"
        :key="index"
        :properties="layer.properties"
        :coordinates="layer.coordinates"
        :icon="layer.icon"
      />
    </vl-view>
    <vl-layer-group :z-index="0">
      <template
        v-for="layer in backgroundLayers"
      >
        <wmts-capabilites-provider
          v-if="layer.dataProvider === 'WMTScapabilites'"
          :key="layer.name"
          :layerName="layer.name"
          :capabilitiesUrl="layer.capabilitiesUrl"
          :matrixSet="layer.matrixSet"
          :visible="layer.visible"
          :zIndex="backgroundLayers.indexOf(layer)"
          />
        <vl-layer-tile
          v-else-if="layer.type === 'tile' && layer.name === 'osm'"
          :key="layer.name"
          :visible="layer.visible"
          :z-index="backgroundLayers.indexOf(layer)"
        >
          <vl-source-osm v-if="layer.name === 'osm'"></vl-source-osm>
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
    <template v-for="layer in foregroundLayers">
      <wmts-capabilites-provider
        v-if="layer.dataProvider === 'WMTScapabilites'"
        :key="layer.name"
        :id="layer.name"
        :layerName="layer.name"
        :capabilitiesUrl="layer.capabilitiesUrl"
        :matrixSet="layer.matrixSet"
        :visible="layer.visible"
        :zIndex="foregroundLayers.indexOf(layer) + 1"
      />
      <vl-layer-tile
        v-else-if="layer.name === 'osm'"
        :key="layer.name"
        :id="layer.name"
        :z-index="foregroundLayers.indexOf(layer) + 1"
      >
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </template>
    <template v-for="layer in overlayLayers">
      <wmts-capabilites-provider
        v-if="layer.dataProvider === 'WMTScapabilites'"
        :key="layer.name"
        :id="layer.name"
        :layerName="layer.name"
        :capabilitiesUrl="layer.capabilitiesUrl"
        :matrixSet="layer.matrixSet"
        :visible="layer.visible"
        :zIndex="overlayLayers.indexOf(layer) + 1"
      />
      <vl-layer-tile
        v-else-if="layer.name === 'osm'"
        :key="layer.name"
        :id="layer.name"
        :z-index="overlayLayers.indexOf(layer) + 1"
      >
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </template>
    <slot :mapObject="mapObject" :hoverFeature="hoverFeature"></slot>
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
import FeatureLayer from './FeatureLayer.vue';
import VectorStyle from './VectorStyle.vue';
import WmtsCapabilitesProvider from './WMTSCapabilitesProvider.vue';

Vue.use(Map);
Vue.use(TileLayer);
Vue.use(OsmSource);
Vue.use(GroupLayer);
Vue.use(VectorTileLayer);
Vue.use(VectorTileSource);

export default {
  name: 'map-basic',
  components: {
    FeatureLayer,
    VectorStyle,
    WmtsCapabilitesProvider,
  },
  props: {
    backgroundLayers: Array,
    foregroundLayers: Array,
    overlayLayers: Array,
    featureLayers: Array,
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
    hoverFeature: null,
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
    this.$on('addOverlay', this.addOverlay);
  },
  methods: {
    onPointerMove({ coordinate, pixel }) {
      let hasFeature = false;
      this.mapObject.forEachFeatureAtPixel(pixel, (f) => {
        hasFeature = true;
        this.hoverFeature = {
          coordinate,
          feature: f,
        };
      });
      if (!hasFeature) {
        this.hoverFeature = null;
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
.vl-map {
  position: relative;
}
.ol-attribution, .ol-control {
  z-index: 1001;
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
</style>

<style lang="scss" scoped>
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
</style>
