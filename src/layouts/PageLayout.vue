<template>
  <div class="pageContainer">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pageContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 5.25rem;
}
</style>
