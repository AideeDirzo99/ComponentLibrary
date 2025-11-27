<template>
  <q-page class="">
    <div class="">
      <p>Radio input page</p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import RadioInputComponent from 'components/RadioInputComponent.vue';
</script>
<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
.buttons-container {
  display: flex;
  gap: 10px;
  flex-direction: column;
  max-width: 300px;
}
</style>
