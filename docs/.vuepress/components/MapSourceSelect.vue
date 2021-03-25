<template>
  <map-basic
    :zoom="zoom"
    :mapLayers="mapLayers"
    style="height: 100%; width: 100%;"
  >
    <template>
      <map-source-select
        :selectionItems="availableLayers"
        @selectLayer="changeLayer"
      />
    </template>
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'
import MapSourceSelect from '@eox/map-source-select'

const srcDefaults = {
  type: 'wmts-capabilities',
  url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
  matrixSet: 'WGS84',
};

export default {
  components: {
    MapBasic,
    MapSourceSelect,
  },
  data: () => ({
    zoom: 2,
    mapLayers: null,
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
    this.mapLayers = [
      this.availableLayers[this.availableLayers.length - 1]
    ];
  },
  methods: {
    changeLayer(layerId) {
      this.mapLayers = [this.availableLayers.find(l => l.id === layerId)];
    },
  },
}
</script>
