<template>
  <div style="width: 100%; height: 100%;position: relative;">
    <line-chart ref='lineChart' v-if='type=="line"'
      id="chart"
      class="fill-height"
      :width="null"
      :height="null"
      :chart-data='dataCollection'
      :options='chartOptions()'></line-chart>
    <div ref='tooltip' class='charts-tooltip' style='position:absolute;width: 100%'>
      <v-tooltip v-model='showTooltip' attach='.charts-tooltip' v-if='tooltipContent' right >
        {{ tooltipContent.title }}
        <ul>
          <li v-for="(row) in tooltipContent.rows" :key="row" >
            {{ row }}
          </li>
      </ul>
      </v-tooltip>
    </div>
  </div>
</template>

<script>

import Chart from 'chart.js';
import { DateTime } from 'luxon';
import 'chartjs-adapter-luxon'; // eslint-disable-line no-unused-vars
import { VTooltip } from 'vuetify/lib';
import * as ChartZoomPlugin from 'chartjs-plugin-zoom';
import LineChart from './LineChart.vue';

Chart.plugins.register([ChartZoomPlugin]);

export default {
  props: {
    type: String,
    dataObject: Object,
  },
  components: {
    LineChart,
    VTooltip,
  },
  data: () => ({
    showTooltip: false,
    tooltipContent: null,
  }),
  computed: {
    dataCollection() {
      return this.createDataCollection(this.dataObject);
    },
    darkModeEnabled() {
      return this.$vuetify.theme.isDark;
    },
  },
  created() {
  },
  methods: {
    renderChart() {
      this.$refs.lineChart.triggerRender();
    },
    createDataCollection(dataObject) {
      const datasets = [];
      // Get highest level key(s) of dataset
      const topKeys = Object.keys(dataObject);

      for (let i = 0; i < topKeys.length; i += 1) {
        const currKey = topKeys[i];
        const min = [];
        const max = [];
        const mean = [];
        const stDev = [];

        for (let j = 0; j < dataObject[currKey].length; j += 1) {
          const t = DateTime.fromISO(dataObject[currKey][j].date);
          if ('basicStats' in dataObject[currKey][j]) {
            if ('max' in dataObject[currKey][j].basicStats) {
              max.push({ t, y: dataObject[currKey][j].basicStats.max });
            }
            if ('min' in dataObject[currKey][j].basicStats) {
              min.push({ t, y: dataObject[currKey][j].basicStats.min });
            }
            if ('mean' in dataObject[currKey][j].basicStats) {
              mean.push({ t, y: dataObject[currKey][j].basicStats.mean });
            }
            if ('stDev' in dataObject[currKey][j].basicStats) {
              stDev.push({ t, y: dataObject[currKey][j].basicStats.stDev });
            }
          }
        }
        // date
        datasets.push({
          data: max,
          label: 'max',
          fill: +2,
          backgroundColor: 'rgba(30,70,255,0.3)',
          borderColor: 'rgba(30,70,255,0.6)',
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
        });
        datasets.push({
          data: mean,
          label: 'mean',
          fill: false,
          borderColor: 'rgb(255,70,50)',
          pointRadius: 4,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
        });
        datasets.push({
          data: min,
          label: 'min',
          fill: -2,
          backgroundColor: 'rgba(30,70,255,0.3)',
          borderColor: 'rgba(30,70,255,0.6)',
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
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
          color: this.darkModeEnabled ? '#ddd6' : '#2226',
          strokeOpacity: 0.3,
          drawBorder: true,
        },
      }];

      const yAxes = [{
        type: 'linear',
        gridLines: {
          color: this.darkModeEnabled ? '#ddd6' : '#2226',
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
          // Disable the on-canvas tooltip
          enabled: false,
          mode: 'label',
          callbacks: {
            label: (tooltipItem, data) => {
              const { datasetIndex, index } = tooltipItem;
              const currDat = data.datasets[datasetIndex];
              return `${currDat.label}: ${currDat.data[index].y.toFixed(4)}`;
            },
          },
          custom: (tooltipModel) => {
            if (tooltipModel.opacity !== 0) {
              this.showTooltip = true;
            } else {
              this.showTooltip = false;
              return;
            }
            if (tooltipModel.body) {
              const title = tooltipModel.title[0];
              const bodyLines = tooltipModel.body.map((bodyItem) => bodyItem.lines[0]);
              this.tooltipContent = {
                title,
                rows: bodyLines,
              };
            }
            // const position = this.$refs.lineChart.$refs.canvas.getBoundingClientRect();
            // TODO: Check if we are outside chart with tooltip and adapt position
            this.$refs.tooltip.style.left = `${Math.round(tooltipModel.caretX)}px`;
            this.$refs.tooltip.style.top = `${Math.round(tooltipModel.caretY)}px`;
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
  watcher: {
    /*
    '$vuetify.theme.isDark'() {
      this.renderChart();
    },
    */
  },
};

</script>
