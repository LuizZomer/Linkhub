<script setup lang="ts">
const props = defineProps<{
  error?: string | undefined;
  title: string;
  inputId: string;
  placeholder?: string;
}>();

const modelValue = defineModel<string>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="inputId" :class="{ 'text-red-500': error }">{{ title }}</label>
    <input
      v-bind="$attrs"
      v-model="modelValue"
      :id="inputId"
      :class="[
        'w-full',
        'rounded-sm',
        'border',
        'py-1',
        'px-2',
        error ? ['border-red-500', 'focus:border-red-800', 'text-red-500'] : '',
      ]"
      :placeholder="placeholder"
    />
    <span v-if="!!error" class="text-red-500 text-sm">{{ props.error }}</span>
  </div>
</template>
