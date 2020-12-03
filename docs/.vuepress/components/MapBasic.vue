<template>
  <map-basic
    :tileLayers="tileLayers"
    style="height: 400px; width: 100%;"
  />
</template>

<script>
import MapBasic from '@eox/map-basic/dist/map-basic.umd'

export default {
  components: {
    MapBasic
  },
  data: () => ({
    tileLayers: [
      // 'osm',
      // 'terrain-light',
      's2cloudless-2019',
    ],
  })
}
</script>