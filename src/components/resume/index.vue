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
    <Section icon="user" :title="$t('summary')">
      <span>{{ resume.summary }}</span>
    </Section>
    <Section icon="user" :title="$t('profile')">
      <Profile :profile="resume.profile" />
    </Section>
    <Section icon="graduation-cap" :title="$t('education')">
      <Educations :educations="resume.educations" />
    </Section>
    <Section icon="bug" :title="$t('experience')">
      <Experience :experience="resume.experience" />
    </Section>
    <Section v-if="resume.skills" icon="book" :title="$t('skills')">
      <span>{{ resume.skills.join(', ') }}</span>
    </Section>
    <Section v-if="resume.links" icon="link" :title="$t('links')">
      <Links :links="resume.links" />
    </Section>
  </article>
</template>

<style lang="less" scoped>
@import '@/assets/styles/vars.less';
.resume-container {
  margin: 0 auto;
  width: 800px;
  font-size: @font-size-medium;
}
.resume-title {
  margin-bottom: 16px;
  font-size: 32px;
  text-align: center;
  font-weight: bold;
}
</style>
