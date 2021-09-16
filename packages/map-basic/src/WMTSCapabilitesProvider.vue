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
    layerStyle: String,
    capabilitiesUrl: String,
    id: String,
    matrixSet: String,
    visible: Boolean,
    zIndex: Number,
    capabilitiesRequest: Object,
    requestEncoding: {
      type: String,
      default: 'KVP',
    },
    attributionProperty: {
      type: String,
      default: 'Abstract',
    },
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
      this.capabilitiesRequest[url]
        .then((response) => response.clone().text())
        .then((text) => {
          const xml = parser.read(text);
          const layerDef = xml.Contents.Layer
            .find((l) => l.Identifier === this.layerName);
          const attribution = layerDef[this.attributionProperty];
          let options = optionsFromCapabilities(
            xml,
            {
              layer: this.layerName,
              matrixSet: this.matrixSet,
              style: this.layerStyle,
            },
          );
          let tileUrl = options.urls;
          if (this.requestEncoding === 'REST' && layerDef.ResourceURL) {
            if (Array.isArray(layerDef.ResourceURL)) {
              tileUrl = layerDef.ResourceURL.map((item) => item.template);
            } else if (typeof layerDef.ResourceURL === 'string') {
              tileUrl = layerDef.ResourceURL.template;
            }
          }
          options = {
            ...options,
            attributions: attribution,
            requestEncoding: this.requestEncoding,
            urls: tileUrl,
            wrapX: true,
          };
          this.wmtsOptions = options;
          this.ready = true;
          return options;
        });
    },
    onWmtsLayerMounted(layer) {
      layer.$layer.setSource(new WMTS(this.wmtsOptions));
      this.$emit('mounted');
    },
  },
};
</script>
