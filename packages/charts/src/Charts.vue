<template>
  <div style="width: 100%; height: 100%;">
    <line-chart v-if='type=="line"'
      id="chart"
      class="fill-height"
      :width="null"
      :height="null"
      :chart-data='dataCollection'
      :options='chartOptions()'></line-chart>
  </div>
</template>

<script>

import 'chartjs-adapter-luxon'; // eslint-disable-line no-unused-vars
import { DateTime } from 'luxon';
import LineChart from './LineChart.vue';
// test parcel request: https://parcel-eo-timeseries.v1.loose.eox.at/parcel-eo-timeseries?parcel_id=125196525
// --> get NDVI:
import example from './example.json';


export default {
  props: {
    type: String,
    dataObject: Object,
  },
  components: {
    LineChart,
  },
  data: () => ({
  }),
  computed: {
    dataCollection() {
      const datasets = [];
      // Get highest level key(s) of dataset
      const topKeys = Object.keys(example);

      for (let i = 0; i < topKeys.length; i += 1) {
        const currKey = topKeys[i];
        const min = [];
        const max = [];
        const mean = [];
        const stDev = [];

        for (let j = 0; j < example[currKey].length; j += 1) {
          const t = DateTime.fromISO(example[currKey][j].date);
          if ('basicStats' in example[currKey][j]) {
            if ('max' in example[currKey][j].basicStats) {
              max.push({ t, y: example[currKey][j].basicStats.max });
            }
            if ('min' in example[currKey][j].basicStats) {
              min.push({ t, y: example[currKey][j].basicStats.min });
            }
            if ('mean' in example[currKey][j].basicStats) {
              mean.push({ t, y: example[currKey][j].basicStats.mean });
            }
            if ('stDev' in example[currKey][j].basicStats) {
              stDev.push({ t, y: example[currKey][j].basicStats.stDev });
            }
          }
        }
        // date
        datasets.push({
          data: max,
          label: 'max',
          fill: +1,
          backgroundColor: 'rgba(30,70,255,0.3)',
          borderColor: 'rgba(30,70,255,0.6)',
        });
        datasets.push({
          data: min,
          label: 'min',
          fill: -1,
          backgroundColor: 'rgba(30,70,255,0.3)',
          borderColor: 'rgba(30,70,255,0.6)',
        });
        datasets.push({
          data: mean,
          label: 'mean',
          fill: false,
          borderColor: 'rgb(255,70,50)',
          pointRadius: 4,
        });
        /*
        datasets.push({
          data: stDev, label: 'stDev', fill: false,
        });
        */
      }

      return {
        datasets,
      };
    },
  },
  created() {
    console.log(example);
  },
  methods: {
    chartOptions() {
      const xAxes = [{
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            month: 'MMM yy',
          },
          tooltipFormat: 'dd. MMM yyyy',
        },
        gridLines: {
          color: this.$vuetify.theme.isDark ? '#ddd6' : '#2226',
          strokeOpacity: 0.3,
          drawBorder: true,
        },
      }];

      const yAxes = [{
        gridLines: {
          color: this.$vuetify.theme.isDark ? '#ddd6' : '#2226',
          strokeOpacity: 0.3,
          drawBorder: true,
        },
      }];

      const settings = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes,
          yAxes,
        },
        tooltips: {
          mode: 'label',
          callbacks: {
            label: (tooltipItem, data) => {
              console.log(tooltipItem);
              const { datasetIndex, index } = tooltipItem;
              const currDat = data.datasets[datasetIndex];
              return `${currDat.label}: ${currDat.data[index].y.toFixed(4)}`;
            },
          },
        },
        /*
        pan: {
          enabled: true,
          mode: 'xy',
        },
        zoom: {
          enabled: true,
          mode: 'xy',
        },
        */
      };

      return settings;
    },
  },
};
</script>
