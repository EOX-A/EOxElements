<template>
  <charts
    type="line"
    :dataObject='dataObject'
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
  computed: {
    dataObject(){
      return example;
    }
  },
}
</script>