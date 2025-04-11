<script setup lang="ts">
import CoreInput from "../components/form/CoreInput.vue";
import CreateLinkModal from "../components/Modal/CreateLinkModal.vue";
import { useQuery } from '@tanstack/vue-query'
</script>

<template>
  <header
    class="flex flex-col justify-center items-center w-full bg-gradient-to-l from-[#6E63F2] to-[#D84CB5] gap-3 px-5 py-10"
  >
    <div class="flex flex-col md:flex-row gap-2 items-center">
      <font-awesome-icon :icon="['fas', 'link']" class="text-4xl text-white" />
      <h1 class="text-4xl text-white">Linkhub</h1>
    </div>
    <p class="text-[#E4D5FC] text-center">
      Conecte-se ao seu universo de links
    </p>
  </header>
  <main class="w-full flex flex-col items-center">
    <article class="w-3/4 shadow-lg py-3 flex flex-wrap gap-3 p-3">
      <CoreInput input-id="searchInput" title="Pesquisa" class="w-full" />
      <CreateLinkModal />
    </article>
  </main>
</template>
