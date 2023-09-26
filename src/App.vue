<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 bg-slate-200">
    <div class="rounded-lg"></div>
    <div class="h-screen rounded-lg lg:col-span-2">
      <RouterView />
    </div>
    <div class="rounded-lg"></div>
  </div>
</template>
