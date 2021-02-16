<template>
  <map-basic
    :mapZoom="15"
    :mapCenter="[1801868, 6137793]"
    showCenter
    :backgroundLayers="tileLayers"
    :glStyleUrls="glStyleUrls"
    style="height: 100%; width: 100%;"
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
  })
}
</script>
