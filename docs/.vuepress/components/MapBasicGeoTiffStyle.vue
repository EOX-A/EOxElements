<template>
  <map-basic
    ref="map"
    :zoom.sync="zoom"
    :center.sync="center"
    :layers="layers"
    :mapConfig="{
      'data-projection': 'EPSG:4326',
    }"
    style="height: 100%; width: 100%;"
  >
    <div class="sliderContainer">
      <div
        v-for="(item, key) in Object.entries(styleVariables)"
        :key="key"
      >
        <span style="text-transform: capitalize">{{item[0]}}: {{item[1]}}</span><br />
        <input
          type="range"
          min="-0.5"
          max="0.5"
          step="0.01"
          :value="styleVariables[item[0]]"
          @input="(evt) => styleVariables[item[0]] = parseFloat(evt.target.value)"
        />
      </div>
    </div>
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic';

export default {
  components: {
    MapBasic,
  },
  data: () => ({
    zoom: 10,
    center: [16.97, 48 ],
    ndvi: [
      '/',
      ['-', ['band', 2], ['band', 1]],
      ['+', ['band', 2], ['band', 1]],
    ],
    ndwi: [
      '/',
      ['-', ['band', 3], ['band', 1]],
      ['+', ['band', 3], ['band', 1]],
    ],
    styleVariables: {
      exposure: 0,
      contrast: 0,
      saturation: 0,
    },
    baseLayers: [
      {
        type: 'tile',
        source: {
          type: 'wmts-capabilities',
          url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
          layer: 'terrain-light_3857',
        },
      },
    ],
  }),
  computed: {
    layers() {
      return [
        ...this.baseLayers,
        {
          type: 'webgl',
          source: {
            type: 'geotiff',
            sources: [
              {
                url: 'https://s2downloads.eox.at/demo/Sentinel-2/3857/R10m.tif',
                bands: [3, 4],
                min: 0,
                nodata: 0,
                max: 65535,
              },
              {
                url: 'https://s2downloads.eox.at/demo/Sentinel-2/3857/R60m.tif',
                bands: [9],
                min: 0,
                nodata: 0,
                max: 65535,
              },
            ],
            attribution: "<a href='https://s2maps.eu'>Sentinel-2 cloudless</a> by <a href='https://eox.at/'>EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2019)",
          },
          style: {
            color: [
              'color',
              // red: | NDVI - NDWI |
              ['*', 255, ['abs', ['-', this.ndvi, this.ndwi]]],
              // green: NDVI
              ['*', 255, this.ndvi],
              // blue: NDWI
              ['*', 255, this.ndwi],
              // alpha
              ['band', 4],
            ],
            exposure: ['var', 'exposure'],
            contrast: ['var', 'contrast'],
            saturation: ['var', 'saturation'],
            variables: this.styleVariables,
          },
        },
      ];
    },
  },
};
</script>

<style scoped>
.sliderContainer {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9999;
  background: #fffc;
  padding: 20px;
  border-radius: 0 0 0 5px;
}
</style>
