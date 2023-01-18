<script lang="ts" setup>
import type { Resume } from '@/types';
import FaIcon from '@/components/fa-icon.vue';

defineProps<{
  resume: Resume;
}>();

function renderMajorDesc(major: string | string[]) {
  return typeof major === 'string' ? major : major.join(', ');
}
</script>

<template>
  <aside class="aside-container">
    <div class="aside-base">
      <img class="aside-base--avatar" :src="resume.avatar" alt="avatar" />
      <h1 class="aside-base--name">{{ resume.name }}</h1>
      <span>{{ resume.job }}</span>
    </div>
    <ul class="aside-list">
      <li class="aside-item">
        <div class="aside-item--header">
          <FaIcon class="aside-icon--large" type="graduation-cap" />
          <h2 class="aside-item--title">{{ $t('education') }}</h2>
        </div>
        <ul class="aside-item-detail">
          <li
            v-for="education in resume.educations"
            :key="education.school"
            class="aside-education"
          >
            <h3 class="aside-education--school">
              {{ education.school }} ({{ education.degree }})
            </h3>
            <span class="aside-education--description">
              {{ renderMajorDesc(education.major) }}
            </span>
            <span class="aside-education--description">
              {{ education.startTime }} ~ {{ education.endTime }}
            </span>
          </li>
        </ul>
      </li>
      <li class="aside-item">
        <div class="aside-item--header">
          <FaIcon class="aside-icon--large" type="envelope-square" />
          <h2 class="aside-item--title">{{ $t('contact') }}</h2>
        </div>
        <ul class="aside-item-detail">
          <li class="aside-contact">
            <FaIcon class="aside-icon--medium" type="phone" />
            <span class="aside-contact--item">{{ resume.phone }}</span>
          </li>
          <li class="aside-contact">
            <FaIcon class="aside-icon--medium" type="envelope" />
            <span class="aside-contact--item">{{ resume.email }}</span>
          </li>
        </ul>
      </li>
      <li class="aside-item">
        <div class="aside-item--header">
          <FaIcon class="aside-icon--large" type="book" />
          <h2 class="aside-item--title">{{ $t('skills') }}</h2>
        </div>
        <ol class="aside-item-detail">
          <li v-for="skill in resume.skills" :key="skill">{{ skill }}</li>
        </ol>
      </li>
      <li class="aside-item">
        <div class="aside-item--header">
          <FaIcon class="aside-icon--large" type="link" />
          <h2 class="aside-item--title">{{ $t('links') }}</h2>
        </div>
        <ol v-if="resume.socials" class="aside-item-detail">
          <li v-for="link in resume.socials" :key="link">{{ link }}</li>
        </ol>
      </li>
    </ul>
  </aside>
</template>

<style lang="less" scoped>
@import '@/assets/styles/vars.less';
.aside-container {
  padding: 28px;
  background-color: @color-theme;
}
.aside-base {
  padding: 30px 0;
  text-align: center;
}
.aside-base--avatar {
  display: block;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.aside-base--name {
  margin-top: 12px;
  font-size: 24px;
}
.aside-item {
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
}
.aside-item--header {
  display: flex;
  align-items: center;
}
.aside-item--title {
  margin-left: 12px;
  font-size: @font-size-large-x;
  font-weight: 600;
  line-height: 32px;
}
.aside-item-detail {
  margin-top: 12px;
}
.aside-icon--large {
  font-size: 20px;
}
.aside-icon--medium {
  font-size: 16px;
}
.aside-education {
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
}
.aside-education--school {
  font-size: @font-size-medium-x;
}
.aside-education--description {
  display: block;
  line-height: 20px;
}
.aside-contact {
  display: flex;
  align-items: center;
}
.aside-contact--item {
  display: inline-block;
  margin-left: 12px;
}
</style>
