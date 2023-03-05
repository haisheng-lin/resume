<script lang="ts" setup>
import type { Project } from '@/types';

defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <ul class="resume-project">
    <li v-for="project in projects" :key="project.name">
      <h3 class="resume-project--name">
        {{ project.name }}
      </h3>
      <div class="resume-project--section">
        <h4 class="resume-section--title">
          {{ $t('projectIntroduction') }}
        </h4>
        <span>{{ project.introduction }}</span>
      </div>
      <div class="resume-project--section">
        <h4 class="resume-section--title">
          {{ $t('responsibility') }}
        </h4>
        <ul>
          <li
            v-for="work in project.responsibilities"
            :key="work"
            class="resume-section--point"
          >
            {{ work }}
          </li>
        </ul>
      </div>
      <div v-if="project.challenges" class="resume-project--section">
        <h4 class="resume-section--title">
          {{ $t('challenge') }}
        </h4>
        <ul>
          <li
            v-for="challenge in project.challenges"
            :key="challenge"
            class="resume-section--point"
          >
            {{ challenge }}
          </li>
        </ul>
      </div>
      <div class="resume-project--section">
        <h4 class="resume-section--title">
          {{ $t('achievement') }}
        </h4>
        <ul>
          <li
            v-for="achievement in project.achievements"
            :key="achievement"
            class="resume-section--point"
          >
            {{ achievement }}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import '@/assets/styles/vars.less';
.resume-project {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.resume-project--name {
  font-weight: 600;
  font-size: @font-size-medium-x;
  line-height: @font-size-large-x;
}
.resume-project--section {
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
</style>
