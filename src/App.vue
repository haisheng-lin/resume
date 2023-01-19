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
    <Previewer :resume="resume" />
    <ul class="app-ops">
      <Button @click="handlePrint">{{ $t('print') }}</Button>
    </ul>
  </main>
</template>

<style lang="less" scoped>
.app-container {
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
  .app-container {
    padding: 0;
  }
  .app-ops {
    display: none;
  }
}
</style>
