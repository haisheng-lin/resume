<script lang="ts" setup>
import type { Experience } from '@/types';

defineProps<{
  experience: Experience[];
}>();
</script>

<template>
  <ul>
    <li v-for="exp in experience" :key="exp.company" class="resume-experience">
      <div class="resume-experience--base">
        <h3 class="resume-experience--company">
          {{ exp.company }} - {{ exp.title }}
        </h3>
        <strong class="resume-experience--time">
          {{ exp.startTime }}-{{ exp.endTime }}
        </strong>
      </div>
      <span v-if="exp.dimissionReason">
        {{ $t('dimissionLabel', [exp.dimissionReason]) }}
      </span>
      <ul class="resume-experience-achievements">
        <li v-for="achievement in exp.achievements" class="resume-achievement">
          {{ achievement }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import '@/assets/styles/vars.less';
.resume-experience {
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
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
.resume-experience-achievements {
  margin-top: 8px;
}
.resume-achievement {
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
</style>
