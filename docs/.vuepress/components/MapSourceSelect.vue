<template>
  <map-basic
    :zoom="zoom"
    :layers="layers"
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
    layers: null,
    availableLayers: [
      {
        type: 'tile',
        id: 'terrain-light',
        title: 'Terrain Light',
        source: {
          ...srcDefaults,
          layer: 'terrain-light',
        },
      },
      {
        type: 'tile',
        id: '2016',
        title: 'Sentinel-2 cloudless 2016',
        source: {
          ...srcDefaults,
          layer: 's2cloudless',
        },
      },
      {
        type: 'tile',
        id: '2018',
        title: 'Sentinel-2 cloudless 2018',
        source: {
          ...srcDefaults,
          layer: 's2cloudless-2018',
        },
      },
      {
        type: 'tile',
        id: '2019',
        title: 'Sentinel-2 cloudless 2019',
        source: {
          ...srcDefaults,
          layer: 's2cloudless-2019',
        },
      },
      {
        type: 'tile',
        id: '2020',
        title: 'Sentinel-2 cloudless 2020',
        source: {
          ...srcDefaults,
          layer: 's2cloudless-2020',
        },
      },
    ],
  }),
  mounted() {
    this.layers = [
      this.availableLayers[this.availableLayers.length - 1]
    ];
  },
  methods: {
    changeLayer(layerId) {
      this.layers = [this.availableLayers.find(l => l.id === layerId)];
    },
  },
}
</script>
