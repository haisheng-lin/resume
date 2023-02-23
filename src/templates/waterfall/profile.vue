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
@import '@/assets/styles/vars.less';
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

@media screen and (max-width: @pc-min-width) {
  .resume-profile {
    display: flex;
    flex-direction: column;
    grid-template-columns: unset;
  }
  .resume-profile--middle {
    text-align: left;
  }
  .resume-profile--right {
    text-align: left;
  }
}
</style>
