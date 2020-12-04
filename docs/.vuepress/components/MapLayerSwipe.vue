<template>
  <v-app class="fill-height"> 
    <v-content class="fill-height">
      <map-basic
        :tileLayers="tileLayers"
        style="height: 100%; width: 100%;"
      >
        <map-layer-swipe
          :reverseDirection="false"
          :swipeLayer="compareLayer.value"
          :swipeLayerName="compareLayer.name"
          :originalLayerName="tileLayers[0]"
        />
      </map-basic>
    </v-content>
  </v-app>
</template>

<script>
import MapBasic from '@eox/map-basic/dist/map-basic.umd'
import MapLayerSwipe from '@eox/map-layer-swipe/dist/map-layer-swipe.umd'

export default {
  components: {
    MapBasic,
    MapLayerSwipe,
  },
  data: () => ({
    layerComparison: false,
    compareLayer: {
      name: 'Open Street Map',
      value: 'osm',
    },
    tileLayers: [
      // 'osm',
      // 'terrain-light',
      's2cloudless-2019',
    ],
    selectionItems: [
      {
        name: 'Open Street Map',
        value: 'osm',
      },
      {
        name: 'EOxMaps Terrain Light',
        value: 'terrain-light',
      },
      {
        name: 'EOxCloudless 2019',
        value: 's2cloudless-2019',
      },
    ]
  }),
}
</script>
