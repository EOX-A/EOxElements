<template>
  <map-basic
    ref="map"
    :zoom="zoom"
    :center="center"
    :layers="allLayers"
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
      zoom: 14,
      center: [1731756.231909257, 6223616.060472786],
      allLayers: [
        {
          id: 'terrain',
          title: 'Terrain Light',
          type: 'tile',
          visible: true,
          source: {
            type: 'wmts-capabilities',
            url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
            layerName: 'terrain-light',
            matrixSet: 'WGS84',
          },
        },
        {
          id: 'parcels',
          title: 'Agricultural Parcels',
          type: 'vector-tile',
          visible: true,
          source: {
            type: 'vector-tile',
            url: 'https://agri-8h5ffg409jlmduiuijhc.demo.hub.eox.at/agri-api/vectortiles/2020/06/30/{z}/{x}/{y}.pbf?config_date=2021-02-18&model_name=dummy',
          },
          style: this.parcelStyleFunc,
        },
      ],
    }
  },
  methods: {
    parcelStyleFunc(feature) {

      const parcelStyle = {
        strokeColor: '#000',
        strokeWidth: 1,
        fillColor: `#00${feature.get('ori_crop_id')*8}f`,
      };
      return parcelStyle;
    },
  },
}
</script>
