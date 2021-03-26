<template>
  <map-basic
    :zoom="zoom"
    :center="center"
    :layers="layers"
    style="height: 100%; width: 100%;"
  >
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'

export default {
  components: {
    MapBasic,
  },
  data: function() {
    return {
      zoom: 14,
      center: [1731756, 6228616],
      layers: [
        {
          type: 'group',
          layers: [
            // background layer
            {
              id: 'terrain',
              title: 'Terrain Light',
              type: 'tile',
              visible: true,
              source: {
                type: 'wmts-capabilities',
                url: 'https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml',
                layerName: 'terrain-light',
                matrixSet: 'WGS84',
              },
            },
            // vector layer with dynamic styling
            {
              id: 'parcels-dynamic',
              title: 'Agricultural Parcels',
              type: 'vector-tile',
              visible: true,
              source: {
                type: 'vector-tile',
                url: 'https://pg-tileserv.demo.hub.eox.at/demo.agri_data_declaration/{z}/{x}/{y}.pbf',
              },
              style: this.parcelStyleFunc,
            },
            // vector layer with static styling
            {
              id: 'parcels-static',
              title: 'Agricultural Parcels',
              type: 'vector-tile',
              visible: true,
              source: {
                type: 'vector-tile',
                url: 'https://pg-tileserv.demo.hub.eox.at/demo.agri_data_declaration/{z}/{x}/{y}.pbf',
              },
              style: [
                {
                  stroke: {
                    color: 'blue',
                    width: 3,
                    lineDash: [5, 5]
                  },
                  text: {
                    text: 'Feature',
                    font: '24px sans-serif',
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
          ]
        },
      ],
    }
  },
  methods: {
    parcelStyleFunc(feature) {
      let fillColor = '#9999';
      if (feature.get('crop_id') < 90) {
        fillColor = '#ffff0099';
      }
      else if (feature.get('crop_id') < 120) {
        fillColor = '#fcba03';
      }
      else if (feature.get('crop_id') < 150) {
        fillColor = '#0ffc03';
      }
      const parcelStyle = {
        strokeColor: '#000',
        strokeWidth: 1,
        fillColor,
      };
      return parcelStyle;
    },
  },
}
</script>
