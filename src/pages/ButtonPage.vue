<template>
  <q-page class="main-container">
    <div class="buttons-container">
      <ButtonComponent
        textValue="Primary Variant"
        type="primary"
        bgColor="primary"
        textColor="#fff"
        @handleClick="showAlert"
      ></ButtonComponent>
      <ButtonComponent
        textValue="Secondary Variant"
        type="secondary"
        bgColor="primary"
        textColor="#000"
        @handleClick="showAlert"
      ></ButtonComponent>
      <ButtonComponent
        textValue="Tertiary Variant"
        type="tertiary"
        bgColor="primary"
        textColor="#000"
        @handleClick="showAlert"
      ></ButtonComponent>
      <ButtonComponent
        textValue="With Icon"
        type="primary"
        bgColor="primary"
        textColor="#fff"
        iconName="home"
        @handleClick="showAlert"
      ></ButtonComponent>
      <ButtonComponent
        textValue="With Icon and Custom Color"
        type="primary"
        bgColor="#c10015"
        textColor="#fff"
        iconName="delete"
        @handleClick="showAlert"
      ></ButtonComponent>
      <ButtonComponent
        textValue="Primary Disable"
        type="primary"
        bgColor="primary"
        textColor="#fff"
        disable
        @handleClick="showAlert"
      ></ButtonComponent>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ButtonComponent from 'components/ButtonComponent.vue';
const showAlert = (e: number) => {
  alert(`Button Clicked!, ${e}`);
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
.buttons-container {
  display: flex;
  gap: 10px;
  flex-direction: column;
  max-width: 300px;
}
</style>
