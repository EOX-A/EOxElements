<template>
  <charts
    type="line"
    :dataObject='dataObject'
    :plotConfig='plotConfig'
    :indexTooltips='true'
    style="width: 100%; height: 100%;"
  />
</template>
<script>
import Charts from '@eox/charts';
import example from './example.json';

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
              lineTension: 0.0,
              pointRadius: 2,
              borderWidth: 1,
            },
          },
          position: 'right',
          color: '#2c2',
        },
        {
          id: 'yAxis2',
          parameters: {
            'avg_vv': {
              color: '#000',
              showLine: false,
              pointRadius: 1.5,
            }
          },
          position: 'left',
          color: '#000',
        },
        {
          id: 'yAxis3',
          parameters: {
            'avg_vh': {
              color: '#c22',
              showLine: false,
              pointRadius: 1.5,
            },
          },
          position: 'left',
          color: '#c22',
        },
      ],
    },
  }),
  computed: {
    dataObject(){
      return example;
    }
  },
}
</script>