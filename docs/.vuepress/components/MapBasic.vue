<template>
  <map-basic
    :zoom.sync="zoom"
    :center.sync="center"
    :layers="layers"
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
        type: 'tile',
        source: {
          type: 'wmts-capabilities',
          url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
          layer: 's2cloudless-2021_3857',
        },
      },
    ],
  }),
};
</script>
