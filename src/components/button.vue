<template>
  <div class="button">
    <slot />
  </div>
</template>

<style lang="less" scoped>
.button {
  display: inline-block;
  padding: 4px 8px;
  cursor: pointer;
  letter-spacing: 0;
  transition: all 0.2s;
  border: 1px solid black;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
}
</style>
