# map-source-select

## Basic example
<div style="height:400px">
  <ClientOnly>
    <map-source-select />
  </ClientOnly>
</div>

``` md
<template>
  <v-app class="fill-height"> 
    <v-content class="fill-height">
      <map-basic
        :mapZoom="2"
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

const layerConfig = {
  dataProvider: 'WMTScapabilites',
  capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
  matrixSet: 'WGS84',
};

export default {
  components: {
    MapBasic,
    MapSourceSelect,
  },
  data: () => ({
    backgroundLayers: null,
    availableLayers: [
      {
        type: 'tile',
        name: 'osm',
        title: 'Open Street Map',
      },
      {
        ...layerConfig,
        type: 'tile',
        name: 'terrain-light',
        title: 'Terrain Light',
      },
      {
        ...layerConfig,
        type: 'tile',
        name: 's2cloudless',
        title: 'Sentinel-2 cloudless 2016',
      },
      {
        ...layerConfig,
        type: 'tile',
        name: 's2cloudless-2018',
        title: 'Sentinel-2 cloudless 2018',
      },
      {
        ...layerConfig,
        type: 'tile',
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
```
<br />

## Source select with `enableCompare` prop

<br />
<div style="height:400px">
  <ClientOnly>
    <map-source-select-compare />
  </ClientOnly>
</div>

``` md
<template>
  <v-app class="fill-height"> 
    <v-content class="fill-height">
      <map-basic
        :mapZoom="2"
        :backgroundLayers="backgroundLayers"
        :foregroundLayers="layerComparison ? foregroundLayers : []"
        style="height: 100%; width: 100%;"
      >
        <template slot-scope="{mapObject}">
          <map-layer-swipe
            v-if="mapObject"
            :mapObject="mapObject"
            embeddedMode
            :embeddedActive="layerComparison"
            reverseDirection
            :swipeLayer="foregroundLayers[0]"
            :originalLayer="backgroundLayers[0]"
            @swipeActive="toggleCompare"
          />
          <map-source-select
            enableCompare
            reverseDirection
            :selectionItems="availableLayers"
            @selectLayer="changeBackgroundLayer"
            @selectCompareLayer="changeForegroundLayer"
            @toggleCompare="toggleCompare"
          />
        </template>
      </map-basic>
    </v-content>
  </v-app>
</template>

<script>
import MapBasic from '@eox/map-basic/dist/map-basic.umd'
import MapLayerSwipe from '@eox/map-layer-swipe/dist/map-layer-swipe.umd'
import MapSourceSelect from '@eox/map-source-select/dist/map-source-select.umd'

const layerConfig = {
  dataProvider: 'WMTScapabilites',
  capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
  matrixSet: 'WGS84',
};

export default {
  components: {
    MapBasic,
    MapLayerSwipe,
    MapSourceSelect,
  },
    data: () => ({
    layerComparison: false,
    backgroundLayers: null,
    foregroundLayers: null,
    availableLayers: [
      {
        type: 'tile',
        name: 'osm',
        title: 'Open Street Map',
      },
      {
        ...layerConfig,
        type: 'tile',
        name: 'terrain-light',
        title: 'Terrain Light',
      },
      {
        ...layerConfig,
        type: 'tile',
        name: 's2cloudless',
        title: 'Sentinel-2 cloudless 2016',
      },
      {
        ...layerConfig,
        type: 'tile',
        name: 's2cloudless-2018',
        title: 'Sentinel-2 cloudless 2018',
      },
      {
        ...layerConfig,
        type: 'tile',
        name: 's2cloudless-2019',
        title: 'Sentinel-2 cloudless 2019',
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
    changeBackgroundLayer(layerId) {
      this.backgroundLayers = [this.availableLayers.find(l => l.name === layerId)];
    },
    changeForegroundLayer(layerId) {
      this.foregroundLayers = [this.availableLayers.find(l => l.name === layerId)];
    },
    toggleCompare(active) {
      this.layerComparison = active;
    },
  },
}
</script>
```

## Source select with vector layer

<br />
<div style="height:400px">
  <ClientOnly>
    <map-source-select-vector />
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
        showCenter
        :backgroundLayers="allLayers"
        @featureClicked="featureClicked"
        style="height: 100%; width: 100%;"
      >
        <template slot-scope="{mapObject}">
          <map-source-select
            :selectionItems="allLayers.filter(l => l.type === 'vector').map(l => ({ ...l, name: l.url }))"
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
  data: function() {
    return {
      selectedFeature: null,
      selectedSource: {
        name: 'https://demo-tileserv.hub.eox.at/public.lpis_at/{z}/{x}/{y}.pbf',
        title: 'LPIS',
        dataProvider: 'WMTScapabilites',
        capabilitiesUrl: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
        matrixSet: 'WGS84',
      },
      allLayers: [
        {
          type: 'tile',
          name: 'terrain-light',
          title: 'Terrain Light',
        },
        {
          type: 'vector',
          visibile: false,
          url: 'http://lpvis-demo.s3-website.eu-central-1.amazonaws.com/geodata/physical_blocks/{z}/{x}/{y}.pbf',
          title: 'Physical Blocks',
          tooltip: true,
          style: {
            stroke: {
              color: 'black',
              width: 1,
            },
            fill: {
              color: 'orange',
            },
          }
        },
        {
          type: 'vector',
          visibile: false,
          url: 'http://lpvis-demo.s3-website.eu-central-1.amazonaws.com/geodata/agricultural_parcels/{z}/{x}/{y}.pbf',
          title: 'Agricultural Parcels',
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
    changeBackgroundLayer(url) {
      this.allLayers = this.allLayers
        .map(l => ({ ...l, visible: (l.type === 'tile' || l.url == url) ? true : false }))
    },
    featureClicked(feature) {
      this.selectedFeature = feature;
    },
    featureStyle(feature) {
      if (feature.properties_.ctnuml4a === 1020) {
        return 'crimson';
      }
      let isHighlighted;
      if (this.selectedFeature) {
        isHighlighted = feature.properties_.ID === this.selectedFeature.properties_.ID;
      }
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