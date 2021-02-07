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
    glStyleUrls: ['https://gist.githubusercontent.com/lubojr/b17af5c54f2b872ecef6d6757db7db1d/raw/ac1638aa2f6af693f388352e712622aa3e5ceffb/declarations.json'],
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
