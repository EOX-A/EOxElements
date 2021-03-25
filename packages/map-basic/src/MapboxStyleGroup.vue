<template>
  <div style="display: none !important"></div>
</template>

<script>
import olms from 'ol-mapbox-style';
import { getLayer, getLayers } from 'ol-mapbox-style';

export default {
  props: {
    mapObject: Object,
    urls: Array,
  },
  mounted() {
    this.createLayers();
  },
  methods: {
    createLayers() {
      if (this.urls) {
        const gls = Array.isArray(this.urls) ? this.urls : [this.urls];
        const promises = [];
        gls.forEach((style) => {
          // apply mapbox GL style(s) to existing map
          promises.push(olms(this.mapObject.$map, style));
        });
        // emit event of finished loading of styles
        Promise.allSettled(promises).then(() => this.mapboxStylesApplied());
      }
    },
    mapboxStylesApplied() {
      // get empty parent layer group
      const layerGroup = this.$parent.$olObject;

      // get all layers that have a 'mapbox-source'
      const mapboxLayers = this.mapObject.getLayers()
        .filter((l) => l.get('mapbox-source'));

      // add them to the empty group
      mapboxLayers.forEach((l) => {
        layerGroup.getLayers().array_.push(l);
      });

      // debugger;
      // // due to preset z-index rules on mapbasic, it can be needed to also manually set
      // // z-index of layers coming from mapbox style, as those come without z-index set by design
      // const layers = this.getOlLayersByMapboxSource('declarations');
      // debugger;
      // layers.forEach((l, i) => {
      //   l.setZIndex(30 + i);
      // });
    },
    getOlLayersByMapboxSource(source) {
      // returns OL layer instances provided by Mapbox style 'source'
      return getLayers(this.mapObject.$map, source);
    },
    getOlLayerByMapboxLayer(layer) {
      // returns OL layer instance provided by Mapbox style 'layer'
      return getLayer(this.mapObject.$map, layer);
    },
  },
};
</script>
