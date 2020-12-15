<template>
  <v-app class="fill-height"> 
    <v-content class="fill-height">
      <charts
        type="line"
        :dataObject='dataObject'
        style="width: 100%; height: 100%;"
      />
    </v-content>
  </v-app>
</template>
<script>
import Charts from '@eox/charts/dist/charts.umd';
import example from './example.json';

export default {
  components: {
    Charts,
  },
  computed: {
    dataObject(){
      return example;
    }
  },
}
</script>