<template>
  <map-basic
    :mapZoom="2"
    :backgroundLayers="backgroundLayers"
    style="height: 100%; width: 100%;"
  >
    <template slot-scope="{mapObject}">
      <map-source-select
        :selectionItems="availableLayers"
        @selectLayer="changeBackgroundLayer"
      />
    </template>
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'
import MapSourceSelect from '@eox/map-source-select'

const layerConfig = {
  dataProvider: 'WMTScapabilites',
  capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
  matrixSet: 'WGS84',
};

export default {
  components: {
    MapBasic,
    MapSourceSelect,
  },
  data: () => ({
    backgroundLayers: null,
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
  },
  methods: {
    changeBackgroundLayer(layerId) {
      this.backgroundLayers = [this.availableLayers.find(l => l.name === layerId)];
    },
  },
}
</script>
