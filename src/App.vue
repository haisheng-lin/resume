<script setup lang="ts">
import Previewer from '@/components/previewer/index.vue';
import Button from '@/components/button.vue';
import { resume } from '@/config';

function handlePrint() {
  window.print();
}
</script>

<template>
  <main class="app-container">
    <section class="app-section">
      <Previewer :resume="resume" />
    </section>
    <ul class="app-ops">
      <Button @click="handlePrint">{{ $t('print') }}</Button>
    </ul>
  </main>
</template>

<style lang="less" scoped>
.app-container {
  display: flex;
}
.app-section {
  display: inline-block;
  width: 75%;
  padding: 24px;
}
.app-ops {
  position: absolute;
  top: 12px;
  right: 12px;
}
.app-ops--button {
  margin-left: 12px;
}

/* 打印时样式 */
@media print {
  .app-ops {
    display: none;
  }
  .app-section {
    padding: 0;
  }
}
</style>
