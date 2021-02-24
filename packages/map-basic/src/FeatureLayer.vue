<template>
  <vl-feature
    :properties="properties">
    <template>
      <vl-geom-point :coordinates="coordinates"/>
      <vl-style v-if="icon">
        <vl-style-icon
          :src="icon.src"
          :scale="icon.scale"
          :anchor="icon.anchor"
          :size="icon.size"/>
      </vl-style>
    </template>
  </vl-feature>
</template>

<script>
import Vue from 'vue';
import {
  Feature, Style,
} from 'vuelayers';

Vue.use(Feature);
Vue.use(Style);

export default {
  props: {
    properties: Object,
    coordinates: Array,
    icon: Object,
  },
};
</script>
