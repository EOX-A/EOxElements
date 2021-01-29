<template>
  <map-basic
    :mapZoom="2"
    :backgroundLayers="backgroundLayers"
    :foregroundLayers="foregroundLayers"
    style="height: 100%; width: 100%;"
  >
    <template slot-scope="{mapObject}">
      <map-layer-swipe
        v-if="mapObject"
        :mapObject="mapObject"
        ref="swipe"
        reverseDirection
        :swipeLayer="foregroundLayers[0]"
        :originalLayer="backgroundLayers[0]"
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
    backgroundLayers: [
      {
        type: 'tile',
        name: 's2cloudless-2019_3857',
        title: 'Sentinel-2 cloudless 2019',
        dataProvider: 'WMTScapabilites',
        capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
        matrixSet: 'GoogleMapsCompatible',
      },
    ],
    foregroundLayers: [
      {
        name: 's2cloudless-2018_3857',
        title: 'Sentinel-2 cloudless 2018',
        dataProvider: 'WMTScapabilites',
        capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
        matrixSet: 'GoogleMapsCompatible',
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
