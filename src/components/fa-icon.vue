<script lang="ts" setup>
import 'font-awesome/css/font-awesome.min.css';

defineProps<{
  type: string;
}>();
</script>

<template>
  <i :class="['fa', `fa-${type}`]" />
</template>
