<template>
  <div
    class="d-flex justify-center"
    style="position: absolute; width: 100%; height: 100%;"
    @click.stop=""
    @dblclick.stop=""
  >
    <v-sheet
      class="row justify-center align-center"
      style="position: absolute; bottom: 60px;
        z-index: 1000; width: auto;
        max-width: 100%; border-radius: 4px;
        display: flex;"
    >
      <v-col
        :cols="compareActive ? 6 : 12"
        :class="reverseDirection ? 'order-2' : 'order-1'"
      >
        <v-select
          outlined
          dense
          autofocus
          hide-details
          :prepend-inner-icon="(selectionItems && dataLayer) && (selectionItems
            .map((i) => i.name)
            .indexOf(dataLayer.name) > 0
              ? 'mdi-arrow-left-drop-circle'
              : 'mdi-asterisk')"
          :append-icon="(selectionItems && dataLayer) && (selectionItems
            .map((i) => i.name)
            .indexOf(dataLayer.name) < selectionItems.length - 1
              ? 'mdi-arrow-right-drop-circle'
              : 'mdi-asterisk')"
          menu-props="auto"
          :items="selectionItems"
          item-value="name"
          item-text="title"
          v-model="dataLayer"
          @change="dataLayerSelection"
          @click:prepend-inner="dataLayerReduce"
          @click:append="dataLayerIncrease"
        >
          <template v-slot:[buttonSlot]
          v-if="enableCompare">
            <v-tooltip
              bottom
            >
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" @click="compareActive = !compareActive">mdi-compare</v-icon>
              </template>
              Compare two images
            </v-tooltip>
          </template>
        </v-select>
      </v-col>
      <v-col
        v-if="compareActive"
        cols="6"
        :class="reverseDirection ? 'pr-0 order-1' : 'pl-0 order-2'"
      >
        <v-select
          v-if="compareActive"
          outlined
          dense
          autofocus
          hide-details
          :prepend-inner-icon="(selectionItems && compareLayer) && (selectionItems
            .map((i) => i.name)
            .indexOf(compareLayer.name) > 0
              ? 'mdi-arrow-left-drop-circle'
              : 'mdi-asterisk')"
          :append-icon="(selectionItems && compareLayer) && (selectionItems
            .map((i) => i.name)
            .indexOf(compareLayer.name) < selectionItems.length - 1
              ? 'mdi-arrow-right-drop-circle'
              : 'mdi-asterisk')"
          menu-props="auto"
          :items="selectionItems"
          item-value="name"
          item-text="title"
          v-model="compareLayer"
          @change="compareLayerSelection"
          @click:prepend-inner="compareLayerReduce"
          @click:append="compareLayerIncrease"
        ></v-select>
      </v-col>
    </v-sheet>
  </div>
</template>

<script>
import {
  VCol,
  VIcon,
  VSelect,
  VSheet,
  VTooltip,
} from 'vuetify/lib';

export default {
  props: {
    enableCompare: Boolean,
    selectionItems: Array,
    reverseDirection: Boolean,
  },
  components: {
    VCol,
    VIcon,
    VSelect,
    VSheet,
    VTooltip,
  },
  data: () => ({
    compareActive: false,
    dataLayer: null,
    dataLayerIndex: 0,
    compareLayer: null,
  }),
  computed: {
    buttonSlot() {
      return this.reverseDirection
        ? 'prepend'
        : 'append-outer';
    },
  },
  mounted() {
    this.dataLayer = this.selectionItems[this.selectionItems.length - 1];
    [this.compareLayer] = this.selectionItems;
  },
  methods: {
    dataLayerSelection(payload) {
      // Different object returned either by arrow use or by dropdown use
      if (Array.isArray(payload) || !(payload.name)) {
        this.dataLayer = { name: payload, title: `${payload}` };
      } else {
        this.dataLayer = payload;
      }
      const newIndex = this.selectionItems
        .map((i) => i.name)
        .indexOf(this.dataLayer.name ? this.dataLayer.name : this.dataLayer);
      this.dataLayerIndex = newIndex;
    },
    compareLayerSelection(payload) {
      // Different object returned either by arrow use or by dropdown use
      if (Array.isArray(payload) || !(payload.name)) {
        this.compareLayer = { name: payload, title: `${payload}` };
      } else {
        this.compareLayer = payload;
      }
      const newIndex = this.selectionItems
        .map((i) => i.name)
        .indexOf(this.compareLayer.name
          ? this.compareLayer.name : this.compareLayer);
      this.compareLayerIndex = newIndex;
    },
    selectLayer(type, layerId) {
      if (type === 'originalLayer') {
        this.$emit('selectLayer', layerId);
      } else if (type === 'compareLayer') {
        this.$emit('selectCompareLayer', layerId);
      }
    },
    dataLayerReduce() {
      const currentIndex = this.selectionItems
        .map((i) => i.name)
        .indexOf(this.dataLayer.name ? this.dataLayer.name : this.dataLayer);
      this.dataLayerIndex = currentIndex - 1;
      this.dataLayerSelection(this.selectionItems[currentIndex - 1]);
    },
    dataLayerIncrease() {
      const currentIndex = this.selectionItems
        .map((i) => i.name)
        .indexOf(this.dataLayer.name ? this.dataLayer.name : this.dataLayer);
      this.dataLayerIndex = currentIndex + 1;
      this.dataLayerSelection(this.selectionItems[currentIndex + 1]);
    },
    compareLayerReduce() {
      const currentIndex = this.selectionItems
        .map((i) => i.name)
        .indexOf(this.compareLayer.name ? this.compareLayer.name : this.compareLayer);
      this.compareLayerIndex = currentIndex - 1;
      this.compareLayerSelection(this.selectionItems[currentIndex - 1]);
    },
    compareLayerIncrease() {
      const currentIndex = this.selectionItems
        .map((i) => i.name)
        .indexOf(this.compareLayer.name ? this.compareLayer.name : this.compareLayer);
      this.compareLayerIndex = currentIndex + 1;
      this.compareLayerSelection(this.selectionItems[currentIndex + 1]);
    },
  },
  watch: {
    dataLayer(dataLayer) {
      this.selectLayer('originalLayer', dataLayer.name);
    },
    compareLayer(compareLayer) {
      this.selectLayer('compareLayer', compareLayer.name);
    },
    compareActive(active) {
      this.$emit('toggleCompare', active);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-input__icon .mdi-asterisk {
  opacity: 0;
}
</style>
