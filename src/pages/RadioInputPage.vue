<template>
  <q-page class="main-container">
    <div class="align-tab-component">
      <TabComponent :tabs="tabsOptions" @tabClick="handleTabClick"></TabComponent>
    </div>
    <div
      class="page-tab-container shadow-2"
      :style="selectedTab?.id === tabsOptions[1]?.id ? 'background-color: #0d1117' : ''"
    >
      <div class="radio-input-container" v-show="selectedTab?.id === tabsOptions[0]?.id">
        <RadioInputComponent :options="optionsExample" @optionClick="showAlert" />
      </div>
      <div v-show="selectedTab?.id === tabsOptions[1]?.id">
        <CodeViewer fileName="radioInputTextCode.txt" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import RadioInputComponent from 'components/RadioInputComponent.vue';
import CodeViewer from 'src/components/CodeViewer.vue';
import TabComponent from 'src/components/TabComponent.vue';
import { ref } from 'vue';
const optionsExample = [
  {
    id: 1,
    title: 'Option 1',
  },
  {
    id: 2,
    title: 'Option 2',
  },
  {
    id: 3,
    title: 'Option 3',
  },
  {
    id: 4,
    title: 'Option 4',
  },
  {
    id: 5,
    title: 'Option 5',
  },
  {
    id: 6,
    title: 'Option 6',
  },
  {
    id: 7,
    title: 'Option 7',
  },
];

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
const showAlert = (e: { id: number; title: string }) => {
  alert(`Option Selected ${e.title}`);
};

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

    .radio-input-container {
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
