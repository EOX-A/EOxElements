<template>
  <div ref="tooltip" class="tooltip">
    <v-tooltip v-model="overlay" attach=".tooltip">
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
      this.$emit('addOverlay', this.overlay);
    },
    onPointerMove(feature) {
      this.tooltipContent = feature.properties_;
    },
  },
};
</script>

<style scoped>
.v-tooltip__content {
  position: relative;
  top: 0 !important;
  left: 0 !important;
  z-index: 1001 !important;
}
</style>
