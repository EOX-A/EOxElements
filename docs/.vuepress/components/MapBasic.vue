<template>
  <map-basic
    :mapZoom="mapZoom"
    :mapLayers="mapLayers"
    style="height: 100%; width: 100%;"
  />
</template>

<script>
import MapBasic from '@eox/map-basic';

export default {
  components: {
    MapBasic,
  },
  data: () => ({
    mapZoom: 2,
    mapLayers: [
      {
        id: 'cloudless',
        title: 'Sentinel-2 cloudless 2019',
        type: 'tile',
        visible: true,
        source: {
          type: 'wmts-capabilities',
          url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
          layerName: 's2cloudless-2019_3857',
          matrixSet: 'GoogleMapsCompatible',
        },
      },
    ],
    backgroundLayers: [
      // Countries vector layer
      // loads GeoJSON data from remote server
      {
        id: 'countries',
        title: 'Countries',
        cmp: 'vl-layer-vector',
        visible: false,
        source: {
          cmp: 'vl-source-vector',
          url: 'https://openlayers.org/en/latest/examples/data/geojson/countries.geojson',
        },
        style: [
          {
            cmp: 'vl-style',
            styles: {
              'vl-style-fill': {
                color: [255, 255, 255, 0.5],
              },
              'vl-style-stroke': {
                color: '#219e46',
                width: 2,
              },
              'vl-style-text': {
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
          },
        ],
      },
      // Tile layer with WMS source
      {
        id: 'wms',
        title: 'WMS',
        cmp: 'vl-layer-tile',
        visible: false,
        source: {
          cmp: 'vl-source-tile-wms',
          url: 'https://ahocevar.com/geoserver/wms',
          layers: 'topp:states',
          extParams: {TILED: true},
          serverType: 'geoserver',
        },
      },
      // Tile layer with WMTS source
      {
        id: 'wmts',
        title: 'WMTS',
        cmp: 'vl-layer-tile',
        visible: false,
        source: {
          cmp: 'vl-source-wmts',
          url: 'https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/',
          layerName: '0',
          matrixSet: 'EPSG:3857',
          format: 'image/png',
          styleName: 'default',
        },
      },
      {
        id: 'wfs',
        title: 'WFS (Canada water areas)',
        cmp: 'vl-layer-vector',
        visible: false,
        renderMode: 'image',
        source: {
          cmp: 'vl-source-vector',
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
      {
        id: 'wms-image',
        title: 'Image WMS',
        cmp: 'vl-layer-image',
        visible: false,
        source: {
          cmp: 'vl-source-image-wms',
          url: 'https://ahocevar.com/geoserver/wms',
          layers: 'topp:states',
          serverType: 'geoserver',
        },
      },
      {
        id: 'vector-tiles',
        title: 'Vector tiles',
        cmp: 'vl-layer-vector-tile',
        visible: false,
        source: {
          cmp: 'vl-source-vector-tile',
          url: 'https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/{z}/{y}/{x}.pbf',
        },
        style: [
          {
            cmp: 'vl-style',
            styles: {
              'vl-style-stroke': {
                width: 2,
                color: '#2979ff',
              },
              'vl-style-circle': {
                radius: 5,
                stroke: {
                  width: 1.5,
                  color: '#2979ff',
                },
              },
            },
          },
        ],
      },
    ],
  })
}
</script>
