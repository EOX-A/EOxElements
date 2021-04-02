<template>
  <vl-map
    ref="map"
    @pointermove="onPointerMove"
    @click="onPointerClick"
    @created="mapCreated = true"
    v-bind="mapConfig"
    style="height: 400px"
    :class="{cursorPointer: !hideFeature, 'hide-feature': hideFeature, 'tooltip-left': tooltipLeft}"
  >
    <vl-view
      ref="view"
      :zoom.sync="mapZoom"
      :center.sync="mapCenter"
      :rotation.sync="mapRotation"
      v-bind="viewConfig"
    >
      <!-- TODO: replace with more dynamic solution -->
      <feature-layer
        v-for="(layer, index) in features"
        :key="index"
        :id="layer.name"
        :ref="layer.name"
        :properties="layer.properties"
        :coordinates="layer.coordinates"
        :icon="layer.icon"
      />
    </vl-view>

    <template v-if="layers && layers.length > 0">
      <template v-for="(layer, key) in layers">
        <vl-layer-group
          v-if="layer.type === 'group'"
          :key="key"
          :ref="layer.id"
          :z-index="layers.indexOf(layer)">
          <mapbox-style-group
            v-if="layer['mapbox-style-layers'] && mapObject"
            :key="key"
            :mapObject="mapObject"
            :urls="layer['mapbox-style-layers']"
          />
          <template v-else-if="layer.layers">
            <map-layer
              v-for="childLayer in layer.layers"
              :key="childLayer.id"
              :ref="childLayer.id"
              :layer="childLayer"
              :z-index="layer.layers.indexOf(childLayer)"
            />
          </template>
        </vl-layer-group>
        <map-layer
          v-else
          :key="layer.id"
          :ref="layer.id"
          :layer="layer"
          :z-index="layers.indexOf(layer)"
        />
      </template>
    </template>

    <slot :mapObject="mapObject" :hoverFeature="hoverFeature"></slot>
    <span v-if="showCenter || showMousePosition" class="showInfo">
      <template v-if="showCenter">
        {{ mapCenter[0] }}, {{ mapCenter[1] }}, {{ mapZoom }}
      </template>
      <vl-control-mouse-position
        v-if="showMousePosition && mapObject"
        :mapObject="mapObject" target=".showInfo"
      />
    </span>
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
import DrawInteraction from './DrawInteraction.vue';
import FeatureLayer from './FeatureLayer.vue';
import MapLayer from './MapLayer.vue';
import OverviewMap from './OverviewMap.vue';
import MapboxStyleGroup from './MapboxStyleGroup.vue';
import OlControls from './ol-controls';

Vue.use(Map);
Vue.use(GroupLayer);
Vue.use(OlControls);

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
    MapboxStyleGroup,
  },
  props: {
    layers: Array,
    mapConfig: {
      type: Object,
      default: () => ({
        // https://vuelayers.github.io/#/docs/component/map?id=properties
        'load-tiles-while-animating': true,
        'load-tiles-while-interacting': true,
      }),
    },
    viewConfig: {
      type: Object,
      default: () => ({
        // https://vuelayers.github.io/#/docs/component/view?id=properties
        'multi-world': true,
      }),
    },
    features: Array,
    zoom: {
      type: Number,
      default: 0,
    },
    center: {
      type: Array,
      default: () => [0, 0],
    },
    showCenter: Boolean,
    showMousePosition: Boolean,
    overviewMapLayers: Array,
    drawInteractions: Boolean,
  },
  data: () => ({
    mapZoom: 0,
    mapCenter: [0, 0],
    mapRotation: 0,
    mapObject: null,
    mapCreated: false,
    mapFirstRender: false,
    mapRendering: false,
    overlay: null,
    hoverFeature: null,
    overviewLayers: null,
    hideFeature: false,
    tooltipLeft: false,
  }),
  created() {
    this.mapZoom = this.zoom;
    this.mapCenter = this.center;
    this.mapRotation = this.rotation;
  },
  mounted() {
    this.$refs.map.$on('rendercomplete', this.debounceEvent(this.onMapRenderComplete, 500));
    this.$refs.view.$on('update:zoom', this.debounceEvent(this.onMapRender, 100));
    this.$refs.view.$on('update:center', this.debounceEvent(this.onMapRender, 100));
    this.$refs.view.$on('update:rotation', this.debounceEvent(this.onMapRender, 100));
    this.$refs.map.$createPromise.then(() => {
      this.mapObject = this.$refs.map;
      this.$root.$on('renderMap', () => this.$refs.map
        && this.$refs.map.render());
    });
    this.$on('addOverlay', this.addOverlay);
    this.$on('renderComplete', this.mountOverviewMap);
  },
  methods: {
    onPointerMove({ coordinate, pixel, originalEvent }) {
      let hasFeature = false;

      const x = originalEvent.clientX - originalEvent.target.getBoundingClientRect().left;
      const threshold = originalEvent.target.getBoundingClientRect().width / 2;
      this.tooltipLeft = x > threshold;

      this.mapObject.forEachFeatureAtPixel(pixel, (f) => {
        hasFeature = true;
        this.hideFeature = false;
        this.hoverFeature = {
          coordinate,
          feature: f,
        };
      });
      if (!hasFeature) {
        this.hideFeature = true;
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
    mapZoom(newZoom) {
      this.$emit('update:zoom', newZoom);
    },
    mapCenter(newCenter) {
      this.$emit('update:center', newCenter);
    },
    mapRotation(newRotation) {
      this.$emit('update:rotation', newRotation);
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
.ol-overlaycontainer-stopevent {
  z-index: 15 !important;
}
.hide-feature .map-tooltip {
  display: none
}
.tooltip-left .map-tooltip {
  transform: translateX(calc(-100% - 24px))
}
</style>

<style lang="scss" scoped>
.showInfo {
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
