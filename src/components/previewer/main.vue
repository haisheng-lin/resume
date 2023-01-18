<script lang="ts" setup>
import type { Resume } from '@/types';
import FaIcon from '@/components/fa-icon.vue';

defineProps<{
  resume: Resume;
}>();
</script>

<template>
  <article class="main-container">
    <section class="main-section">
      <div class="main-header">
        <FaIcon class="main-icon" type="user" />
        <h2 class="main-header--title">{{ $t('summary') }}</h2>
      </div>
      <span>{{ resume.statement }}</span>
    </section>
    <section class="main-section">
      <div class="main-header">
        <FaIcon class="main-icon" type="bug" />
        <h2 class="main-header--title">{{ $t('experience') }}</h2>
      </div>
      <ul>
        <li
          v-for="exp in resume.experience"
          :key="exp.company"
          class="main-experience"
        >
          <h3 class="main-experience--company">
            {{ exp.company }} ({{ exp.startTime }} ~ {{ exp.endTime }})
          </h3>
          <ul class="main-experience-achievements">
            <li
              v-for="achievement in exp.achievements"
              class="main-achievement"
            >
              <strong class="main-achievement--highlight">
                {{ achievement.category }}:
              </strong>
              <span>{{ achievement.description }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </article>
</template>

<style lang="less" scoped>
@import '@/assets/styles/vars.less';
.main-container {
  padding: 33px 35px 33px 20px;
  height: 100%;
  background: @color-theme-l;
}
.main-icon {
  font-size: 28px;
  color: @color-theme;
}
.main-section {
  color: #4a4a4a;
}
.main-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
}
.main-header--title {
  position: relative;
  margin-left: 12px;
  padding-left: 12px;
  padding-right: 88px;
  font-size: @font-size-large-x;
  font-weight: bold;
  color: #ffffff;
  background-color: @color-theme;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  &::after {
    content: '';
    display: block;
    width: 21.8px;
    height: 21.8px;
    z-index: 99;
    background: #f2f2f2;
    position: absolute;
    right: -11px;
    top: 4px;
    transform: rotate(45deg);
  }
}
.main-section,
.main-experience {
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
}
.main-experience--company {
  padding-left: 8px;
  margin-bottom: 4px;
  font-weight: 600;
  font-size: @font-size-large;
  line-height: 22px;
  color: #1c1d1e;
  border-left: 3px solid orange;
}
.main-experience-achievements {
  margin-top: 8px;
}
.main-achievement--name {
  font-size: @font-size-medium-x;
  font-weight: bold;
  color: @color-theme;
}
.main-achievement {
  &::before {
    content: '';
    display: inline-block;
    margin-right: 8px;
    width: 8px;
    height: 8px;
    background-color: @color-theme;
    border-radius: 50%;
  }
}
.main-achievement--highlight {
  font-weight: bold;
}
</style>
