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
      annotations: [
        {
          drawTime: 'beforeDatasetsDraw',
          type: 'box',
          xScaleID: 'xAxis1',
          xMin: '2019-07-01',
          xMax: '2019-07-10',
          borderWidth: 0,
          borderColor: '#0000',
          backgroundColor: '#55d5ff55',
        },
        {
          id: 'harvestlabel',
          type: 'line',
          mode: 'vertical',
          scaleID: 'xAxis1',
          value: '2019-07-05',
          borderWidth: 0,
          borderColor: '#0000',
          label: {
            yAdjust: -120,
            backgroundColor: '#fff0',
            fontColor: '#50d0f0',
            content: 'harvest',
            enabled: true,
          },
        },
        {
          drawTime: 'beforeDatasetsDraw',
          type: 'box',
          xScaleID: 'xAxis1',
          xMin: '2019-07-20',
          xMax: '2019-09-10',
          borderWidth: 0,
          borderColor: '#0000',
          backgroundColor: '#30303055',
        },
        {
          id: 'traininglabel',
          type: 'line',
          mode: 'vertical',
          scaleID: 'xAxis1',
          value: '2019-08-15',
          borderWidth: 0,
          borderColor: '#0000',
          label: {
            yAdjust: -120,
            backgroundColor: '#fff0',
            fontColor: '#222a',
            content: 'training',
            enabled: true,
          },
        },
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