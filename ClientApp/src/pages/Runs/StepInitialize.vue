<template>
  <q-page>
    <q-linear-progress :indeterminate="busy" :track-color="busy ? 'green' : 'white'" :color="busy ? 'green-13' : 'white'" />
    <div class="q-pa-md">
      <h4 class="q-ma-xs">Initialize Experiment</h4>
    </div>

    <div :class="getRunLogClass()" v-if="runLog.length">
      <div class="q-ma-xs text-subtitle2">Run log:</div>
      <q-scroll-area ref="scrollArea" style="height: 450px;">
        <div
          class="q-ma-xs"
          v-for="(rli, index) in runLog"
          :key="index"
        >{{rli}}</div>
      </q-scroll-area>
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
    props: [],
    components: {},
    data () {
      return {
        busy: false,
        hasErrors: false,
        runLog: []
      }
    },
    methods: {
      getRunLogClass: function(): string {
        const bgColor: string = this.hasErrors ? 'bg-red-2' : 'bg-grey-3';
        return `q-pa-md ${bgColor}`
      }
    }
  })
</script>

<style>
</style>