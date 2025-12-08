<template>
  <q-page class="main-container">
    <div class="align-tab-component">
      <TabComponent :tabs="tabsOptions" @tabClick="handleTabClick"></TabComponent>
    </div>

    <div class="page-tab-container shadow-2">
      <div class="items-container" v-show="selectedTab?.id === tabsOptions[0]?.id">
        <ItemListComponent :itemList="itemExample" @itemClick="showAlert" />
      </div>
      <div v-show="selectedTab?.id === tabsOptions[1]?.id">
        <CodeViewer fileName="itemListTextCode.txt" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import CodeViewer from 'src/components/CodeViewer.vue';
import ItemListComponent from 'src/components/ItemListComponent.vue';
import TabComponent from 'src/components/TabComponent.vue';
import { ref } from 'vue';
const itemExample = [
  { id: 1, title: 'Item 1', description: 'Description 1' },
  { id: 2, title: 'Item 2', description: 'Description 2', icon: 'home', iconBgColor: '#f2c037' },
  {
    id: 3,
    title: 'Item 3',
    description: 'Description 3',
    icon: 'settings',
    iconBgColor: '#1e736b',
  },
  {
    id: 4,
    title: 'Item 4',
    description: 'Description 4',
    icon: 'delete',
    iconBgColor: '#c10015',
  },
  { id: 5, title: 'Item 5', description: 'Description 5', icon: 'key', iconBgColor: '#21ba45' },
];

const showAlert = (e: {
  id: number;
  title: string;
  description: string;
  icon?: string;
  iconBgColor?: string;
}) => {
  alert(`Item Selected ${e.title}`);
};

const handleTabClick = (e: { id: number; title: string; icon?: string; iconSize?: string }) => {
  selectedTab.value = e;
};

const tabsOptions = [
  {
    id: 1,
    title: 'Component',
    icon: 'sym_r_brick',
    iconSize: '22px',
  },
  {
    id: 2,
    title: 'Code',
    icon: 'code',
    iconSize: '22px',
  },
];

const selectedTab = ref<
  { id: number; title: string; icon?: string; iconSize?: string } | undefined
>(tabsOptions[0]);
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .align-tab-component {
    width: 770px;
    display: flex;
    align-items: start;
  }

  .page-tab-container {
    background-color: $white;
    width: 770px;
    height: 450px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 0px 6px 6px 6px;
    overflow: auto;
    @media (max-width: 790px) {
      width: 100vw;
      flex: 1;
      padding: 10px;
    }

    .items-container {
      display: flex;
      gap: 10px;
      flex-direction: column;
      max-width: 300px;
      margin: auto;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }

  @media (max-width: 790px) {
    justify-content: start;
    align-items: start;
    height: 100%;
    overflow: hidden;
  }
}
</style>
