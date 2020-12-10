# map-basic

<div style="height:400px">
  <ClientOnly>
    <map-basic />
  </ClientOnly>
</div>

``` md
<template>
  <v-app class="fill-height"> 
    <v-content class="fill-height">
      <map-basic
        :backgroundLayers="tileLayers"
        style="height: 100%; width: 100%;"
      />
    </v-content>
  </v-app>
</template>

<script>
import MapBasic from '@eox/map-basic'

export default {
  components: {
    MapBasic
  },
  data: () => ({
    tileLayers: [
      {
        name: 's2cloudless-2019',
        title: 'Sentinel-2 cloudless 2019',
      },
    ],
  })
}
</script>
```