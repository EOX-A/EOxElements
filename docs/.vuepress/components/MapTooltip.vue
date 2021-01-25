<template>
  <map-basic
    ref="map"
    :mapZoom="14"
    :mapCenter="[ 1731756.231909257, 6228616.060472786 ]"
    :backgroundLayers="allLayers"
    style="height: 100%; width: 100%;"
  >
    <template slot-scope="{mapObject, hoverFeature}">
      <map-tool-tip v-if="mapObject"
        ref="tooltip" :mapObject="mapObject" :hoverFeature="hoverFeature" />
    </template>
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'
import MapToolTip from '@eox/map-tooltip'

export default {
  components: {
    MapBasic,
    MapToolTip
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
          visibile: false,
          url: 'http://lpvis-demo.s3-website.eu-central-1.amazonaws.com/geodata/agricultural_parcels/{z}/{x}/{y}.pbf',
          title: 'Agricultural Parcels',
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
      if (feature.properties_.ctnuml4a === 1020) {
        return 'crimson';
      }
      let isHighlighted;
      if (feature.properties_.accuracy < 0.95) {
        return isHighlighted ? '#ffff00ff' : '#ffff0099';
      }
      if (feature.properties_.match === 'True') {
        return isHighlighted ? '#008000ff' : '#00800099';
      }
      if (feature.properties_.match === 'False') {
        return isHighlighted ? '#ff0000ff' : '#ff000099';
      }
      return '#99999999';
    },
  },
}
</script>
