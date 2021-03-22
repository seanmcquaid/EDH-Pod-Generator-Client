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

<style scoped></style>
