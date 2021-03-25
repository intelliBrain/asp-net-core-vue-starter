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

      <q-tabs align="left">
        <q-route-tab disable to="/runs" label="Runs" />
        <q-route-tab disable to="/setup" label="Setup" />
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
              :disable="menuDisabled(menuItem.to)"
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
      icon: 'o_create_new_folder',
      label: 'Initialize',
      separator: false,
      to: '/runs/initialize'
    },
    {
      icon: 'o_camera',
      label: 'Overview Scan',
      separator: false,
      to: '/runs/overview-scan'
    },
    {
      icon: 'o_crop',
      label: 'ROI Selection',
      separator: false,
      to: '/runs/roi-selection'
    },
    {
      icon: 'o_tune',
      label: 'Configuration',
      separator: false,
      to: '/runs/config'
    },
    {
      icon: 'o_play_arrow',
      label: 'Experiment Run',
      separator: false,
      to: '/runs/run'
    },
    {
      icon: 'o_feedback',
      label: 'Experiment Results',
      separator: false,
      to: '/runs/result'
    }
  ]

  export default Vue.extend({
    data () {
      return {
        left: false,
        menuList
      }
    },
    methods: {
      menuDisabled: function(to:string): boolean {
        return this.$router.currentRoute.path != to
      }
    }
  })

</script>
