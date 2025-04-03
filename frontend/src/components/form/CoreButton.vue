<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  text: string;
  type?: "reset" | "submit" | "button";
  onClick?: () => void;
  customClass?: string;
}>();

const buttonClasses = computed(
  () =>
    `w-full px-4 py-2 rounded-md hover:cursor-pointer hover:shadow-md transition-colors ${
      props.customClass || ""
    }`
);
</script>

<template>
  <div>
    <button
      v-bind="$attrs"
      :class="buttonClasses"
      :type="type"
      @click="onClick"
    >
      {{ props.text }}
    </button>
  </div>
</template>
