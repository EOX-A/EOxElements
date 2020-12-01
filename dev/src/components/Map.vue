<template>
  <div>
    <h1>OSM</h1>
    <map-basic :osm="true" />
    <h1>EOX</h1>
    <map-basic :eox="true" :layerName="'s2cloudless-2019'" />
  </div>
</template>

<script>
import MapBasic from '@eox/map-basic'

// import Vue from 'vue'
// import Vuelayers from 'vuelayers'

// Vue.use(Vuelayers)

export default {
  components: {
    MapBasic,
  },
}
</script>
