<template>
  <span>{{ podName }}</span>
</template>

<script>
// import { computed } from '@vue/runtime-core';
export default {
  props: {
    podName: {
      type: String,
      required: true,
    },
  },
  setup() {
    // const podName = computed(() => props.podName);
  },
};
</script>

<style></style>
