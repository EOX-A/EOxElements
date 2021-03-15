<template>
  <map-basic
    :mapZoom="2"
    :backgroundLayers="tileLayers"
    style="height: 100%; width: 100%;"
  />
</template>

<script>
import MapBasic from '@eox/map-basic'

export default {
  components: {
    MapBasic
  },
  data: () => ({
    tileLayers: [
      {
        type: 'tile',
        name: 's2cloudless-2019_3857',
        title: 'Sentinel-2 cloudless 2019',
        dataProvider: 'WMTScapabilites',
        capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
        matrixSet: 'GoogleMapsCompatible',
        layerStyle: 'default', // just as a test
        requestEncoding: 'REST', // just as a test
      },
    ],
  })
}
</script>
