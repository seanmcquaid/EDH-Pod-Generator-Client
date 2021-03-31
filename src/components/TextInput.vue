<template>
  <label>
    {{ label }}
    <input
      :type="type"
      @change="onChange"
      :value="value"
      :name="name"
      :data-testid="label"
    />
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
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
  },
};
</script>

<style></style>
