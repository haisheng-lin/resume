<script setup lang="ts">
import { resume } from '@/config';
import useTheme from '@/hooks/useTheme';
import Resume from './resume.vue';

useTheme();
</script>

<template>
  <div class="app-container">
    <main class="app-main">
      <Resume :resume="resume" />
    </main>
  </div>
</template>

<style lang="less" scoped>
.app-container {
  padding: 0 12px;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: all 0.2s;
}
.app-main {
  padding: 12px 0;
}
</style>
