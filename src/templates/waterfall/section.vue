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
        <SVGIcon
          v-if="icon"
          :name="icon"
          :size="16"
          fill="var(--text-color-secondary)"
        />
        <h2 class="section-header--title">{{ title }}</h2>
      </div>
    </div>
    <slot />
  </section>
</template>

<style lang="less" scoped>
@import '@/assets/styles/vars.less';
.resume-section {
  margin-top: 8px;
  &:first-child {
    margin-top: 0;
  }
}
.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
}
.section-header--container {
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 80px;
  font-size: @font-size-large;
  background-color: var(--primary-color);
  color: var(--text-color-secondary);
  border-radius: 4px;
}
.section-header--title {
  margin-left: 12px;
  font-weight: bold;
}

@media screen and (max-width: @pc-min-width) {
  .section-header--container {
    width: 100%;
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
