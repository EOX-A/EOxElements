<template>
  <map-basic
    :zoom.sync="zoom"
    :layers.sync="layers"
    showCenter
    :mapConfig="{
      // https://vuelayers.github.io/#/docs/component/map?id=properties
      'data-projection': 'EPSG:4326',
    }"
    :viewConfig="{
      // https://vuelayers.github.io/#/docs/component/view?id=properties
      'max-zoom': 14,
      'projection': 'EPSG:3857',
    }"
    style="height: 100%; width: 100%;"
  />
</template>

<script>
import MapBasic from '@eox/map-basic';

export default {
  components: {
    MapBasic,
  },
  data: () => ({
    zoom: 2,
    layers: [
      {
        id: 'cloudless',
        title: 'Sentinel-2 cloudless 2019',
        type: 'tile',
        visible: true,
        source: {
          type: 'wmts-capabilities',
          url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
          layerName: 's2cloudless-2019_3857',
          matrixSet: 'GoogleMapsCompatible',
        },
      },
    ],
  }),
};
</script>
