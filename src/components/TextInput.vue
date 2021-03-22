<template>
  <label>
    {{ label }}
    <input type="text" @change="onChange" :value="value" />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    onChange: {
      type: Function,
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
  },
};
</script>

<style></style>
