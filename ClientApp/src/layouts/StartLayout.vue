<template>
  <q-layout view="lhh lpR fff">

    <router-link to="/runs">
      <template v-slot="props">
        <q-btn v-bind="buttonProps(props)" />
      </template>
    </router-link>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">

export default {
}

</script>
