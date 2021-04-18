<template>
  <button @click="onClick" :type="type"><slot /></button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
    },
    type: {
      type: String,
    },
  },
};
</script>

<style scoped>
button {
  font-family: 'Quattrocento', serif;
  background-color: rgb(102, 74, 50);
  color: rgb(249, 246, 239);
  padding: 1rem;
  border: 2px solid rgb(38, 25, 17);
  border-radius: 8px;
  width: 6rem;
  text-align: center;
  margin: 1rem;
  outline: none;
}
</style>
