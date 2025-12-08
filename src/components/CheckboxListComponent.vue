<template>
  <div
    class="main-checkbox-container"
    v-for="checkbox in checkboxList"
    :key="checkbox.id"
    @click="clickCheckbox(checkbox)"
  >
    <div
      class="check-square"
      :style="{
        backgroundColor: isSelected(checkbox.id) ? '#32a159' : '',
        borderColor: isSelected(checkbox.id) ? '#32a159' : '',
      }"
    >
      <q-icon name="check" v-if="isSelected(checkbox.id)" color="white" size="18px"></q-icon>
    </div>
    <div class="checkbox-text">{{ checkbox.text }}</div>
    <div class="check-circle"></div>
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
  checkboxList: Array<{
    id: number;
    text: string;
  }>;
}

interface Event {
  (
    e: 'checkboxClick',
    data: {
      id: number;
      text: string;
    }[],
  ): void;
}
/* -------------------------------------------------------------------------- */
/* PROPS                                                                      */
/* -------------------------------------------------------------------------- */
defineProps<Props>();
/* -------------------------------------------------------------------------- */
/* EMITS                                                                      */
/* -------------------------------------------------------------------------- */
const emit = defineEmits<Event>();
/* -------------------------------------------------------------------------- */
/* COMPOSABLES & STORES                                                       */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* STATE (refs, reactive, constants)                                         */
/* -------------------------------------------------------------------------- */
const selectedCheckboxes = ref<
  {
    id: number;
    text: string;
  }[]
>([]);
/* -------------------------------------------------------------------------- */
/* COMPUTED                                                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* WATCHERS                                                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* METHODS                                                                    */
/* -------------------------------------------------------------------------- */
const clickCheckbox = (option: { id: number; text: string }) => {
  if (isSelected(option.id)) {
    selectedCheckboxes.value = selectedCheckboxes.value.filter((item) => item.id !== option.id);
  } else {
    selectedCheckboxes.value.push(option);
  }
  emit('checkboxClick', selectedCheckboxes.value);
};

/** Checks if a checkbox ID exist in selectedCheckboxes */
const isSelected = (id: number) => {
  return selectedCheckboxes.value.some((item) => item.id === id);
};

/* -------------------------------------------------------------------------- */
/* LIFECYCLE HOOKS                                                            */
/* -------------------------------------------------------------------------- */
onMounted(() => {
  console.log('Checkbox List Component Mounted');
});

onUnmounted(() => {
  console.log('Checkbox List Component Unmounted');
});
</script>

<style scoped lang="scss">
.main-checkbox-container {
  //background-color: aqua;
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;

  &:hover {
    .check-circle {
      opacity: 0.5;
      transform: scale(1);
    }
  }
  .checkbox-text {
    padding: 8px;
    font-size: 16px;
    color: #1c1a1a;
  }

  .check-square {
    width: 20px;
    height: 20px;
    border: 1.8px solid #1c1a1a;
    border-radius: 2.8px;
    padding: 8px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .check-circle {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: #92f4b4;
    position: absolute;
    opacity: 0;
    left: -8px;
    transform: scale(0);
    transition: all ease-in 0.3s;
  }
}
</style>
