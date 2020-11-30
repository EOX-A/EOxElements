<template>
  <vl-source-wmts
    :attributions="layer.attribution"
    :url="layer.url"
    :layer-name="layer.layer"
    :matrix-set="layer.matrixSet"
    :format="layer.format"
    :style-name="layer.style"
    :projection="layer.projection"
    :resolutions="layer.resolutions"
  ></vl-source-wmts>
</template>

<script>

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
  props: ['layerName'],
  data: () => ({
    zoom: 5,
    center: [13, 43],
    rotation: 0,

    selectedFeatures: [],

    eoxLayers: [
      {
        ...eoxMaps,
        title: '2019',
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
        xyz: true,
        attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>',
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
    layer() {
      return this.eoxLayers.find((l) => l.layer === this.layerName);
    },
  },
};
</script>
