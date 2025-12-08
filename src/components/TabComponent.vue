<template>
  <div class="main-tab-container shadow-1">
    <div
      class="tab-container"
      v-for="tab in tabs"
      :key="tab.id"
      @click="tabClick(tab)"
      :style="{ borderBottom: tab.id === selectedTab?.id ? '4px solid #0c2d4f' : '' }"
    >
      <q-icon v-if="tab.icon" :name="tab.icon" :size="tab.iconSize"></q-icon>
      <div class="tab-text">{{ tab.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* -------------------------------------------------------------------------- */
/* IMPORTS                                                                    */
/* -------------------------------------------------------------------------- */
import { onMounted, onUnmounted, ref } from 'vue';

/* -------------------------------------------------------------------------- */
/* LOCAL TYPES & INTERFACES                                                         */
/* -------------------------------------------------------------------------- */

interface Props {
  /**
   * List of tabs available for selection.
   * Each tab contains an ID, a visible label and an optional icon.
   */
  tabs: Array<{
    id: number;
    title: string;
    icon?: string;
    iconSize?: string;
  }>;
}

interface Events {
  // Emitted when a tab is clicked
  (e: 'tabClick', data: { id: number; title: string; icon?: string; iconSize?: string }): void;
}
/* -------------------------------------------------------------------------- */
/* PROPS                                                                      */
/* -------------------------------------------------------------------------- */
const props = defineProps<Props>();

/* -------------------------------------------------------------------------- */
/* EMITS                                                                      */
/* -------------------------------------------------------------------------- */
const emit = defineEmits<Events>();

/* -------------------------------------------------------------------------- */
/* COMPOSABLES & STORES                                                       */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* STATE (refs, reactive, constants)                                         */
/* -------------------------------------------------------------------------- */
const selectedTab = ref(props.tabs[0]);
/* -------------------------------------------------------------------------- */
/* COMPUTED                                                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* WATCHERS                                                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* METHODS                                                                    */
/* -------------------------------------------------------------------------- */
const tabClick = (tab: { id: number; title: string; icon?: string; iconSize?: string }) => {
  console.log(tab);
  selectedTab.value = tab;
  emit('tabClick', selectedTab.value);
};

/* -------------------------------------------------------------------------- */
/* LIFECYCLE HOOKS                                                            */
/* -------------------------------------------------------------------------- */
onMounted(() => {
  console.log('Tab Component Mounted');
});

onUnmounted(() => {
  console.log('Tab Component Unmounted');
});
</script>

<style scoped lang="scss">
@use 'sass:color';

.main-tab-container {
  display: flex;
  justify-content: space-between;
  background-color: $white;
  border-radius: 6px 6px 0px 0px;

  .tab-container {
    padding: 12px;
    color: rgb(0, 0, 0);
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: color.adjust($dark, $lightness: 75%);
    }
    border-bottom: 5px solid transparent;
    transition: border-color 0.2s ease;
    width: 100%;
  }
}
</style>
