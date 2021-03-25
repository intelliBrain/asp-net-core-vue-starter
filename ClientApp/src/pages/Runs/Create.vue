<template>
  <q-page>
    <div class="q-pa-md">
      <h4 class="q-ma-xs">Create Run</h4>
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
    name: 'RunCreate',
    props: [],
    components: {}
  })
</script>

<style>
</style>