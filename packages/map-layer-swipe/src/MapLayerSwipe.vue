<template>
  <div>
    <input id="swipe" type="range" v-model="swipe">
    <slot
      name="layerItem"
      :onPrecompose="onPrecompose"
      :onPostcompose="onPostcompose"
    ></slot>
  </div>
</template>

<script>
export default {
  name: 'map-layer-swipe',
  data: () => ({
    swipe: 50,
  }),
  watch: {
    swipe() {
      this.$refs.map.render();
    },
  },
  methods: {
    onPrecompose(evt) {
      const ctx = evt.context;
      const width = ctx.canvas.width * (this.swipe / 100);

      ctx.save();
      ctx.beginPath();
      ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
      ctx.clip();
    },
    onPostcompose(evt) {
      const ctx = evt.context;
      ctx.restore();
    },
  },
};
</script>

<style scoped>
#swipe {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
}
</style>
