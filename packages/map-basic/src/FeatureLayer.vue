<template>
  <vl-feature
    :properties="properties">
    <template>
      <vl-geom-point :coordinates="coordinates"/>
      <vl-style v-if="icon">
        <vl-style-icon
          :src="icon.src"
          :scale="icon.scale"
          :anchor="icon.anchor"
          :size="icon.size"/>
      </vl-style>
    </template>
  </vl-feature>
</template>

<script>
export default {
  props: {
    properties: Object,
    coordinates: Array,
    icon: Object,
  },
};
</script>
