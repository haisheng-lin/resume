<script lang="ts" setup>
defineProps<{
  links: string[];
}>();
</script>

<template>
  <ul class="resume-links">
    <li v-for="link in links" class="resume-link">
      {{ link }}
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import '@/assets/styles/vars.less';
.resume-link {
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
