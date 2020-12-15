<template>
  <vl-style-func :factory="styleFuncProp" />
</template>

<script>
import Vue from 'vue';
import { Style, Stroke, Fill } from 'ol/style'; // eslint-disable-line
import {
  FillStyle, StyleBox, StrokeStyle,
  StyleFunc,
} from 'vuelayers';

Vue.use(FillStyle);
Vue.use(StyleBox);
Vue.use(StrokeStyle);
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
            color: this.styleObject.stroke.color,
            width: this.styleObject.stroke.width,
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
