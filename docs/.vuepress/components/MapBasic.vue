<template>
  <v-app class="fill-height"> 
    <v-content class="fill-height">
      <map-basic
        :tileLayers="tileLayers"
        style="height: 100%; width: 100%;"
      />
    </v-content>
  </v-app>
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