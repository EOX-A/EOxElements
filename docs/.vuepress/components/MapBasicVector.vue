<template>
  <map-basic
    ref="map"
    :mapZoom="14"
    :mapCenter="[ 1731756.231909257, 6228616.060472786 ]"
    :backgroundLayers="allLayers"
    style="height: 100%; width: 100%;"
  >
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'

export default {
  components: {
    MapBasic,
  },
  data: function() {
    return {
      allLayers: [
        {
          type: 'tile',
          name: 'terrain-light',
          title: 'Terrain Light',
          dataProvider: 'WMTScapabilites',
          capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
          matrixSet: 'WGS84',
        },
        {
          type: 'vector',
          visible: false,
          url: 'https://parcels-api-public.demo.hub.eox.at/demo.agri_data_declaration/{z}/{x}/{y}.pbf',
          title: 'Agricultural Parcels',
          tooltip: true,
          style: {
            stroke: {
              color: 'black',
              width: 1,
            },
            fill: {
              color: (feature) => this.fillColor(feature),
            },
          }
        },
      ],
    }
  },
  methods: {
    fillColor(feature) {
      if (feature.properties_.cropId < 90) {
        return '#ffff0099';
      }
      else if (feature.properties_.cropId < 120) {
        return '#fcba03';
      }
      else if (feature.properties_.cropId < 150) {
        return '#0ffc03';
      }
      return '#99999999';
    },
  },
}
</script>
