<template>
  <q-page>
    <q-linear-progress :indeterminate="busy" :track-color="busy ? 'green' : 'white'" :color="busy ? 'green-13' : 'white'" />
    <div class="q-pa-md">
      <h4 class="q-ma-xs">Available Runs</h4>
    </div>
    <div class="q-pa-md">
      <q-btn class="q-mr-sm" color="white" icon="o_refresh" text-color="black" label="Refresh" />
      <q-btn class="q-mr-sm" color="white" icon="o_add" text-color="black" label="Create New Run" to="/runs/create" />
      <q-btn class="q-mr-sm" color="white" icon="o_create" text-color="black" label="Edit Run (TEMP)" to="/runs/edit" />
      <q-btn class="q-mr-sm" color="white" icon="o_play_arrow" text-color="black" label="Run Experiment (TEMP)" to="/runs/initialize" />
    </div>
    <div class="q-pa-md">
      <q-table
        title=""
        :data="data"
        :columns="columns"
        row-key="name"
      />
    </div>
    <div class="q-pa-md">
      <q-btn class="q-mr-sm" color="white" icon="o_refresh" text-color="black" label="Refresh" />
      <q-btn class="q-mr-sm" color="white" icon="o_add" text-color="black" label="Create New Run" to="/runs/create" />
    </div>
  </q-page>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Index',
    props: [],
    components: {},

    data () {
      return {
        busy: false,
        columns: [
          { name: 'name',   label: 'Run',         align: 'left',   field: 'name', required: true, sortable: true },
          { name: 'status', label: 'Status',      align: 'left',   field: 'status', sortable: true },
          { name: 'desc',   label: 'Description', align: 'left',   field: 'desc', sortable: true },
          { name: 'action', label: 'Actions',     align: 'left',   field: 'actions', sortable: true },
        ],
        data: [
          { name: 'AAA', status: 'Ready', desc: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla' },
          { name: 'BBB', status: 'Ready', desc: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla' }
        ]
      }
    }

  })
</script>

<style>
</style>