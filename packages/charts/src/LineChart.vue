<script>
import { Line, mixins } from 'vue-chartjs';
// import annotation from 'chartjs-plugin-annotation';
// import zoom from 'chartjs-plugin-zoom';

const { reactiveProp } = mixins;

export default {
  extends: Line,
  props: {
    chartData: Object,
    options: Object,
  },
  mixins: [reactiveProp],
  mounted() {
    // this.addPlugin(annotation);
    // this.addPlugin(zoom);
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    console.log(this.options);
    this.renderChart(this.chartData, this.options);
  },
  methods: {
    triggerRender() {
      this.renderChart(this.chartData, this.options);
    },
  },
};
</script>
