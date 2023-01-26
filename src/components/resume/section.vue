<script lang="ts" setup>
import SVGIcon from '@/components/svg-icon.vue';

defineProps<{
  icon?: string;
  title: string;
}>();
</script>

<template>
  <section class="resume-section">
    <div class="section-header">
      <div class="section-header--container">
        <SVGIcon v-if="icon" :name="icon" :size="20" fill="#ffffff" />
        <h2 class="section-header--title">{{ title }}</h2>
      </div>
    </div>
    <slot />
  </section>
</template>

<style lang="less" scoped>
@import '@/assets/styles/vars.less';
.resume-section {
  margin-top: 16px;
  color: #4a4a4a;
  &:first-child {
    margin-top: 0;
  }
}
.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
}
.section-header--container {
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 80px;
  font-size: @font-size-large-x;
  background-color: @color-theme;
  color: @color-theme-l;
  border-radius: 4px;
}
.section-header--title {
  margin-left: 12px;
  font-weight: bold;
}
</style>
