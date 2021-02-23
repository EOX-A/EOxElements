<template>
  <div ref="tooltip" class="map-tooltip">
    <v-tooltip v-model="overlay" attach=".map-tooltip">
      <ul>
        <li
          v-for="(property, index) in tooltipContent"
          :key="index"
        >
          {{ property.display_name }}: {{ property.value }}
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
    propertiesFilter: Array,
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
    },
  },
  watch: {
    hoverFeature(element) {
      if (element) {
        this.tooltipContent = Object.keys(element.feature.properties_)
          .map((p) => ({
            field_name: p,
            display_name: p,
            value: element.feature.properties_[p],
          }));
        if (this.propertiesFilter) {
          this.tooltipContent = this.propertiesFilter
            .map((p) => ({
              field_name: p.field_name,
              display_name: p.display_name,
              value: element.feature.properties_[p.field_name],
            }));
        }
        this.overlay.setPosition(element.coordinate);
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
