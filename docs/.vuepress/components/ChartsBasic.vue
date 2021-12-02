<template>
  <charts
    type="line"
    :dataObject='dataObject'
    :plotConfig='plotConfig'
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
            'NDVI': [
              {
                id: 'mean',
                path: 'basicStats.mean',
                fill: false,
                borderColor: '#2c2',
                backgroundColor: '#2c2',
                lineTension: 0.2,
                pointRadius: 2,
                borderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
              },
              {
                id: 'max',
                path: 'basicStats.max',
                fill: '+1',
                borderWidth: 1,
                backgroundColor: 'rgba(70,70,70,0.2)',
                borderColor: 'rgba(70,70,70,0.5)',
                pointRadius: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 2,
              },
              {
                id: 'min',
                path: 'basicStats.min',
                fill: '-1',
                borderWidth: 1,
                backgroundColor: 'rgba(70,70,70,0.2)',
                borderColor: 'rgba(70,70,70,0.5)',
                pointRadius: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 2,
              },
            ],
          },
          position: 'left',
          drawOnChartArea: true,
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