<script setup lang="ts">
import PC from './pc/index.vue';
import Mobile from './mobile/index.vue';

const usePC = document.body.clientWidth >= 800;
</script>

<template>
  <PC v-if="usePC" />
  <Mobile v-else />
</template>
