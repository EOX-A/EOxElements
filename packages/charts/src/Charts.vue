<template>
  <div style="width: 100%; height: 100%;">
    <line-chart v-if='dataCollection'
      id="chart"
      class="fill-height"
      :width="null"
      :height="null"
      :chart-data='dataCollection'
      :options='chartOptions()'></line-chart>
  </div>
</template>

<script>
import LineChart from './LineChart.vue';
// test parcel request: https://parcel-eo-timeseries.v1.loose.eox.at/parcel-eo-timeseries?parcel_id=125196525
// --> get NDVI:
import example from './example.json';

export default {
  props: {
    //
  },
  components: {
    LineChart,
  },
  data: () => ({
  }),
  computed: {
    dataCollection() {
      //
      return true;
    },
  },
  created() {
    console.log(example);
  },
  methods: {
    chartOptions() {
      //
    },
  },
};
</script>
