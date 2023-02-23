<script lang="ts" setup>
import type { Experience } from '@/types';

defineProps<{
  experience: Experience[];
}>();
</script>

<template>
  <ul class="resume-experience">
    <li v-for="exp in experience" :key="exp.company">
      <div class="resume-experience--base">
        <h3 class="resume-experience--company">
          {{ exp.company }} - {{ exp.title }}
        </h3>
        <strong class="resume-experience--time">
          {{ exp.startTime }}-{{ exp.endTime }}
        </strong>
      </div>
      <div v-if="exp.dimissionReason">
        {{ $t('dimissionLabel', [exp.dimissionReason]) }}
      </div>
      <div v-if="exp.introduction" class="resume-experience--section">
        {{ exp.introduction }}
      </div>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import '@/assets/styles/vars.less';
.resume-experience {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.resume-experience--base {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}
.resume-experience--company {
  font-weight: 600;
  font-size: @font-size-medium-x;
  line-height: @font-size-large-x;
}
.resume-experience--time {
  font-weight: 600;
  font-size: @font-size-medium;
  line-height: @font-size-large;
}
.resume-experience--section {
  margin-top: 4px;
}
.resume-section--title {
  font-weight: bold;
}
.resume-section--point {
  &::before {
    content: '';
    display: inline-block;
    margin-right: 8px;
    width: 8px;
    height: 8px;
    vertical-align: middle;
    background-color: var(--primary-color);
    border-radius: 50%;
  }
}

@media screen and (max-width: @pc-min-width) {
  .resume-experience--base {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
