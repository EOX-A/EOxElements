<template>
  <div>
    <charts
      type="line"
      :dataObject='dataObject'
      :plotConfig='plotConfig'
      style="width: 100%; height: 100%;"
      v-model="date"
    />
    <button @click="changeDate" style="margin-top 20px; border: 1px solid black; border-radius: 4px; padding: 2px 7px">Change Selected Date</button>
  </div>
</template>
<script>
import Charts from '@eox/charts';
import example from './example.json';
import { DateTime } from 'luxon';

export default {
  components: {
    Charts,
  },
  data: () => ({
    plotConfig: {
      yAxes: [
        {
          id: 'yAxis1',
          parameters: {
            'NDVI': {
              color: '#2c2',
              lineTension: 0.2,
              pointRadius: 2,
              borderWidth: 1,
              showMinMax: true,
            },
          },
          position: 'left',
          drawOnChartArea: true,
        },
      ],
    },
    date: null
  }),
  computed: {
    dataObject(){
      return example;
    }
  },
  methods: {
    changeDate() {
      this.date = DateTime.fromISO('2019-02-11')
    }
  }
}
</script>