<template>
  <router-link :to="route"><slot /></router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: [Object, String],
      required: true,
    },
  },
};
</script>

<style scoped>
a {
  font-family: 'Quattrocento', serif;
}
</style>
