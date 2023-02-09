<script lang="ts" setup>
import type { Resume } from '@/types';
import Section from './section.vue';
import Profile from './profile.vue';
import Educations from './educations.vue';
import Experience from './experience.vue';
import Links from './links.vue';

defineProps<{
  resume: Resume;
}>();
</script>

<template>
  <article class="resume-container">
    <h2 class="resume-title">
      {{ $t('resumeTitle', [resume.profile.name]) }}
    </h2>
    <h3 v-if="resume.url" class="resume-subtitle">
      {{ resume.url }}
    </h3>
    <Section icon="comment" :title="$t('summary')">
      <span>{{ resume.summary }}</span>
    </Section>
    <Section icon="user" :title="$t('profile')">
      <Profile :profile="resume.profile" />
    </Section>
    <Section icon="graduation-cap" :title="$t('education')">
      <Educations :educations="resume.educations" />
    </Section>
    <Section icon="briefcase" :title="$t('experience')">
      <Experience :experience="resume.experience" />
    </Section>
    <Section v-if="resume.skills" icon="book" :title="$t('skills')">
      <span>{{ resume.skills.join(', ') }}</span>
    </Section>
  </article>
</template>

<style lang="less" scoped>
@import '@/assets/styles/vars.less';
.resume-container {
  margin: 0 auto;
  width: 760px;
  font-size: @font-size-medium;
}
.resume-title,
.resume-subtitle {
  margin-bottom: 0;
  text-align: center;
}
.resume-title {
  font-size: 24px;
  font-weight: bold;
}
.resume-subtitle {
  font-size: 14px;
}

@media print {
  .resume-container {
    width: auto;
  }
}
</style>
