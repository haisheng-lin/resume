<script lang="ts" setup>
import Aside from './aside.vue';
import Main from './main.vue';
import type { Resume } from '@/types';

defineProps<{
  resume: Resume;
}>();
</script>

<template>
  <div class="previewer-container">
    <Aside class="previewer-aside" :resume="resume" />
    <Main class="previewer-main" :resume="resume" />
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/vars.less';
.previewer-container {
  width: 794px;
  height: 1123px;
  display: flex;
  overflow: hidden;
  font-size: @font-size-medium;
  color: #ffffff;
}
.previewer-aside {
  box-sizing: border-box;
  width: 33.33%;
}
.previewer-main {
  box-sizing: border-box;
  width: 66.67%;
}
</style>
