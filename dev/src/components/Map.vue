<template>
  <div>
    <map-basic
      :tileLayers="tileLayers"
    >
      <map-layer-swipe :swipeLayer="'osm'" />
      <!-- <map-layer-swipe :swipeLayer="'s2cloudless-2019'" /> -->
    </map-basic>
  </div>
</template>

<script>
import MapBasic from '../../../packages/map-basic/dist/map-basic.umd'
import MapLayerSwipe from '../../../packages/map-layer-swipe/dist/map-layer-swipe.umd'

import Vue from 'vue'
import Vuelayers from 'vuelayers'

Vue.use(Vuelayers)

export default {
  components: {
    MapBasic,
    MapLayerSwipe,
  },
  data: () => ({
    tileLayers: [
      // 'osm',
      'terrain-light',
    ]
  }),
}
</script>
