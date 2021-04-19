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
  background-color: rgb(102, 74, 50);
  color: rgb(249, 246, 239);
  padding: 1rem;
  border: 2px solid rgb(38, 25, 17);
  border-radius: 8px;
  width: 6rem;
  text-align: center;
  margin: 1rem;
  text-decoration: none;
}
</style>
