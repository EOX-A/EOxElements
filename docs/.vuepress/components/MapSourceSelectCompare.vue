<template>
  <map-basic
    :zoom="zoom"
    :layers="layers"
    style="height: 100%; width: 100%;"
  >
    <template slot-scope="{mapObject}">
      <map-layer-swipe
        v-if="mapObject"
        :mapObject="mapObject"
        embeddedMode
        :embeddedActive="layerComparison"
        reverseDirection
        :swipeLayer="layers[1]"
        :originalLayer="layers[0]"
        @swipeActive="toggleCompare"
      />
      <map-source-select
        v-if="mapObject"
        enableCompare
        reverseDirection
        :selectionItems="availableLayers"
        :comparisonLayer="layers[1]"
        :originalLayer="layers[0]"
        @selectLayer="changeBackgroundLayer"
        @selectCompareLayer="changeForegroundLayer"
        @toggleCompare="toggleCompare"
      />
    </template>
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'
import MapLayerSwipe from '@eox/map-layer-swipe'
import MapSourceSelect from '@eox/map-source-select'

const srcDefaults = {
  type: 'wmts-capabilities',
  url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
  matrixSet: 'WGS84',
};

export default {
  components: {
    MapBasic,
    MapLayerSwipe,
    MapSourceSelect,
  },
    data: () => ({
    zoom: 2,
    layerComparison: false,
    layers: null,
    availableLayers: [
      {
        type: 'tile',
        id: 'terrain-light',
        title: 'Terrain Light',
        source: {
          ...srcDefaults,
          layerName: 'terrain-light',
        },
      },
      {
        type: 'tile',
        id: '2016',
        title: 'Sentinel-2 cloudless 2016',
        source: {
          ...srcDefaults,
          layerName: 's2cloudless',
        },
      },
      {
        type: 'tile',
        id: '2018',
        title: 'Sentinel-2 cloudless 2018',
        source: {
          ...srcDefaults,
          layerName: 's2cloudless-2018',
        },
      },
      {
        type: 'tile',
        id: '2019',
        title: 'Sentinel-2 cloudless 2019',
        source: {
          ...srcDefaults,
          layerName: 's2cloudless-2019',
        },
      },
      {
        type: 'tile',
        id: '2020',
        title: 'Sentinel-2 cloudless 2020',
        source: {
          ...srcDefaults,
          layerName: 's2cloudless-2020',
        },
      },
    ],
  }),
  mounted() {
    this.layers = [
      this.availableLayers[this.availableLayers.length - 1],
      this.availableLayers[0],
    ];
  },
  methods: {
    changeBackgroundLayer(layerId) {
      this.$set(this.layers, 0, this.availableLayers.find(l => l.id === layerId))
    },
    changeForegroundLayer(layerId) {
      this.$set(this.layers, 1, this.availableLayers.find(l => l.id === layerId))
    },
    toggleCompare(active) {
      this.layerComparison = active;
    },
  },
}
</script>
