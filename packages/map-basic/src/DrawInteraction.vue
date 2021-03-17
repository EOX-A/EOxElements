<template>
  <div>
    <vl-layer-vector :z-index="999">
      <vl-source-vector :features.sync="features" ident="the-source"></vl-source-vector>

      <vl-style-box>
        <vl-style-stroke color="green"></vl-style-stroke>
        <vl-style-fill color="rgba(255,255,255,0.5)"></vl-style-fill>
      </vl-style-box>
    </vl-layer-vector>
    <vl-interaction-draw type="Polygon" source="the-source" @drawend="drawEnd">
      <vl-style-box>
        <vl-style-stroke color="blue"></vl-style-stroke>
        <vl-style-fill color="rgba(255,255,255,0.5)"></vl-style-fill>
      </vl-style-box>
    </vl-interaction-draw>
  </div>
</template>

<script>
import Vue from 'vue';
import { DrawInteraction, VectorLayer, VectorSource } from 'vuelayers';

Vue.use(DrawInteraction);
Vue.use(VectorLayer);
Vue.use(VectorSource);

export default {
  data: () => ({
    features: [],
  }),
  methods: {
    drawEnd({ feature }) {
      this.$emit('drawEnd', feature);
    },
  },
};
</script>
