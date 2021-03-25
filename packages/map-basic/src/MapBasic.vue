<template>
  <vl-map
    :data-projection="dataProjection"
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    @pointermove="onPointerMove"
    @click="onPointerClick"
    @created="onMapCreated"
    ref="map"
    style="height: 400px"
    :class="hoverFeature ? 'cursorPointer' : ''"
  >
    <vl-view
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
      :projection="projection"
      :max-zoom="maxZoom"
      multiWorld
      ref="view"
    >
      <!-- TODO: replace with more dynamic solution -->
      <feature-layer
        v-for="(layer, index) in featureLayers"
        :key="index"
        :id="layer.name"
        :ref="layer.name"
        :properties="layer.properties"
        :coordinates="layer.coordinates"
        :icon="layer.icon"
      />
    </vl-view>

    <template v-if="mapLayers && mapLayers.length > 0">
      <template v-for="(layer, key) in mapLayers">
        <vl-layer-group
          v-if="layer.type === 'group'"
          :key="key"
          :z-index="mapLayers.indexOf(layer)">
          <map-layer
            v-for="childLayer in layer.layers"
            :key="childLayer.id"
            :ref="layer.id"
            :layer="childLayer"
            :z-index="layer.layers.indexOf(childLayer)"
          />
        </vl-layer-group>
        <map-layer
          v-else
          :key="layer.id"
          :ref="layer.id"
          :layer="layer"
          :z-index="mapLayers.indexOf(layer)"
        />
      </template>
    </template>

    <slot :mapObject="mapObject" :hoverFeature="hoverFeature"></slot>
    <span v-if="showCenter" class="showCenter">{{ center[0] }}, {{ center[1] }}, {{ zoom }}</span>
    <overview-map
      v-if="overviewMapLayers && overviewLayers"
      :mapObject="mapObject"
      :overviewLayers="overviewLayers"
    />
    <draw-interaction v-if="drawInteractions" @drawEnd="onDrawInteractionEnd" />
  </vl-map>
</template>

<script>
import Vue from 'vue';
import {
  Map, GroupLayer,
} from 'vuelayers';
import 'vuelayers/dist/vuelayers.css';
import { getLayer, getLayers } from 'ol-mapbox-style';
import olms from 'ol-mapbox-style';
import DrawInteraction from './DrawInteraction.vue';
import FeatureLayer from './FeatureLayer.vue';
import MapLayer from './MapLayer.vue';
import OverviewMap from './OverviewMap.vue';

Vue.use(Map);
Vue.use(GroupLayer);

/**
 * A basic map based on OpenLayers
 */
export default {
  name: 'MapBasic',
  components: {
    DrawInteraction,
    FeatureLayer,
    MapLayer,
    OverviewMap,
  },
  props: {
    mapLayers: Array,
    // foregroundLayers: Array,
    // overlayLayers: Array,
    featureLayers: Array,
    dataProjection: String,
    projection: {
      type: String,
      default: 'EPSG:3857',
    },
    mapZoom: {
      type: Number,
      default: 0,
    },
    mapCenter: {
      type: Array,
      default: () => [0, 0],
    },
    maxZoom: Number,
    showCenter: Boolean,
    glStyleUrls: Array,
    overviewMapLayers: Array,
    drawInteractions: Boolean,
  },
  data: () => ({
    zoom: null,
    center: null,
    rotation: 0,
    mapObject: null,
    mapFirstRender: false,
    mapRendering: false,
    overlay: null,
    hoverFeature: null,
    overviewLayers: null,
    // wmtsCapabilitiesRequest: {},
  }),
  created() {
    this.zoom = this.mapZoom;
    this.center = this.mapCenter;
  },
  mounted() {
    this.$refs.map.$on('rendercomplete', this.debounceEvent(this.onMapRenderComplete, 500));
    this.$refs.view.$on('update:zoom', this.debounceEvent(this.onMapRender, 100));
    this.$refs.view.$on('update:center', this.debounceEvent(this.onMapRender, 100));
    this.$refs.map.$createPromise.then(() => {
      this.mapObject = this.$refs.map;
      this.$root.$on('renderMap', () => this.$refs.map
        && this.$refs.map.render());
    });
    this.$on('addOverlay', this.addOverlay);
    this.$on('renderComplete', this.mountOverviewMap);
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
      const ftrs = [];
      this.mapObject.$map.forEachFeatureAtPixel(pixel, (feature, layer) => {
        // more features can be clicked, get all as a list
        ftrs.push({ feature, layer });
      });
      this.$emit('featuresClicked', ftrs);
    },
    onMapCreated(map) {
      if (this.glStyleUrls) {
        const gls = Array.isArray(this.glStyleUrls) ? this.glStyleUrls : [this.glStyleUrls];
        const promises = [];
        gls.forEach((style) => {
          // apply mapbox GL style(s) to existing map
          promises.push(olms(map.$map, style));
        });
        // emit event of finished loading of styles
        Promise.allSettled(promises).then(() => this.$emit('mapboxStylesApplied'));
      }
    },
    getOlLayersByMapboxSource(source) {
      // returns OL layer instances provided by Mapbox style 'source'
      return getLayers(this.mapObject.$map, source);
    },
    getOlLayerByMapboxLayer(layer) {
      // returns OL layer instance provided by Mapbox style 'layer'
      return getLayer(this.mapObject.$map, layer);
    },
    hilite({ highlightObj }) {
      // accepts a key:value pair of feature properties
      const a = getLayer(this.mapObject.$map, 'declaration-fill');
      console.log(a);
      console.log(highlightObj);
      a.setStyle(this.testStyleFunc);
    },
    // updateCapabilitiesRequest({ request, url }) {
    //   this.wmtsCapabilitiesRequest[url] = request;
    // },
    mountOverviewMap() {
      if (this.overviewMapLayers && !this.overviewLayers) {
        const layers = this.mapObject
          .getLayers()[0].getLayersArray();
        this.overviewLayers = layers
          .filter((l) => this.overviewMapLayers.includes(l.getProperties().id));
      }
    },
    onMapRender() {
      this.mapRendering = true;
      this.$emit('rendering');
    },
    onMapRenderComplete() {
      if (!this.mapFirstRender) { this.mapFirstRender = true; }
      this.mapRendering = false;
      // this.$emit('renderComplete');
    },
    onDrawInteractionEnd(feature) {
      this.$emit('drawInteraction', feature);
    },
    debounceEvent(callback, time = 250, interval) {
      return (...args) => clearTimeout(interval, interval = setTimeout(callback, time, ...args)); // eslint-disable-line
    },
  },
  watch: {
    mapZoom(zoom) {
      this.zoom = zoom;
    },
    mapCenter(center) {
      this.center = center;
    },
    mapRendering(isRendering) {
      if (isRendering) {
        // console.log('rendering...');
      } else {
        // console.log('render complete!');
        this.$emit('renderComplete');
      }
    },
    mapFirstRender(hasRendered) {
      if (hasRendered) {
        // console.log('first render complete!');
        this.$emit('renderComplete');
      }
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
