<template>
  <q-page>
    <q-linear-progress :indeterminate="busy" :track-color="busy ? 'green' : 'white'" :color="busy ? 'green-13' : 'white'" />
    <div class="q-pa-md">
      <h4 class="q-ma-xs">Configuration</h4>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-mr-sm" color="white" icon="o_stop" text-color="black" label="Back to Run Browser" v-go-back=" '/runs' " />
      <q-btn class="q-mr-sm" color="white" icon="o_arrow_back" text-color="black" label="Back to ROI Selection" v-go-back=" '/runs/roi-selection' " />
      <q-btn class="q-mr-sm" color="white" icon="o_arrow_forward" text-color="black" label="Start Experiment" v-go-back=" '/runs/run' " />
    </div>
  </q-page>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'StepConfiguration',
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