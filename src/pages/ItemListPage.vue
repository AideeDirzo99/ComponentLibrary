<template>
  <q-page class="main-container">
    <div>
      <ItemListComponent :itemList="itemExample" @itemClick="showAlert" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ItemListComponent from 'src/components/ItemListComponent.vue';
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
