<template>
  <map-basic
    :tileLayers="tileLayers"
    style="height: 400px; width: 100%;"
  >
    <map-layer-swipe
      v-if="layerComparison"
      embeddedMode
      reverseDirection
      :swipeLayer="'osm'"
      :swipeLayerName="'OSM'"
      :originalLayerName="tileLayers[0]"
    />
    <map-source-select
      reverseDirection
      :selectionItems="selectionItems"
      @selectLayer="changeLayer"
      @selectCompareLayer="changeCompareLayer"
      @toggleCompare="toggleCompare"
    />
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic/dist/map-basic.umd'
import MapLayerSwipe from '@eox/map-layer-swipe/dist/map-layer-swipe.umd'
import MapSourceSelect from '@eox/map-source-select/dist/map-source-select.umd'

export default {
  components: {
    MapBasic,
    MapLayerSwipe,
    MapSourceSelect,
  },
  data: () => ({
    layerComparison: false,
    compareLayer: {
      name: 'Open Street Map',
      value: 'osm',
    },
    tileLayers: [
      // 'osm',
      // 'terrain-light',
      's2cloudless-2019',
    ],
    selectionItems: [
      {
        name: 'Open Street Map',
        value: 'osm',
      },
      {
        name: 'EOxMaps Terrain Light',
        value: 'terrain-light',
      },
      {
        name: 'EOxCloudless 2019',
        value: 's2cloudless-2019',
      },
    ]
  }),
  methods: {
    changeLayer(layerId) {
      this.tileLayers = [layerId];
    },
    changeCompareLayer(layerId) {
      this.compareLayer = [layerId];
    },
    toggleCompare(active) {
      this.layerComparison = active;
    },
  },
}
</script>
