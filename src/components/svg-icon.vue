<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    name: string;
    size?: number;
    fill?: string;
  }>(),
  {
    size: 20,
    fill: '#333'
  }
);

const symbolId = computed(() => `#icon-${props.name}`);
</script>

<template>
  <svg :width="size" :height="size" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="fill" />
  </svg>
</template>
