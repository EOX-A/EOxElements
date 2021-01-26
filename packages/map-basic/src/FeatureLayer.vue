<template>
  <vl-feature
    :properties="properties">
    <template>
      <vl-geom-point :coordinates="coordinates"/>
      <vl-style-box v-if="icon">
        <vl-style-icon
          :src="icon.src"
          :scale="icon.scale"
          :anchor="icon.anchor"
          :size="icon.size"/>
      </vl-style-box>
    </template>
  </vl-feature>
</template>

<script>
import Vue from 'vue';
import {
  Feature, PointGeom, IconStyle, StyleBox,
} from 'vuelayers';

Vue.use(Feature);
Vue.use(PointGeom);
Vue.use(IconStyle);
Vue.use(StyleBox);

export default {
  props: {
    properties: Object,
    coordinates: Array,
    icon: Object,
  },
};
</script>
