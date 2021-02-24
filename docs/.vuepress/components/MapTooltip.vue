<template>
  <map-basic
    ref="map"
    :mapZoom="14"
    :mapCenter="[ 1731756.231909257, 6223616.060472786 ]"
    :backgroundLayers="allLayers"
    style="height: 100%; width: 100%;"
  >
    <template slot-scope="{mapObject, hoverFeature}">
      <map-tooltip v-if="mapObject"
        ref="tooltip" :mapObject="mapObject" :hoverFeature="hoverFeature" />
    </template>
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'
import MapTooltip from '@eox/map-tooltip'

export default {
  components: {
    MapBasic,
    MapTooltip
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
          url: 'https://agri.demo.hub.eox.at/agri-api/vectortiles/2020/06/30/{z}/{x}/{y}.pbf?config_date=2021-02-18',
          title: 'Demo Declarations',
          tooltip: true,
          style: {
            stroke: {
              color: 'black',
              width: 1,
            },
            fill: {
              color: (feature) => this.featureStyle(feature),
            },
          }
        },
      ],
    }
  },
  methods: {
    featureStyle(feature) {
      return `#00${feature.properties_.ori_crop_id*8}f`;
    },
  },
}
</script>
