<template>
  <div class="main-item-container" v-for="item in itemList" :key="item.id" @click="itemClick(item)">
    <div
      class="circle-container"
      :style="{
        backgroundColor: item.iconBgColor ? item.iconBgColor : '#0c2d4f',
      }"
    >
      <q-icon :name="item.icon ? item.icon : 'folder'" size="22px" color="indigo-1"></q-icon>
    </div>
    <div class="item-text-container">
      <div class="item-title">{{ item.title }}</div>
      <div class="item-description">{{ item.description }}</div>
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
  itemList: Array<{
    id: number;
    title: string;
    description: string;
    icon?: string;
    iconBgColor?: string;
  }>;
}

interface Events {
  (
    e: 'itemClick',
    data: {
      id: number;
      title: string;
      description: string;
      icon?: string;
      iconBgColor?: string;
    },
  ): void;
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
const selectedItem = ref(props.itemList[0]);
/* -------------------------------------------------------------------------- */
/* COMPUTED                                                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* WATCHERS                                                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* METHODS                                                                    */
/* -------------------------------------------------------------------------- */
const itemClick = (item: {
  id: number;
  title: string;
  description: string;
  icon?: string;
  iconBgColor?: string;
}) => {
  console.log(item);
  selectedItem.value = item;
  emit('itemClick', selectedItem.value);
};

/* -------------------------------------------------------------------------- */
/* LIFECYCLE HOOKS                                                            */
/* -------------------------------------------------------------------------- */
onMounted(() => {
  console.log('Item List Component Mounted');
});

onUnmounted(() => {
  console.log('Item List Component Unmounted');
});
</script>

<style scoped lang="scss">
.main-item-container {
  &:hover {
    background-color: rgb(91, 93, 93);
  }
  background-color: rgb(72, 79, 79);
  display: flex;
  align-items: center;
  padding: 6px;
  gap: 12px;
  width: 300px;
  cursor: pointer;

  .circle-container {
    background-color: $primary;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
  }

  .item-text-container {
    padding: 6px;

    .item-title {
      font-size: 16px;
      font-weight: 500;
      color: beige;
    }

    .item-description {
      font-size: 12px;
      color: rgb(213, 213, 196);
    }
  }
}
</style>
