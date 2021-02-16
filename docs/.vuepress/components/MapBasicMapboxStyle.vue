<template>
  <map-basic
    :mapZoom="13"
    :mapCenter="[1783019, 6148052]"
    showCenter
    :backgroundLayers="tileLayers"
    :glStyleUrls="glStyleUrls"
    style="height: 100%; width: 100%;"
    @featuresClicked="featuresClicked"
    @mapboxStylesApplied="mapboxStylesApplied"
    ref='mapbasic'
  >
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'

export default {
  components: {
    MapBasic
  },
  data: () => ({
    glStyleUrls: ['/style_declarations.json'],
    tileLayers: [
      {
        type: 'tile',
        name: 'terrain-light',
        title: 'Terrain Light',
        dataProvider: 'WMTScapabilites',
        capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
        matrixSet: 'WGS84',
      },
    ],
  }),
  methods: {
    featuresClicked(ftrs) {
      ftrs.forEach((item) => {
        console.log(item.feature.properties_.SNAR_BEZEICHNUNG);
      });
    },
    mapboxStylesApplied() {
      // due to preset z-index rules on mapbasic, it can be needed to also manually set 
      // z-index of layers coming from mapbox style, as those come without z-index set by design
      const layers = this.$refs.mapbasic.getOlLayersByMapboxSource('declarations');
      layers.forEach((l, i) => {
        l.setZIndex(30 + i)
      });
    }
  },
}
</script>
