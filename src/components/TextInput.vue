<template>
  <label>
    {{ label }}
    <input
      :type="type"
      @change="onChange"
      :value="value"
      :name="name"
      :data-testid="label"
      :placeholder="placeholder"
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
    placeholder: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  font-family: 'Quattrocento', serif;
  padding: 0.5rem;
  outline: none;
  border-radius: 8px;
  border: 2px solid rgb(38, 25, 17);
  color: rgb(38, 25, 17);
  margin: 0.5rem;
  width: 12rem;
}
</style>
