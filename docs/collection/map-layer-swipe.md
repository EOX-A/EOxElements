# map-layer-swipe

## Basic example
<div style="height:400px">
  <ClientOnly>
    <map-layer-swipe />
  </ClientOnly>
</div>

``` md
<template>
  <v-app class="fill-height"> 
    <v-content class="fill-height">
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
            :swipeLayer="foregroundLayers[0]"
            :originalLayer="backgroundLayers[0]"
            @swipeActive="toggleCompare"
          />
        </template>
      </map-basic>
    </v-content>
  </v-app>
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
        name: 's2cloudless-2019',
        title: 'Sentinel-2 cloudless 2019',
      },
    ],
    foregroundLayers: [
      {
        name: 's2cloudless-2018',
        title: 'Sentinel-2 cloudless 2018',
      },
    ],
  }),
  mounted() {
    this.backgroundLayers = [
      this.availableLayers[1]
    ];
    this.foregroundLayers = [
      this.availableLayers[this.availableLayers.length - 1],
    ];
  },
  methods: {
    toggleCompare(active) {
      this.layerComparison = active;
    },
  },
}
</script>
```
<br />

## With `reverseDirection` prop

<br />
<div style="height:400px">
  <ClientOnly>
    <map-layer-swipe-reverse />
  </ClientOnly>
</div>

``` md
<template>
  <v-app class="fill-height"> 
    <v-content class="fill-height">
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
            reverseDirection
            :swipeLayer="foregroundLayers[0]"
            :originalLayer="backgroundLayers[0]"
            @swipeActive="toggleCompare"
          />
        </template>
      </map-basic>
    </v-content>
  </v-app>
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
        name: 's2cloudless-2019',
        title: 'Sentinel-2 cloudless 2019',
      },
    ],
    foregroundLayers: [
      {
        name: 's2cloudless-2018',
        title: 'Sentinel-2 cloudless 2018',
      },
    ],
  }),
  mounted() {
    this.backgroundLayers = [
      this.availableLayers[1]
    ];
    this.foregroundLayers = [
      this.availableLayers[this.availableLayers.length - 1],
    ];
  },
  methods: {
    toggleCompare(active) {
      this.layerComparison = active;
    },
  },
}
</script>
```