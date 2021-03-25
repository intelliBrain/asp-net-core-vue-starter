<template>
  <q-page>
    <div class="q-pa-md">
      <h4 class="q-ma-xs">Step: Create Overview Image</h4>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-mr-sm" color="white" icon="o_stop" text-color="black" label="Back to Run Browser" to="/runs" />
      <q-btn class="q-mr-sm" color="white" icon="o_arrow_forward" text-color="black" label="Start ROI Selection" to="/runs/roi-selection" />
    </div>
  </q-page>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'StepOverviewImage',
    props: [],
    components: {}
  })
</script>

<style>
</style>