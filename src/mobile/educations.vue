<script lang="ts" setup>
import type { Education } from '@/types';

defineProps<{
  educations: Education[];
}>();
</script>

<template>
  <ul>
    <li
      v-for="education in educations"
      :key="education.school"
      class="resume-education"
    >
      <strong class="resume-education--left">
        {{ education.major }} ({{ education.degree }})
      </strong>
      <strong class="resume-education--middle">
        {{ education.school }}
      </strong>
      <span class="resume-education--right">
        {{ education.startTime }}-{{ education.endTime }}
      </span>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.resume-education {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
}
.resume-education--left {
  font-weight: bold;
}
.resume-education--middle {
  text-align: center;
}
.resume-education--right {
  text-align: right;
}
</style>
