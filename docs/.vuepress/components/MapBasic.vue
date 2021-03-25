<template>
  <map-basic
    :mapZoom="mapZoom"
    :mapLayers="mapLayers"
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
    mapZoom: 2,
    mapLayers: [
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
