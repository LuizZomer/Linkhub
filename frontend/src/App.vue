<script setup lang="ts">
import { provideAuthContext } from "./context/Auth/AuthContext";

provideAuthContext();
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
