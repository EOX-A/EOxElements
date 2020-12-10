<template>
  <v-app class="fill-height"> 
    <v-content class="fill-height">
      <map-basic
        :backgroundLayers="backgroundLayers"
        style="height: 100%; width: 100%;"
      >
        <template slot-scope="{mapObject}">
          <map-source-select
            :selectionItems="availableLayers"
            @selectLayer="changeBackgroundLayer"
          />
        </template>
      </map-basic>
    </v-content>
  </v-app>
</template>

<script>
import MapBasic from '@eox/map-basic/dist/map-basic.umd'
import MapSourceSelect from '@eox/map-source-select/dist/map-source-select.umd'

export default {
  components: {
    MapBasic,
    MapSourceSelect,
  },
  data: () => ({
    backgroundLayers: null,
    availableLayers: [
      {
        name: 'osm',
        title: 'Open Street Map',
      },
      {
        name: 'terrain-light',
        title: 'Terrain Light',
      },
      {
        name: 's2cloudless',
        title: 'Sentinel-2 cloudless 2016',
      },
      {
        name: 's2cloudless-2018',
        title: 'Sentinel-2 cloudless 2018',
      },
      {
        name: 's2cloudless-2019',
        title: 'Sentinel-2 cloudless 2019',
      },
    ],
  }),
  mounted() {
    this.backgroundLayers = [
      this.availableLayers[this.availableLayers.length - 1]
    ];
  },
  methods: {
    changeBackgroundLayer(layerId) {
      this.backgroundLayers = [this.availableLayers.find(l => l.name === layerId)];
    },
  },
}
</script>
