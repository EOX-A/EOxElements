<template>
  <i
    style="display: none !important;">
  </i>
</template>

<script>
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate';

export default {
  name: 'VlControlMousePosition',
  props: {
    mapObject: Object,
    precision: {
      type: Number,
      default: 4,
    },
    projection: {
      type: String,
      default: 'EPSG:4326',
    },
    target: {
      type: String,
      default: '#mouse-position',
    },
  },
  mounted() {
    this.mapObject.$map.getControls().extend([
      new MousePosition({
        coordinateFormat: createStringXY(this.precision),
        projection: this.projection,
        // comment the following two lines to have the mouse position
        // be placed within the map.
        // className: 'mouse-position',
        target: document.querySelector(this.target),
        undefinedHTML: '&nbsp;',
      }),
    ]);
  },
};
</script>

<style lang="scss">
.ol-mouse-position {
  position: relative;
  top: 0;
  right: 0;
}
</style>
