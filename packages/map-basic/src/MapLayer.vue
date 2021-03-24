<template>
  <wmts-capabilites-provider
    v-if="layer.type === 'tile'
      && layer.source.type === 'wmts-capabilities'"
    :ref="layer.id"
    :id="layer.id"
    :layerName="layer.source.layerName"
    :capabilitiesUrl="layer.source.url"
    :matrixSet="layer.source.matrixSet"
    :visible="layer.visible"
    :format="layer.format"
    :styleName="layer.styleName"
    :capabilitiesRequest="wmtsCapabilitiesRequest"
    :z-index="zIndex"
    @fetchedCapabilities="updateCapabilitiesRequest"
  />
  <component
    v-else
    :is="`vl-layer-${layer.type}`"
    :ref="layer.id"
    :z-index="zIndex"
    v-bind="layer">
    <!-- add vl-source-* -->
    <component
      :is="`vl-source-${layer.source.type}`"
      :ref="`${layer.id}-source`"
      v-bind="layer.source">
      <!-- add static features to vl-source-vector if provided -->
      <template v-if="layer.source.staticFeatures && layer.source.staticFeatures.length">
        <VlFeature
          v-for="feature in layer.source.staticFeatures" :key="feature.id"
          :id="feature.id" :properties="feature.properties">
          <component
            :is="geometryTypeToCmpName(feature.geometry.type)"
            v-bind="feature.geometry"/>
        </VlFeature>
      </template>

      <!-- add inner source if provided (like vl-source-vector inside vl-source-cluster) -->
      <component
        v-if="layer.source.source"
        :is="layer.source.source.cmp"
        v-bind="layer.source.source">
        <!-- add static features to vl-source-vector if provided -->
        <template
          v-if="layer.source.source.staticFeatures && layer.source.source.staticFeatures.length">
          <VlFeature
            v-for="feature in layer.source.source.staticFeatures" :key="feature.id"
            :id="feature.id" :properties="feature.properties">
            <component
              :is="geometryTypeToCmpName(feature.geometry.type)"
              v-bind="feature.geometry"/>
          </VlFeature>
        </template>
      </component>
    </component>
    <!--// vl-source-* -->

    <!-- add style components if provided -->
    <!-- create vl-style-box or vl-style-func -->
    <template v-if="layer.style">
      <template
        v-if="{}.toString.call(layer.style) === '[object Function]'"
      >
        <!-- if 'style' is a function, use VlStyleFunc-->
        <component
          :is="'vl-style-func'"
          :function="createStyleFromObject(layer.style)" />
      </template>
      <template v-else>
        <!-- else, use normal styling -->
        <component
          v-for="(style, i) in layer.style"
          :key="i"
          :is="'vl-style'"
          v-bind="style">
          <!-- create inner style components: vl-style-circle,
            vl-style-icon, vl-style-fill, vl-style-stroke & etc -->
          <template v-if="!style.function">
            <component
              v-for="(st, cmp) in style"
              :key="cmp"
              :is="`vl-style-${cmp}`"
              v-bind="st">
              <!-- vl-style-fill, vl-style-stroke if provided -->
              <VlStyleFill
                v-if="st.fill"
                v-bind="st.fill"/>
              <VlStyleStroke
                v-if="st.stroke"
                v-bind="st.stroke"/>
            </component>
          </template>
        </component>
      </template>
    </template>
    <!--// style -->
  </component>
  <!--// other layers -->
</template>

<script>
import Vue from 'vue';
import {
  TileLayer,
  ImageLayer, ImageWmsSource,
  VectorTileLayer, VectorTileSource,
  TileWmsSource, WmtsSource,
  Style, StyleFunc,
} from 'vuelayers';
import { createStyle } from 'vuelayers/dist/ol-ext';
import WmtsCapabilitesProvider from './WMTSCapabilitesProvider.vue';

Vue.use(TileLayer);
// Vue.use(GroupLayer);
Vue.use(ImageLayer);
Vue.use(ImageWmsSource);
Vue.use(VectorTileLayer);
Vue.use(VectorTileSource);
Vue.use(TileWmsSource);
Vue.use(WmtsSource);
Vue.use(Style);
Vue.use(StyleFunc);

export default {
  props: {
    layer: {
      type: Object,
      required: true,
    },
    zIndex: {
      type: Number,
    },
  },
  components: {
    WmtsCapabilitesProvider,
  },
  data: () => ({
    wmtsCapabilitiesRequest: {},
  }),
  methods: {
    updateCapabilitiesRequest({ request, url }) {
      this.wmtsCapabilitiesRequest[url] = request;
    },
    createStyleFromObject(getFeatureStyleObject) {
      return (feature) => {
        const styleObject = getFeatureStyleObject(feature);
        return [
          createStyle(styleObject),
        ];
      };
    },
  },
};
</script>
