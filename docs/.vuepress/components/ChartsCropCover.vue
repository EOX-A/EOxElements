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
            ],
          },
          position: 'left',
          color: '#2c2',
          ticks: {
              fontColor: '#2c2',
              suggestedMin: 0,
              suggestedMax: 1
          }
        },
        {
          id: 'yCropCover',
          parameters: {
            'cropCoverVegetated': [
              {
                id: 'vegetated',
                label: 'vegetated',
                path: 'confidence',
                fill: true,
                borderColor: '#0000',
                backgroundColor: '#b6eea699',
                radius: 0,
              }
            ],
            'cropCoverNonVegetated': [
              {
                label: 'not vegetated',
                path: 'confidence',
                fill: true,
                borderColor: '#0000',
                backgroundColor: '#c0b29899',
                radius: 0,
              }
            ],

          },
          position: 'right',
          ticks: {
              suggestedMin: 0,
              suggestedMax: 1
          }
        },
      ],
    },
  }),
  computed: {
    dataObject(){
      const cropCoverExample = [
        {
          covered: true,
          confidence: 0.85,
          start_date: '2019-07-01',
          end_date: '2019-07-31',
        },
        {
          covered: false,
          confidence: 0.75,
          start_date: '2019-08-01',
          end_date: '2019-08-31',
        },
      ];
      example['cropCoverVegetated'] = [];
      example['cropCoverNonVegetated'] = [];
      cropCoverExample.forEach((d) => {
        if (d.covered) {
          example['cropCoverVegetated'].push({
            date: d.start_date,
            confidence: d.confidence,
          });
          example['cropCoverVegetated'].push({
            date: d.end_date,
            confidence: d.confidence,
          });
          // example['cropCoverVegetated'].push({
          //   date: d.end_date,
          //   confidence: null,
          // }); // avoid connection across dateranges
        } else {
          example['cropCoverNonVegetated'].push({
            date: d.start_date,
            confidence: d.confidence,
          });
          example['cropCoverNonVegetated'].push({
            date: d.end_date,
            confidence: d.confidence,
          });
          // example['cropCoverNonVegetated'].push({
          //   date: d.end_date,
          //   confidence: null,
          // }); // avoid connection across dateranges
        }
      });
      return example;
    }
  },
}
</script>