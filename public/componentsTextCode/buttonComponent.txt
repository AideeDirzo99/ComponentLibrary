<template>
  <div
    class="button-container"
    :class="{
      'btn-color-primary': isPrimaryType,
      'btn-disable': disable,
      'btn-secondary': type === 'secondary',
    }"
    :style="{
      backgroundColor: type === 'primary' ? bgColor : '',
      color: textColor,
      borderColor: bgColor,
    }"
    @click="buttonClick"
  >
    <q-icon v-if="iconName" :name="iconName" size="18px" />
    <p>{{ textValue }}</p>
  </div>
</template>

<script setup lang="ts">
/* -------------------------------------------------------------------------- */
/* IMPORTS                                                                    */
/* -------------------------------------------------------------------------- */
import { computed, onMounted, onUnmounted, ref } from 'vue';

/* -------------------------------------------------------------------------- */
/* LOCAL TYPES & INTERFACES                                                         */
/* -------------------------------------------------------------------------- */
interface Props {
  // The text displayed inside the button
  textValue: string;

  // The color of the button’s text (CSS color value)
  textColor: string;

  // The background color of the button (CSS color value or predefined theme color)
  bgColor: string;

  // Whether the button is disabled and non-interactive
  disable?: boolean;

  // Optional icon name to display inside the button
  iconName?: string;

  // Visual style variant of the button
  type: 'primary' | 'secondary' | 'tertiary';
}

interface Events {
  // Emitted when the button is clicked
  (e: 'handleClick', data: number): void;
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
const counter = ref(0);

/* -------------------------------------------------------------------------- */
/* COMPUTED                                                                   */
/* -------------------------------------------------------------------------- */
const isPrimaryType = computed(() => props.bgColor === 'primary' && props.type === 'primary');

/* -------------------------------------------------------------------------- */
/* WATCHERS                                                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* METHODS                                                                    */
/* -------------------------------------------------------------------------- */
const buttonClick = () => {
  if (!props.disable) {
    counter.value++;
    emit('handleClick', counter.value);
  }
};

/* -------------------------------------------------------------------------- */
/* LIFECYCLE HOOKS                                                            */
/* -------------------------------------------------------------------------- */
onMounted(() => {
  console.log('Button Component Mounted');
});

onUnmounted(() => {
  console.log('Button Component Unmounted');
});
</script>

<style scoped lang="scss">
.button-container {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 10px;
  cursor: pointer;
  user-select: none;

  p {
    margin: 0px;
  }
}

.btn-disable {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-color-primary {
  background-color: $primary;
}

.btn-secondary {
  border: 1px solid #000;
  background-color: transparent;
}
</style>
