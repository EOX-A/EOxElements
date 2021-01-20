<template>
  <map-basic
    ref="map"
    :mapZoom="14"
    :mapCenter="[ 1731756.231909257, 6228616.060472786 ]"
    showCenter
    :backgroundLayers="allLayers"
    @featureClicked="featureClicked"
    style="height: 100%; width: 100%;"
  >
    <template slot-scope="{mapObject}">
      <map-source-select
        :selectionItems="allLayers.filter(l => l.type === 'vector').map(l => ({ ...l, name: l.url }))"
        @selectLayer="changeBackgroundLayer"
      />
    </template>
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'
import MapSourceSelect from '@eox/map-source-select'

export default {
  components: {
    MapBasic,
    MapSourceSelect,
  },
  data: function() {
    return {
      selectedFeature: null,
      selectedSource: {
        name: 'https://demo-tileserv.hub.eox.at/public.lpis_at/{z}/{x}/{y}.pbf',
        title: 'LPIS',
        dataProvider: 'WMTScapabilites',
        capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
        matrixSet: 'WGS84',
      },
      allLayers: [
        {
          dataProvider: 'WMTScapabilites',
          capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
          matrixSet: 'WGS84',
          type: 'tile',
          name: 'terrain-light',
          title: 'Terrain Light',
        },
        {
          type: 'vector',
          visibile: true,
          url: 'https://demo-tileserv.hub.eox.at/public.lpis_at/{z}/{x}/{y}.pbf',
          title: 'LPIS',
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
        {
          type: 'vector',
          visibile: false,
          url: 'http://lpvis-demo.s3-website.eu-central-1.amazonaws.com/geodata/physical_blocks/{z}/{x}/{y}.pbf',
          title: 'Physical Blocks',
          tooltip: true,
          style: {
            stroke: {
              color: 'black',
              width: 1,
            },
            fill: {
              color: 'orange',
            },
          }
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
    changeBackgroundLayer(url) {
      this.allLayers = this.allLayers
        .map(l => ({ ...l, visible: (l.type === 'tile' || l.url == url) ? true : false }))
    },
    featureClicked(feature) {
      this.selectedFeature = feature;
    },
    featureStyle(feature) {
      if (feature.properties_.ctnuml4a === 1020) {
        return 'crimson';
      }
      let isHighlighted;
      if (this.selectedFeature) {
        isHighlighted = feature.properties_.ID === this.selectedFeature.properties_.ID;
      }
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
