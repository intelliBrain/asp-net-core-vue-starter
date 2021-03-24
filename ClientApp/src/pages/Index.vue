<template>
  <q-page class="row">
    <div class="col">
      <div class="q-pa-md">
        <h4 class="q-ma-xs">Start</h4>
      </div>
      <div class="q-pa-md">
        <q-btn class="q-mr-sm" color="white" icon="o_play_arrow" text-color="black" label="Runs" to="/runs" />
        <q-btn class="q-mr-sm" color="white" icon="o_settings" text-color="black" label="Setup" to="/setup" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'StartPage',
    props: [],
    components: {}
  })
</script>
