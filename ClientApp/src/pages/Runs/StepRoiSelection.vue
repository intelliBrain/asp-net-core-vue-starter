<template>
  <q-page>
    <div class="q-pa-md">
      <h4 class="q-ma-xs">Step: ROI Selection</h4>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-mr-sm" color="white" icon="o_stop" text-color="black" label="Back to Run Browser" to="/runs" />
      <q-btn class="q-mr-sm" color="white" icon="o_arrow_back" text-color="black" label="Back to Overview Scan" to="/runs/overview-scan" />
      <q-btn class="q-mr-sm" color="white" icon="o_arrow_forward" text-color="black" label="Start Configuration" to="/runs/config" />
    </div>
  </q-page>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'StepRoiSelection',
    props: [],
    components: {}
  })
</script>

<style>
</style>