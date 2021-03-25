<template>
  <map-basic
    :zoom.sync="zoom"
    :center.sync="center"
    :layers.sync="layers"
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
    center: [0, 0],
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
