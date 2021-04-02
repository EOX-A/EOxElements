<template>
  <map-basic
    :zoom="zoom"
    :center="center"
    :layers="layers"
    style="height: 100%; width: 100%;"
  >
    <template slot-scope="{hoverFeature}">
      <component v-if="hoverFeature" :is="'vl-overlay'"
        :position="hoverFeature.coordinate" :offset="[7, 7]" :positioning="hoverFeature.tooltip.left ? 'top-right' : 'top-left'">
        <template slot-scope="scope">
          <div class="map-tooltip">
            <v-tooltip v-model="showTooltip" attach=".map-tooltip">
              <ul>
                <li>
                  position: {{ scope.position }}
                </li>
                <li>
                  id: {{ hoverFeature.feature.get("id") }}
                </li>
              </ul>
            </v-tooltip>
          </div>
        </template>
      </component>
    </template>
  </map-basic>
</template>

<script>
import MapBasic from '@eox/map-basic'
import { VTooltip } from 'vuetify/lib'

export default {
  components: {
    MapBasic,
    VTooltip,
  },
  data: function() {
    return {
      zoom: 14,
      center: [1731756, 6228616],
      showTooltip: true,
      layers: [
        {
          type: 'group',
          layers: [
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
                    color: 'black',
                    width: 1,
                  },
                  fill: {
                    color: 'grey',
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
  },
}
</script>
