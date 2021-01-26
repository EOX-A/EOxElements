<template>
  <map-basic
    :mapZoom="16"
    :mapCenter="featureLayers[0].coordinates"
    showCenter
    :backgroundLayers="tileLayers"
    :featureLayers="featureLayers"
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
    featureLayers: [
      {
        properties: {
          foo: 'bar'
        },
        coordinates: [
          1821222.7489322994,
          6143332.194302502
        ],
        icon: {
          src: 'https://eox.at/EOX_Logo.svg',
          scale: 0.4,
          anchor: [0.08, 0.45],
          size: [2000, 90]
        }
      },
    ],
    tileLayers: [
      {
        type: 'tile',
        name: 'osm_3857',
        title: 'Open Street Map',
        dataProvider: 'WMTScapabilites',
        capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
        matrixSet: 'GoogleMapsCompatible',
      },
    ],
  })
}
</script>
