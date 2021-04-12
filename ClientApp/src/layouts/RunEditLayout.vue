<template>
  <q-layout view="lhh lpR fff">

    <q-header bordered class="bg-grey-7 text-white" height-hint="98">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="left = !left" /> -->

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar> -->
          Genexyz
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs
        align="left"
        inline-label
        indicator-color="transparent"
      >
        <q-route-tab disable to="/runs" label="Runs" icon="list" />
        <q-route-tab disable to="/setup" label="Setup" icon="o_settings" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" behavior="desktop" bordered :width=250>
      <q-scroll-area style="height: calc(100% - 200px); margin-top: 200px; border-right: 1px solid #ddd">
      </q-scroll-area>
      <q-img class="absolute-top bg-transparent q-ma-md" src="../assets/genexyz_logo_mockup.png" style="width: 200px">
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data () {
      return {
        left: false
      }
    }
  })

</script>
