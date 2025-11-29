<template>
  <q-page class="main-container">
    <div>
      <RadioInputComponent :options="optionsExample" @optionClick="showAlert" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import RadioInputComponent from 'components/RadioInputComponent.vue';
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

const showAlert = (e: { id: number; title: string }) => {
  alert(`Option Selected ${e.title}`);
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
