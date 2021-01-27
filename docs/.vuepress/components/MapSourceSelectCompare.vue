<template>
  <map-basic
    :mapZoom="2"
    :backgroundLayers="backgroundLayers"
    :foregroundLayers="layerComparison ? foregroundLayers : []"
    style="height: 100%; width: 100%;"
  >
    <template slot-scope="{mapObject}">
      <map-layer-swipe
        v-if="mapObject"
        :mapObject="mapObject"
        embeddedMode
        :embeddedActive="layerComparison"
        reverseDirection
        :swipeLayer="foregroundLayers[0]"
        :originalLayer="backgroundLayers[0]"
        @swipeActive="toggleCompare"
      />
      <map-source-select
        v-if="mapObject"
        enableCompare
        reverseDirection
        :selectionItems="availableLayers"
        :comparisonLayer="foregroundLayers[0]"
        :originalLayer="backgroundLayers[0]"
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

const layerConfig = {
  dataProvider: 'WMTScapabilites',
  capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
  matrixSet: 'WGS84',
};

export default {
  components: {
    MapBasic,
    MapLayerSwipe,
    MapSourceSelect,
  },
    data: () => ({
    layerComparison: false,
    backgroundLayers: null,
    foregroundLayers: null,
    availableLayers: [
      {
        type: 'tile',
        name: 'osm',
        title: 'Open Street Map',
      },
      {
        ...layerConfig,
        type: 'tile',
        name: 'terrain-light',
        title: 'Terrain Light',
      },
      {
        ...layerConfig,
        type: 'tile',
        name: 's2cloudless',
        title: 'Sentinel-2 cloudless 2016',
      },
      {
        ...layerConfig,
        type: 'tile',
        name: 's2cloudless-2018',
        title: 'Sentinel-2 cloudless 2018',
      },
      {
        ...layerConfig,
        type: 'tile',
        name: 's2cloudless-2019',
        title: 'Sentinel-2 cloudless 2019',
      },
    ],
  }),
  mounted() {
    this.backgroundLayers = [
      this.availableLayers[this.availableLayers.length - 1]
    ];
    this.foregroundLayers = [
      this.availableLayers[0],
    ];
  },
  methods: {
    changeBackgroundLayer(layerId) {
      this.backgroundLayers = [this.availableLayers.find(l => l.name === layerId)];
    },
    changeForegroundLayer(layerId) {
      this.foregroundLayers = [this.availableLayers.find(l => l.name === layerId)];
    },
    toggleCompare(active) {
      this.layerComparison = active;
    },
  },
}
</script>
