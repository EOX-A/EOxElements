<template>
  <map-basic
    :zoom="zoom"
    :center="center"
    :layers="layers"
    showCenter
    style="height: 100%; width: 100%;"
    @featuresClicked="featuresClicked"
    ref='mapbasic'
  >
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'

export default {
  components: {
    MapBasic
  },
  data: () => ({
    zoom: 13,
    center: [1783019, 6148052],
    layers: [
      {
        id: 'mapbox',
        type: 'group',
        'mapbox-style-layers': [
          'https://eox-a.github.io/elements/style_declarations.json',
        ],
      },
    ],
  }),
  methods: {
    featuresClicked(ftrs) {
      ftrs.forEach((item) => {
        console.log(item.feature.properties_);
      });
    },
  },
}
</script>
