<script lang="ts" setup>
import type { Profile } from '@/types';

defineProps<{
  profile: Profile;
}>();
</script>

<template>
  <div class="resume-profile">
    <span>{{ $t('name') }}: {{ profile.name }}</span>
    <span class="resume-profile--middle">
      {{ $t('phone') }}: {{ profile.phone }}
    </span>
    <span class="resume-profile--right">
      {{ $t('email') }}: {{ profile.email }}
    </span>
    <span v-if="profile.languages">
      {{ $t('language') }}: {{ profile.languages.join(', ') }}
    </span>
  </div>
</template>

<style lang="less" scoped>
.resume-profile {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
}
.resume-profile--middle {
  text-align: center;
}
.resume-profile--right {
  text-align: right;
}
</style>
