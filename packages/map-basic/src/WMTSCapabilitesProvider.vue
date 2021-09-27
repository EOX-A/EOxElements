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
    id: String,
    visible: Boolean,
    zIndex: Number,
    capabilitiesRequest: Object,
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
      return this.$attrs.url;
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
            .find((l) => l.Identifier === this.$attrs.layer);
          let options = optionsFromCapabilities(
            xml,
            {
              layer: this.$attrs.layer,
              matrixSet: layerDef.TileMatrixSetLink[0].TileMatrixSet,
              style: layerDef.Style.find((s) => s.isDefault).Identifier,
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
            urls: tileUrl,
            wrapX: true,
            ...this.$attrs, // inject source overrides
            attributions: typeof this.$attrs.attributions === 'function'
              ? this.$attrs.attributions(layerDef)
              : (this.$attrs.attributions || layerDef.Abstract),
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
