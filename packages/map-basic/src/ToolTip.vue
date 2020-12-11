<template>
  <span class="tooltip" v-html="tooltipContent"></span>
</template>

<script>
export default {
  props: {
    mapObject: Object,
  },
  data: () => ({
    overlay: true,
    tooltipContent: null,
  }),
  methods: {
    onPointerMove(feature) {
      console.log(feature);
      this.tooltipContent = `ID: ${feature.properties_.ID}<br />Match: ${feature.properties_.match}<br />Accuracy: ${feature.properties_.accuracy}`;
    },
  },
};
</script>

<style scoped>
.tooltip {
  background: rgba(97, 97, 97, 0.9);
  color: #FFFFFF;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  display: inline-block;
  padding: 5px 16px;
  text-transform: initial;
  width: auto;
  opacity: 0.9;
  pointer-events: none;
}
</style>

<style>
.tooltipOverlay {
  pointer-events: none;
}
</style>
