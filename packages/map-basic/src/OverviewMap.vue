<template>
  <div><!-- TODO: remove template --></div>
</template>

<script>
import TileLayer from 'ol/layer/Tile';
import VectorTileLayer from 'ol/layer/VectorTile';
import { OverviewMap } from 'ol/control';

export default {
  props: {
    mapObject: Object,
    overviewLayers: Array,
  },
  mounted() {
    const layers = this.overviewLayers
      .reverse()
      .map((l) => {
        const source = l.getSource();
        let layer;
        if (l instanceof VectorTileLayer) {
          layer = new VectorTileLayer({
            source,
          });
        } else if (l instanceof TileLayer) {
          layer = new TileLayer({
            source,
          });
        }
        return layer;
      });
    this.mapObject.$map.getControls().extend([
      new OverviewMap({
        collapsed: false,
        collapsible: true,
        layers,
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
