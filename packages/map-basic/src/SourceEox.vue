<template>
  <vl-source-wmts
    :attributions="eoxLayer.attribution"
    :url="eoxLayer.url"
    :layer-name="eoxLayer.layer"
    :matrix-set="eoxLayer.matrixSet"
    :format="eoxLayer.format"
    :style-name="eoxLayer.style"
    :projection="eoxLayer.projection"
    :resolutions="eoxLayer.resolutions"
  ></vl-source-wmts>
</template>

<script>
import Vue from 'vue';
import { WmtsSource } from 'vuelayers';

Vue.use(WmtsSource);

const eoxMaps = {
  resolutions: [
    0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625,
    0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625,
    0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625,
  ],
  url: 'https://s2maps-tiles.eu/wmts?',
  matrixSet: 'WGS84',
  format: 'image/jpeg',
  style: 'default',
  projection: 'EPSG:4326',
};
export default {
  props: {
    layerName: {
      type: String,
      default: 's2cloudless-2019',
    },
  },
  data: () => ({
    zoom: 5,
    center: [13, 43],
    rotation: 0,

    eoxLayers: [
      {
        ...eoxMaps,
        title: 'Sentinel-2 cloudless 2016',
        layer: 's2cloudless',
        dark: false,
        attribution: '<a class="a-light" xmlns:dct="http://purl.org/dc/terms/" href="https://s2maps.eu" property="dct:title">Sentinel-2 cloudless - https://s2maps.eu</a> by <a class="a-light" xmlns:cc="http://creativecommons.org/ns#" href="https://eox.at" property="cc:attributionName" rel="cc:attributionURL">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2016 & 2017)',
        visible: true,
      },
      {
        ...eoxMaps,
        title: 'Sentinel-2 cloudless 2018',
        layer: 's2cloudless-2018',
        dark: false,
        attribution: '<a class="a-light" xmlns:dct="http://purl.org/dc/terms/" href="https://s2maps.eu" property="dct:title">Sentinel-2 cloudless - https://s2maps.eu</a> by <a class="a-light" xmlns:cc="http://creativecommons.org/ns#" href="https://eox.at" property="cc:attributionName" rel="cc:attributionURL">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2017 & 2018)',
        visible: true,
      },
      {
        ...eoxMaps,
        title: 'Sentinel-2 cloudless 2019',
        layer: 's2cloudless-2019',
        dark: false,
        attribution: '<a class="a-light" xmlns:dct="http://purl.org/dc/terms/" href="https://s2maps.eu" property="dct:title">Sentinel-2 cloudless - https://s2maps.eu</a> by <a class="a-light" xmlns:cc="http://creativecommons.org/ns#" href="https://eox.at" property="cc:attributionName" rel="cc:attributionURL">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2019)',
        visible: true,
      },
      {
        ...eoxMaps,
        title: 'Terrain light',
        layer: 'terrain-light',
        dark: true,
        attribution: 'Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors and <a href="https://maps.eox.at/#data">others</a>, Rendering &copy; <a href="http://eox.at">EOX</a>',
        visible: false,
      },
      {
        ...eoxMaps,
        layer: 'overlay_base_bright',
        format: 'image/png',
        attribution: 'Overlay: Data &copy; <a class="a-light" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Made with Natural Earth, Rendering &copy; <a class="a-light" href="https://eox.at">EOX</a>',
        visible: true,
      },
    ],
  }),
  computed: {
    eoxLayer() {
      return this.eoxLayers.find((l) => l.layer === this.layerName);
    },
  },
  mounted() {
    console.log('source-eox loaded');
  },
};
</script>
