<template>
  <map-basic
    :zoom="zoom"
    :layers="layers"
    style="height: 100%; width: 100%;"
  >
    <v-card
      class="pa-3"
      style="position: absolute; z-index: 1; top: 20px; right: 20px"
    >
      <v-switch
        v-for="layer in layers"
        :key="layer.id"
        v-model="layer.visible"
        :label="layer.title"
        hide-details
        class="mt-0"
      ></v-switch>
    </v-card>
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic';

export default {
  components: {
    MapBasic,
  },
  data: () => ({
    zoom: 2,
    layers: [
      {
        id: 'cloudless',
        title: 'WMTS from Capabilities',
        type: 'tile',
        visible: true,
        source: {
          type: 'wmts-capabilities',
          url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
          layerName: 's2cloudless-2019_3857',
          matrixSet: 'GoogleMapsCompatible',
          attributionProperty: 'Title',
        },
      },
      // Tile layer with WMTS source
      {
        id: 'wmts',
        title: 'WMTS',
        type: 'tile',
        visible: false,
        source: {
          type: 'wmts',
          url: 'https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/',
          layerName: '0',
          matrixSet: 'EPSG:3857',
          format: 'image/png',
          styleName: 'default',
        },
      },
      // Tile layer with WMS source
      {
        id: 'wms',
        title: 'Tile WMS',
        type: 'tile',
        visible: false,
        source: {
          type: 'tile-wms',
          url: 'https://ahocevar.com/geoserver/wms',
          layers: 'topp:states',
          extParams: {TILED: true},
          serverType: 'geoserver',
        },
      },
      {
        id: 'wms-image',
        title: 'Image WMS',
        type: 'image',
        visible: false,
        source: {
          type: 'image-wms',
          url: 'https://ahocevar.com/geoserver/wms',
          layers: 'topp:states',
          serverType: 'geoserver',
          format: 'image/png', // default
          version: '1.3.0', // default
        },
      },
      {
        id: 'wfs',
        title: 'WFS',
        type: 'vector',
        visible: false,
        renderMode: 'image',
        source: {
          type: 'vector',
          features: [],
          url(extent, resolution, projection) {
            return 'https://ahocevar.com/geoserver/wfs?service=WFS&' +
              'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
              'outputFormat=application/json&srsname=' + projection + '&' +
              'bbox=' + extent.join(',') + ',' + projection
          },
          // strategyFactory() {
            //   return loadingBBox
          // },
        },
      },
      // Countries vector layer
      // loads GeoJSON data from remote server
      {
        id: 'countries',
        title: 'Vector',
        type: 'vector',
        visible: false,
        source: {
          type: 'vector',
          url: 'https://openlayers.org/en/latest/examples/data/geojson/countries.geojson',
        },
        style: [
          {
            fill: {
              color: [255, 255, 255, 0.5],
            },
            stroke: {
              color: '#219e46',
              width: 2,
            },
            text: {
              text: '\uf041',
              font: '24px FontAwesome',
              fill: {
                color: '#2355af',
              },
              stroke: {
                color: 'white',
              },
            },
          },
        ],
      },
      {
        id: 'vector-tiles',
        title: 'Vector tiles',
        type: 'vector-tile',
        visible: false,
        source: {
          type: 'vector-tile',
          url: 'https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/{z}/{y}/{x}.pbf',
        },
        style: [
          {
            stroke: {
              width: 2,
              color: '#2979ff',
            },
            circle: {
              radius: 5,
              stroke: {
                width: 1.5,
                color: '#2979ff',
              },
            },
          },
        ],
      },
      {
        id: 'xyz',
        title: 'XYZ',
        type: 'tile',
        visible: false,
        source: {
          type: 'xyz',
          url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        },
      },
    ],
  }),
}
</script>
