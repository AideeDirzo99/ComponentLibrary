<template>
  <div class="main-tab-container">
    <div
      class="tab-container"
      v-for="tab in tabs"
      :key="tab.id"
      @click="tabClick(tab)"
      :style="{ borderBottom: tab.id === selectedTab?.id ? '5px solid #fff' : '' }"
    >
      <q-icon v-if="tab.icon" :name="tab.icon"></q-icon>
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
  }>;
}

interface Events {
  // Emitted when a tab is clicked
  (e: 'tabClick', data: { id: number; title: string; icon?: string }): void;
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
const tabClick = (tab: { id: number; title: string; icon?: string }) => {
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

.tab-container {
  padding: 12px;
  color: aliceblue;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: color.adjust($primary, $lightness: 10%);
  }
  border-bottom: 5px solid transparent;
  transition: border-color 0.2s ease;
  width: 100%;
}

.main-tab-container {
  display: flex;
  justify-content: space-between;
  background-color: $primary;
  border: 1px solid $primary;
}
</style>
