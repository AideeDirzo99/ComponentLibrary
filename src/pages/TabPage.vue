<template>
  <q-page class="main-container">
    <div>
      <TabComponent :tabs="tabsOptions" @tab-click="showAlert" />
      <TabComponent class="q-mt-lg" :tabs="tabsOptionsWithoutIcons" @tab-click="showAlert" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import TabComponent from 'components/TabComponent.vue';
const tabsOptions = [
  {
    id: 1,
    title: 'Tab 1',
    icon: 'home',
  },
  {
    id: 2,
    title: 'Tab 2',
    icon: 'menu',
  },
  {
    id: 3,
    title: 'Tab 3',
    icon: 'settings',
  },
  {
    id: 4,
    title: 'Tab 4',
    icon: 'book',
  },
];

const tabsOptionsWithoutIcons = [
  {
    id: 1,
    title: 'Tab 1',
  },
  {
    id: 2,
    title: 'Tab 2',
  },
  {
    id: 3,
    title: 'Tab 3',
  },
];

const showAlert = (e: { id: number; title: string; icon?: string }) => {
  alert(`Tab Selected ${e.title}`);
};
</script>
<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
</style>
