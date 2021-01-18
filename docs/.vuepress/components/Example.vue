<template>
  <v-app class="fill-height"> 
    <v-content class="fill-height">
      <div style="height:400px">
        <ClientOnly>
          <vue-file
            :file="file"
            @error="hasError = true"
          />
        </ClientOnly>
      </div>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'Example',
    props: { file: String },
    data: () => ({
      hasError: false,
    }),
  }
</script>
