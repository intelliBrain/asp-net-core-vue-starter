<template>
  <q-layout view="lhh lpR fff">

    <q-header elevated class="bg-grey-7 text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar> -->
          Genexyz
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab disable to="/runs" label="Runs" />
        <q-route-tab disable to="/setup" label="Setup" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" behavior="desktop" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">

export default {
  data () {
    return {
      left: false
    }
  }
}

</script>
