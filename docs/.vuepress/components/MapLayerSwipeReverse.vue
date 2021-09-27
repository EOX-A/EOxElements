<template>
  <map-basic
    :zoom="zoom"
    :layers="layers"
    style="height: 100%; width: 100%;"
  >
    <template slot-scope="{mapObject}">
      <map-layer-swipe
        v-if="mapObject"
        :mapObject="mapObject"
        ref="swipe"
        reverseDirection
        :swipeLayer="layers[1]"
        :originalLayer="layers[0]"
        @swipeActive="toggleCompare"
      >
        <template v-slot:activate>
          <v-btn
            color="primary"
            @click="$refs.swipe.enableSwipe(true)"
          >
            <v-icon left>mdi-compare</v-icon>
            Compare layers
          </v-btn>
        </template>
        <template v-slot:close>
          <v-btn
            fab
            small
            color="primary"
            @click="$refs.swipe.enableSwipe(false)"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </map-layer-swipe>
    </template>
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'
import MapLayerSwipe from '@eox/map-layer-swipe'

export default {
  components: {
    MapBasic,
    MapLayerSwipe,
  },
  data: () => ({
    zoom: 2,
    layers: [
      {
        id: '2020',
        title: '2020',
        type: 'tile',
        visible: true,
        source: {
          type: 'wmts-capabilities',
          url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
          layer: 's2cloudless-2020_3857',
          matrixSet: 'GoogleMapsCompatible',
        },
      },
      {
        id: '2018',
        title: '2018',
        type: 'tile',
        visible: true,
        source: {
          type: 'wmts-capabilities',
          url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
          layer: 's2cloudless-2018_3857',
          matrixSet: 'GoogleMapsCompatible',
        },
      },
    ],
  }),
  methods: {
    toggleCompare(active) {
      this.layerComparison = active;
    },
  },
}
</script>
