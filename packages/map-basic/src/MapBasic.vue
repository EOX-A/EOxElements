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
      multiWorld
      constrainResolution
      ref="mapView"
    >
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
    <vl-layer-group :z-index="0">
      <template
        v-for="layer in backgroundLayers"
      >
        <wmts-capabilites-provider
          v-if="layer.dataProvider === 'WMTScapabilites'"
          :key="layer.name"
          :id="layer.name"
          :ref="layer.name"
          :layerName="layer.name"
          :layerStyle="layer.layerStyle"
          :requestEncoding="layer.requestEncoding"
          :capabilitiesUrl="layer.capabilitiesUrl"
          :matrixSet="layer.matrixSet"
          :visible="layer.visible"
          :zIndex="backgroundLayers.indexOf(layer)"
          :capabilitiesRequest="wmtsCapabilitiesRequest"
          @fetchedCapabilities="updateCapabilitiesRequest"
          />
        <vl-layer-vector-tile
          v-else-if="layer.type === 'vector'"
          :key="layer.name"
          :id="layer.name"
          :ref="layer.name"
          :visible="layer.visible"
          :z-index="backgroundLayers.indexOf(layer)"
        >
          <vl-source-vector-tile
            :url="layer.url"
            :ref="`${layer.name}-source`"
          ></vl-source-vector-tile>
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
        :ref="layer.name"
        :layerName="layer.name"
        :layerStyle="layer.layerStyle"
        :requestEncoding="layer.requestEncoding"
        :capabilitiesUrl="layer.capabilitiesUrl"
        :matrixSet="layer.matrixSet"
        :visible="layer.visible"
        :zIndex="foregroundLayers.indexOf(layer) + 10"
        :capabilitiesRequest="wmtsCapabilitiesRequest"
        @fetchedCapabilities="updateCapabilitiesRequest"
      />
    </template>
    <template v-for="layer in overlayLayers">
      <wmts-capabilites-provider
        v-if="layer.dataProvider === 'WMTScapabilites'"
        :key="layer.name"
        :id="layer.name"
        :ref="layer.name"
        :layerName="layer.name"
        :layerStyle="layer.layerStyle"
        :requestEncoding="layer.requestEncoding"
        :capabilitiesUrl="layer.capabilitiesUrl"
        :matrixSet="layer.matrixSet"
        :visible="layer.visible"
        :zIndex="overlayLayers.indexOf(layer) + 20"
        :capabilitiesRequest="wmtsCapabilitiesRequest"
        @fetchedCapabilities="updateCapabilitiesRequest"
      />
    </template>
    <slot :mapObject="mapObject" :hoverFeature="hoverFeature"></slot>
    <span v-if="showCenter" class="showCenter">{{ center[0] }}, {{ center[1] }}, {{ zoom }}</span>
    <overview-map
      v-if="overviewMapLayers && overviewLayers"
      :mapObject="mapObject"
      :overviewLayers="overviewLayers"
    />
  </vl-map>
</template>

<script>
import Vue from 'vue';
import {
  Map, TileLayer, GroupLayer,
  VectorTileLayer, VectorTileSource,
} from 'vuelayers';
import 'vuelayers/dist/vuelayers.css';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import { getLayer, getLayers } from 'ol-mapbox-style';
import olms from 'ol-mapbox-style';
import FeatureLayer from './FeatureLayer.vue';
import OverviewMap from './OverviewMap.vue';
import VectorStyle from './VectorStyle.vue';
import WmtsCapabilitesProvider from './WMTSCapabilitesProvider.vue';

Vue.use(Map);
Vue.use(TileLayer);
Vue.use(GroupLayer);
Vue.use(VectorTileLayer);
Vue.use(VectorTileSource);

export default {
  name: 'map-basic',
  components: {
    FeatureLayer,
    OverviewMap,
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
    glStyleUrls: Array,
    overviewMapLayers: Array,
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
    wmtsCapabilitiesRequest: {},
  }),
  created() {
    this.zoom = this.mapZoom;
    this.center = this.mapCenter;
  },
  mounted() {
    this.$refs.map.$on('rendercomplete', this.debounceEvent(this.onMapRenderComplete, 500));
    this.$refs.mapView.$on('update:zoom', this.debounceEvent(this.onMapRender, 100));
    this.$refs.mapView.$on('update:center', this.debounceEvent(this.onMapRender, 100));
    this.$refs.map.$createPromise.then(() => {
      this.mapObject = this.$refs.map;
      this.$root.$on('renderMap', () => this.$refs.map
        && this.$refs.map.render());
      this.mapObject.$map.getInteractions().forEach((interaction) => {
        if (interaction instanceof MouseWheelZoom) {
          this.mapObject.$map.removeInteraction(interaction);
          const modifiedMouseWheelZoom = new MouseWheelZoom({
            useAnchor: false,
          });
          this.mapObject.$map.addInteraction(modifiedMouseWheelZoom);
        }
      });
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
    updateCapabilitiesRequest({ request, url }) {
      this.wmtsCapabilitiesRequest[url] = request;
    },
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
      this.$emit('renderComplete');
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
        console.log('rendering...');
      } else {
        console.log('render complete!');
      }
    },
    mapFirstRender(hasRendered) {
      if (hasRendered) {
        console.log('first render complete!');
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
