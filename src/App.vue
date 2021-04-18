<template>
  <MainLayout />
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
export default {
  components: {
    MainLayout,
  },
};
</script>

<style>
html,
body,
#app {
  min-height: 100vh;
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(249, 246, 239);
}
</style>
