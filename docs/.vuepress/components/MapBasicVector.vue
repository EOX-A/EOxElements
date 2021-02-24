<template>
  <map-basic
    ref="map"
    :mapZoom="14"
    :mapCenter="[ 1731756, 6228616 ]"
    :backgroundLayers="allLayers"
    style="height: 100%; width: 100%;"
    showCenter
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
          visible: true,
          url: 'https://agri.demo.hub.eox.at/parcels-api/demo.agri_data_declaration/{z}/{x}/{y}.pbf',
          title: 'Agricultural Parcels',
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
      if (feature.properties_.crop_id < 90) {
        return '#ffff0099';
      }
      else if (feature.properties_.crop_id < 120) {
        return '#fcba03';
      }
      else if (feature.properties_.crop_id < 150) {
        return '#0ffc03';
      }
      return '#99999999';
    },
  },
}
</script>
