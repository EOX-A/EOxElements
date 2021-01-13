# map-basic

## Basic example
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
        :mapZoom="2"
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
        type: 'tile',
        name: 's2cloudless-2019_3857',
        title: 'Sentinel-2 cloudless 2019',
        dataProvider: 'WMTScapabilites',
        capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
        matrixSet: 'GoogleMapsCompatible',
      },
    ],
  })
}
</script>
```

## Vector layer and fill color function
<div style="height:400px">
  <ClientOnly>
    <map-basic-vector />
  </ClientOnly>
</div>

``` md
<template>
  <v-app class="fill-height"> 
    <v-content class="fill-height">
      <map-basic
        ref="map"
        :mapZoom="14"
        :mapCenter="[ 1731756.231909257, 6228616.060472786 ]"
        :backgroundLayers="allLayers"
        style="height: 100%; width: 100%;"
      >
      </map-basic>
    </v-content>
  </v-app>
</template>

<script>
import MapBasic from '@eox/map-basic/dist/map-basic.umd'

export default {
  components: {
    MapBasic,
  },
  data: function() {
    return {
      allLayers: [
        {
          type: 'tile',
          name: 'terrain-light',
          title: 'Terrain Light',
          dataProvider: 'WMTScapabilites',
          capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
          matrixSet: 'WGS84',
        },
        {
          type: 'vector',
          visibile: true,
          url: 'https://demo-tileserv.hub.eox.at/public.lpis_at/{z}/{x}/{y}.pbf',
          title: 'LPIS',
          tooltip: true,
          style: {
            stroke: {
              color: 'black',
              width: 1,
            },
            fill: {
              color: (feature) => this.featureStyle(feature),
            },
          }
        },
      ],
    }
  },
  methods: {
    featureStyle(feature) {
      if (feature.properties_.ctnuml4a === 1020) {
        return 'crimson';
      }
      let isHighlighted;
      // if (this.selectedFeature) {
      //   isHighlighted = feature.properties_.ID === this.selectedFeature.properties_.ID;
      // }
      if (feature.properties_.accuracy < 0.95) {
        return isHighlighted ? '#ffff00ff' : '#ffff0099';
      }
      if (feature.properties_.match === 'True') {
        return isHighlighted ? '#008000ff' : '#00800099';
      }
      if (feature.properties_.match === 'False') {
        return isHighlighted ? '#ff0000ff' : '#ff000099';
      }
      return '#99999999';
    },
  },
}
</script>
```