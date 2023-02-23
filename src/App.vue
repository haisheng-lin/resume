<script setup lang="ts">
import SVGIcon from '@/components/svg-icon.vue';
import { resume } from '@/config';
import useTheme from '@/hooks/useTheme';
import WaterfallResume from '@/templates/waterfall/index.vue';

const { isDarkTheme, switchTheme } = useTheme();

function handlePrint() {
  window.print();
}
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <SVGIcon
        class="app-ops--item"
        fill="var(--text-color)"
        :name="isDarkTheme ? 'sun' : 'moon'"
        @click="switchTheme"
      />
      <SVGIcon
        class="app-ops--item"
        fill="var(--text-color)"
        name="print"
        @click="handlePrint"
      />
    </header>
    <main class="app-main">
      <WaterfallResume :resume="resume" />
    </main>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/vars.less';
.app-container {
  padding: 0 24px;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: all 0.2s;
}
.app-header {
  display: flex;
  justify-content: flex-end;
  padding: 8px 0;
}
.app-main {
  padding: 24px 0;
}
.app-ops--item {
  margin-left: 12px;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
}

@media screen and (max-width: @pc-min-width) {
  .app-container {
    padding: 0 12px;
  }
  .app-header {
    display: none;
  }
  .app-main {
    padding: 12px 0;
  }
}

/* 打印时样式 */
@media print {
  @page {
    margin: 0;
  }
  .app-header {
    display: none;
  }
  .app-container,
  .app-main {
    padding: 0;
  }
}
</style>
