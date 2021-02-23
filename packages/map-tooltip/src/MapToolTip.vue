<template>
  <div ref="tooltip" class="map-tooltip">
    <v-tooltip v-model="overlay" attach=".map-tooltip" v-if="tooltipContent">
      <ul>
        <li
          v-for="(property, index) in tooltipContent"
          :key="index"
        >
          {{ index }}: {{ property }}
        </li>
      </ul>
    </v-tooltip>
  </div>
</template>

<script>
import { VTooltip } from 'vuetify/lib';
import Overlay from 'ol/Overlay'; //eslint-disable-line

export default {
  props: {
    mapObject: Object,
    hoverFeature: Object,
  },
  components: {
    VTooltip,
  },
  data: () => ({
    overlay: true,
    tooltipContent: null,
  }),
  mounted() {
    this.setupTooltip();
  },
  methods: {
    setupTooltip() {
      this.overlay = new Overlay({
        element: this.$refs.tooltip,
        offset: [12, 12],
        positioning: 'top-left',
      });
      this.mapObject.$map.addOverlay(this.overlay);
      this.mapObject.$el.addEventListener('mouseleave', () => (this.tooltipContent = null))
    },
  },
  watch: {
    hoverFeature(element) {
      if (element) {
        this.tooltipContent = element.feature.properties_;
        this.overlay.setPosition(element.coordinate);
      } else {
        this.tooltipContent = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-tooltip__content {
  position: relative;
  top: 0 !important;
  left: 0 !important;
  z-index: 1001 !important;
}
</style>
