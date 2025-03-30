<script setup lang="ts">
const props = defineProps<{
  text: string;
  type?: "reset" | "submit" | "button";
}>();
</script>

<template>
  <div>
    <button
      v-bind="$attrs"
      class="w-full bg-white p-1 rounded-md hover:cursor-pointer hover:bg-[#f1f1f1] hover:shadow-md transition-colors"
      :type="type"
    >
      {{ props.text }}
    </button>
  </div>
</template>
