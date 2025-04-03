<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="props.isOpen"
        class="fixed inset-0 flex items-center justify-center bg-black/50 bg- z-50"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
          <div class="flex justify-between items-center">
            <h2 class="text-xl font-semibold">{{ props.title }}</h2>
            <button
              @click="closeModal"
              class="text-gray-500 hover:text-gray-800 hover:cursor-pointer"
            >
              <font-awesome-icon
                :icon="['fas', 'x']"
                class="text-lg text-black hover:text-[#4b4b4b]"
              />
            </button>
          </div>
          <div class="mt-4">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import CoreButton from "../Form/CoreButton.vue";

const props = defineProps<{
  isOpen: boolean;
  title?: string;
}>();

const emit = defineEmits(["close", "confirm"]);

const closeModal = () => {
  emit("close");
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
