<script lang="ts" setup>
import type { Profile } from '@/types';

defineProps<{
  profile: Profile;
}>();
</script>

<template>
  <div class="resume-profile">
    <span>{{ $t('name') }}: {{ profile.name }}</span>
    <span> {{ $t('phone') }}: {{ profile.phone }} </span>
    <span> {{ $t('email') }}: {{ profile.email }} </span>
    <span v-if="profile.languages">
      {{ $t('language') }}: {{ profile.languages.join(', ') }}
    </span>
  </div>
</template>

<style lang="less" scoped>
.resume-profile {
  display: flex;
  flex-direction: column;
}
</style>
