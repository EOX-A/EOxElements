<template></template>

<script>
import { OverviewMap } from 'ol/control';

export default {
  props: {
    mapObject: Object,
  },
  mounted() {
    this.mapObject.$map.getControls().extend([
      new OverviewMap({
        collapsed: false,
        collapsible: true,
      }),
    ]);
  },
};
</script>

<style lang="scss">
.ol-overviewmap .ol-overviewmap-map {
  margin: 0;
}
</style>
