<template>
  <q-page class="main-container">
    <div class="align-tab-component">
      <TabComponent :tabs="tabsOptions" @tabClick="handleTabClick"></TabComponent>
    </div>
    <div class="page-tab-container shadow-2">
      <div class="checks-container" v-show="selectedTab?.id === tabsOptions[0]?.id">
        <CheckboxListComponent :checkboxList="checkboxOptions" @checkboxClick="showAlert" />
      </div>
      <div v-show="selectedTab?.id === tabsOptions[1]?.id">
        <CodeViewer fileName="checkboxListTextCode.txt" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import CheckboxListComponent from 'src/components/CheckboxListComponent.vue';
import CodeViewer from 'src/components/CodeViewer.vue';
import TabComponent from 'src/components/TabComponent.vue';
import { ref } from 'vue';

const checkboxOptions = [
  {
    id: 1,
    text: 'Checkbox 1',
  },
  {
    id: 2,
    text: 'Box',
  },
  {
    id: 3,
    text: 'Large Text',
  },
];

const showAlert = (e: { id: number; text: string }[]) => {
  alert(`You have selected ${e.length} options`);
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

    .checks-container {
      display: flex;
      gap: 10px;
      flex-direction: column;
      max-width: 300px;
      margin: auto;
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
