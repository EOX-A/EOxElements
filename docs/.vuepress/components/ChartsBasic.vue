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
      annotations: [
        {
          drawTime: 'beforeDatasetsDraw',
          type: 'box',
          xScaleID: 'xAxis1',
          xMin: '2017-07-01',
          xMax: '2020-08-10',
          borderWidth: 0,
          backgroundColor: 'rgba(207, 109, 109, 0.54)',
        }
      ]
    },
  }),
  computed: {
    dataObject(){
      return example;
    }
  },
}
</script>