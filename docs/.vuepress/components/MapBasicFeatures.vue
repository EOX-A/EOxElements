<template>
  <map-basic
    :mapZoom="16"
    :mapCenter="[1821222.7489322994, 6143400]"
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
          src: 'https://eox.at/EOX-POI.svg',
          scale: 0.5,
          anchor: [0.285, 0.55],
          size: [500, 249]
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
