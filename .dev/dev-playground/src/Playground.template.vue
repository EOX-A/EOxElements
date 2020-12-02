<template>
  <div>
    <!-- <map-basic
      :tileLayers="tileLayers"
    >
      <map-layer-swipe :swipeLayer="'osm'" />
    </map-basic> -->
  </div>
</template>

<script>
// import MapBasic from '@eox/map-basic/dist/map-basic.umd'
// import MapLayerSwipe from '@eox/map-layer-swipe/dist/map-basic.umd'

export default {
  components: {
    // MapBasic,
    // MapLayerSwipe,
  },
  data: () => ({
    tileLayers: [
      // 'terrain-light',
      's2cloudless-2019',
    ]
  }),
}
</script>
