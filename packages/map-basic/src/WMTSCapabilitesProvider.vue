<template>
  <vl-layer-tile
    v-if="ready"
    @mounted="onWmtsLayerMounted"
    :id="id"
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
    id: String,
    matrixSet: String,
    visible: Boolean,
    zIndex: Number,
    capabilitiesRequest: Object,
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
  created() {
    this.getCapabilities();
  },
  methods: {
    getCapabilities() {
      const parser = new WMTSCapabilities();
      const url = this.wmtsCapabilitiesUrl;

      if (!this.capabilitiesRequest[url]) {
        const request = fetch(url);
        this.$emit('fetchedCapabilities', { request, url });
      }
      this.$nextTick(() => this.capabilitiesRequest[url]
        .then((response) => response.clone().text())
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
        }));
    },
    onWmtsLayerMounted(layer) {
      layer.$layer.setSource(new WMTS(this.wmtsOptions));
    },
  },
};
</script>
