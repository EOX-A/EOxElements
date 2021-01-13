<template>
  <vl-layer-tile
    v-if="ready"
    @mounted="onWmtsLayerMounted"
    :visible="visible"
    :z-index="zIndex"
  >
  </vl-layer-tile>
</template>

<script>
import WMTSCapabilities from 'ol/format/WMTSCapabilities';
import WMTS, { optionsFromCapabilities } from 'ol/source/WMTS';

export default {
  props: {
    layerName: String,
    capabilitiesUrl: String,
    matrixSet: String,
    visible: Boolean,
    zIndex: Number,
  },
  data() {
    return {
      wmtsOptions: null,
      ready: false,
    };
  },
  computed: {
    wmtsCapabilitiesUrl() {
      return this.capabilitiesUrl;
    },
  },
  mounted() {
    const parser = new WMTSCapabilities();
    fetch(this.wmtsCapabilitiesUrl)
      .then((response) => response.text())
      .then((text) => {
        const xml = parser.read(text);
        const attribution = xml.Contents.Layer
          .find((l) => l.Identifier === this.layerName).Abstract;
        let options = optionsFromCapabilities(
          xml,
          {
            layer: this.layerName,
            matrixSet: this.matrixSet,
          },
        );
        options = {
          ...options,
          attributions: attribution,
        };
        this.wmtsOptions = options;
        this.ready = true;
        return options;
      });
  },
  methods: {
    onWmtsLayerMounted(layer) {
      layer.$layer.setSource(new WMTS(this.wmtsOptions));
    },
  },
};
</script>
