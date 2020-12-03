<template>
  <div
    class="d-flex justify-center"
    style="position: absolute; width: 100%; height: 100%;"
    @click.stop=""
    @dblclick.stop=""
  >
    <v-sheet
      class="row justify-center align-center"
      style="position: absolute; bottom: 30px;
        z-index: 1000; width: auto;
        max-width: 100%; border-radius: 4px;"
    >
      <v-col
        :cols="enableCompare ? 6 : 12"
      >
        <v-select
          outlined
          dense
          autofocus
          hide-details
          :prepend-inner-icon="(selectionItems && dataLayer) && (selectionItems
            .map((i) => i.value)
            .indexOf(dataLayer.value) > 0
              ? 'mdi-arrow-left-drop-circle'
              : 'mdi-asterisk')"
          :append-icon="(selectionItems && dataLayer) && (selectionItems
            .map((i) => i.value)
            .indexOf(dataLayer.value) < selectionItems.length - 1
              ? 'mdi-arrow-right-drop-circle'
              : 'mdi-asterisk')"
          menu-props="auto"
          :items="selectionItems"
          item-value="value"
          item-text="name"
          v-model="dataLayer"
          @change="dataLayerSelection"
          @click:prepend-inner="dataLayerReduce"
          @click:append="dataLayerIncrease"
        >
          <template v-slot:append-outer
          v-if="!disableCompareButton">
            <v-tooltip
              bottom
            >
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" @click="enableCompare = !enableCompare">mdi-compare</v-icon>
              </template>
              Compare two images
            </v-tooltip>
          </template>
        </v-select>
      </v-col>
      <v-col
        v-if="enableCompare"
        cols="6"
        class="pl-0"
      >
        <v-select
          v-if="enableCompare"
          outlined
          dense
          autofocus
          hide-details
          :prepend-inner-icon="(selectionItems && compareLayer) && (selectionItems
            .map((i) => i.value)
            .indexOf(compareLayer.value) > 0
              ? 'mdi-arrow-left-drop-circle'
              : 'mdi-asterisk')"
          :append-icon="(selectionItems && compareLayer) && (selectionItems
            .map((i) => i.value)
            .indexOf(compareLayer.value) < selectionItems.length - 1
              ? 'mdi-arrow-right-drop-circle'
              : 'mdi-asterisk')"
          menu-props="auto"
          :items="selectionItems"
          item-value="value"
          item-text="name"
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
  // VBtn,
  VCol,
  VIcon,
  VSelect,
  VSheet,
  VTooltip,
} from 'vuetify/lib';

export default {
  props: {
    selectionItems: Array,
  },
  components: {
    // VBtn,
    VCol,
    VIcon,
    VSelect,
    VSheet,
    VTooltip,
  },
  data: () => ({
    enableCompare: false,
    disableCompareButton: false,
    dataLayer: null,
    dataLayerIndex: 0,
    compareLayer: null,
  }),
  mounted() {
    this.dataLayer = this.selectionItems[this.selectionItems.length - 1];
    [this.compareLayer] = this.selectionItems;
  },
  methods: {
    dataLayerSelection(payload) {
      // Different object returned either by arrow use or by dropdown use
      if (Array.isArray(payload) || !(payload.value)) {
        this.dataLayer = { value: payload, name: `${payload}` };
      } else {
        this.dataLayer = payload;
      }
      const newIndex = this.selectionItems
        .map((i) => i.value)
        .indexOf(this.dataLayer.value ? this.dataLayer.value : this.dataLayer);
      this.dataLayerIndex = newIndex;
    },
    compareLayerSelection(payload) {
      // Different object returned either by arrow use or by dropdown use
      if (Array.isArray(payload) || !(payload.value)) {
        this.compareLayer = { value: payload, name: `${payload}` };
      } else {
        this.compareLayer = payload;
      }
      const newIndex = this.selectionItems
        .map((i) => i.value)
        .indexOf(this.compareLayer.value
          ? this.compareLayer.value : this.compareLayer);
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
        .map((i) => i.value)
        .indexOf(this.dataLayer.value ? this.dataLayer.value : this.dataLayer);
      this.dataLayerIndex = currentIndex - 1;
      this.dataLayerSelection(this.selectionItems[currentIndex - 1]);
    },
    dataLayerIncrease() {
      const currentIndex = this.selectionItems
        .map((i) => i.value)
        .indexOf(this.dataLayer.value ? this.dataLayer.value : this.dataLayer);
      this.dataLayerIndex = currentIndex + 1;
      this.dataLayerSelection(this.selectionItems[currentIndex + 1]);
    },
    compareLayerReduce() {
      const currentIndex = this.selectionItems
        .map((i) => i.value)
        .indexOf(this.compareLayer.value ? this.compareLayer.value : this.compareLayer);
      this.compareLayerIndex = currentIndex - 1;
      this.compareLayerSelection(this.selectionItems[currentIndex - 1]);
    },
    compareLayerIncrease() {
      const currentIndex = this.selectionItems
        .map((i) => i.value)
        .indexOf(this.compareLayer.value ? this.compareLayer.value : this.compareLayer);
      this.compareLayerIndex = currentIndex + 1;
      this.compareLayerSelection(this.selectionItems[currentIndex + 1]);
    },
  },
  watch: {
    dataLayer(dataLayer) {
      this.selectLayer('originalLayer', dataLayer.value);
    },
    compareLayer(compareLayer) {
      this.selectLayer('compareLayer', compareLayer.value);
    },
    enableCompare(active) {
      this.$emit('toggleCompare', active);
    },
  },
};
</script>
