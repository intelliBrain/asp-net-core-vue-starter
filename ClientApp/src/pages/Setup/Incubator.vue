<template>
  <q-page>
    <q-linear-progress :indeterminate="busy" :track-color="busy ? 'green' : 'white'" :color="busy ? 'green-13' : 'white'" />
    <div class="q-pa-md">
      <h4 class="q-ma-xs">Incubator</h4>
    </div>
  </q-page>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'SetupIncubator',
    props: [],
    components: {},
    data () {
      return {
        busy: false,
      }
    },
  })
</script>

<style>
</style>