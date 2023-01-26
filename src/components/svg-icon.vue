<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    name: string;
    size?: number;
    prefix?: string;
    fill?: string;
  }>(),
  {
    size: 20,
    prefix: 'icon',
    fill: '#333'
  }
);

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg :width="size" :height="size" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="fill" />
  </svg>
</template>
