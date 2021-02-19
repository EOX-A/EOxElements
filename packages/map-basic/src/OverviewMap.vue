<template>
  <div><!-- TODO: remove template --></div>
</template>

<script>
import TileLayer from 'ol/layer/Tile';
import { OverviewMap } from 'ol/control';

export default {
  props: {
    mapObject: Object,
    overviewLayer: Object,
  },
  mounted() {
    const source = this.overviewLayer.getSource();
    this.mapObject.$map.getControls().extend([
      new OverviewMap({
        collapsed: false,
        collapsible: true,
        layers: [
          new TileLayer({
            source,
          }),
        ],
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
