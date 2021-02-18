<template>
  <vl-style-func :function="styleFuncProp" />
</template>

<script>
import Vue from 'vue';
import { Style, Stroke, Fill } from 'ol/style'; // eslint-disable-line
import {
  Style as VlStyle,
  StyleFunc,
} from 'vuelayers';

Vue.use(VlStyle);
Vue.use(StyleFunc);

export default {
  props: {
    styleObject: Object,
    url: String,
  },
  data: () => ({
  }),
  computed: {
    styleFuncProp() {
      return () => (feature) => [
        new Style({
          stroke: new Stroke({
            color: this.isFunction(this.styleObject.stroke.color)
              ? this.styleObject.stroke.color(feature)
              : this.styleObject.stroke.color,
            width: this.isFunction(this.styleObject.stroke.width)
              ? this.styleObject.stroke.width(feature)
              : this.styleObject.stroke.width,
          }),
          fill: new Fill({
            color: this.isFunction(this.styleObject.fill.color)
              ? this.styleObject.fill.color(feature)
              : this.styleObject.fill.color,
          }),
        }),
      ];
    },
  },
  methods: {
    isFunction(functionToCheck) {
      return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    },
  },
};
</script>
