<template>
  <q-page>
    <q-linear-progress :indeterminate="busy" :track-color="busy ? 'green' : 'white'" :color="busy ? 'green-13' : 'white'" />
    <div class="q-pa-md">
      <h4 class="q-ma-xs">Edit Run</h4>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-mr-sm" color="white" icon="o_clear" text-color="black" label="Cancel" to="/runs" />
      <q-btn class="q-mr-sm" color="white" icon="o_done" text-color="black" label="Create" to="/runs" />
    </div>
  </q-page>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'RunEdit',
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