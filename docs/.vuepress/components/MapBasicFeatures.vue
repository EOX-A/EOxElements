<template>
  <map-basic
    :zoom="zoom"
    :center="center"
    showCenter
    dataProjection="EPSG:4326"
    :mapLayers="mapLayers"
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
    zoom: 16,
    center: [16.3602, 48.2190],
    mapLayers: [
      {
        id: 'osm',
        title: 'Open Street Map',
        type: 'tile',
        visible: true,
        source: {
          type: 'wmts-capabilities',
          url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
          layerName: 'osm_3857',
          matrixSet: 'GoogleMapsCompatible',
        },
      },
    ],
    featureLayers: [
      {
        properties: {
          foo: 'bar'
        },
        coordinates: [
          16.3602,
          48.2188,
        ],
        icon: {
          src: 'https://eox.at/EOX-POI.png',
          scale: 0.3,
          anchor: [0.5, 1],
          size: [500, 258]
        }
      },
    ],
  })
}
</script>
