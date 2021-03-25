<template>
  <q-page>
    <div class="q-pa-md">
      <h4 class="q-ma-xs">Step: Initialize</h4>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-mr-sm" color="white" icon="o_stop" text-color="black" label="Back to Run Browser" to="/runs" />
      <q-btn class="q-mr-sm" color="white" icon="o_arrow_forward" text-color="black" label="Start Overview Scan" to="/runs/overview-scan" />
    </div>
  </q-page>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'StepInitialize',
    props: [],
    components: {}
  })
</script>

<style>
</style>