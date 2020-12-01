<template>
  <div class="container">
    <input id="swipe" type="range" v-model="swipe">
    <vl-layer-tile
      @precompose="onPrecompose"
      @postcompose="onPostcompose"
      :z-index="1"
    >
      <vl-source-osm v-if="swipeLayer === 'osm'"></vl-source-osm>
      <!-- <source-eox v-else :layer-name="swipeLayer"></source-eox> -->
    </vl-layer-tile>
  </div>
</template>

<script>
export default {
  name: 'map-layer-swipe',
  props: {
    swipeLayer: String,
  },
  data: () => ({
    swipe: 50,
  }),
  watch: {
    swipe() {
      this.$root.$emit('renderMap');
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
.container {
  position: absolute;
  height: 100%;
  width: 100%;
}

#swipe {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  z-index: 999;
}
</style>
