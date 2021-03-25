<template>
  <q-page>
    <div class="q-pa-md">
      <h4 class="q-ma-xs">Run Experiment</h4>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-mr-sm" color="white" icon="o_arrow_forward" text-color="black" label="(GOTO RESULT)" to="/runs/result" />
    </div>
  </q-page>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'ExperimentRun',
    props: [],
    components: {}
  })
</script>

<style>
</style>