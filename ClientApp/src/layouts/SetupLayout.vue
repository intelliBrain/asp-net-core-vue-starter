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
        indicator-color="transparent">
        <q-route-tab to="/runs" label="Runs" icon="list" />
        <q-route-tab to="/setup" label="Setup" icon="o_settings" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" behavior="desktop" bordered :width=250>
      <q-scroll-area style="height: calc(100% - 200px); margin-top: 200px; border-right: 1px solid #ddd">
        <q-list>

          <template v-for="(menuItem, index) in menuList">
            <q-item
              :key="index"
              :to="menuItem.to"
              exact
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
          </template>

        </q-list>
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

  interface DrawerMenuItem {
    icon: string
    label: string
    separator: boolean
    to: string
  }

  const menuList: DrawerMenuItem[] = [
    {
      icon: 'o_settings',
      label: 'Common',
      separator: false,
      to: '/setup'
    },
    {
      icon: 'o_biotech',
      label: 'Microscope',
      separator: false,
      to: '/setup/microscope'
    },
    {
      icon: 'o_precision_manufacturing',
      label: 'Tray Handler',
      separator: false,
      to: '/setup/tray-handler'
    },
    {
      icon: 'o_opacity',
      label: 'Sample Preparator',
      separator: false,
      to: '/setup/sample-preparator'
    },
    {
      icon: 'o_thermostat',
      label: 'Incubator',
      separator: false,
      to: '/setup/incubator'
    },
  ]

  export default Vue.extend({
    data () {
      return {
        left: false,
        menuList
      }
    },
  })

</script>
