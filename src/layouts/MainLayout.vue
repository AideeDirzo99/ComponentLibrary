<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Aidee Dirzo Camacho </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      :behavior="isMobile ? 'mobile' : 'desktop'"
      v-model="useLayoutStore().isLeftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header> Component Library </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';
import { useLayoutStore } from 'src/stores/example-store';

const $q = useQuasar();

const isMobile = $q.platform.is.mobile;

const linksList: EssentialLinkProps[] = [
  {
    title: 'Button Component',
    link: '/button',
  },
  {
    title: 'Radio Input Component',
    link: '/radio',
  },
  {
    title: 'Tab Component',
    link: '/tab',
  },
  {
    title: 'Item List Component',
    link: '/itemList',
  },
  {
    title: 'Checkbox List Component',
    link: '/checkboxList',
  },
];

function toggleLeftDrawer() {
  useLayoutStore().isLeftDrawerOpen = !useLayoutStore().isLeftDrawerOpen;
}
</script>
