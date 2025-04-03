<script setup lang="ts">
import { useAuthStore } from "./context/Auth/AuthContext";

const authStore = useAuthStore();
authStore.initializeAuth();
</script>

<template>
  <RouterView />
</template>
