<template>
  <map-basic
    ref="map"
    :zoom.sync="zoom"
    :center.sync="center"
    :layers="layers"
    :mapConfig="{
      'data-projection': 'EPSG:32630',
    }"
    :viewConfig="{
      'projection': 'EPSG:32630',
      'min-zoom': 13,
      'max-zoom': 15,
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
    zoom: 14,
    center: [307260, 4390400],
  }),
  computed: {
    layers() {
      return [
        {
          type: 'webgl',
          source: {
            type: 'geotiff',
            sources: [
              {
                url:
                  'https://s2gm-gmv-eox-samples.s3.eu-central-1.amazonaws.com/utm/30N/monthly/2021/06/no_brdf/5/1014/31.tif',
                bands: [1, 2, 3],
                min: 50,
                nodata: 0,
                max: 3100,
              },
            ],
            attribution: "<a href='https://s2maps.eu'>Sentinel-2 cloudless</a> by <a href='https://eox.at/'>EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2019)",
          },
        },
      ];
    },
  },
};
</script>
