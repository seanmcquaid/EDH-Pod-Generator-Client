<template>
  <span>{{ podName }}</span>
  <form>
    <TextInput
      type="text"
      :onChange="podNameOnChange"
      :value="podName"
      name="podName"
      label="Pod Name"
    />
    <TextInput
      type="text"
      :onChange="podNameOnChange"
      :value="podName"
      name="podName"
      label="Pod Name"
    />
    <Button type="submit">Add Member</Button>
  </form>
</template>

<script>
// import { computed } from '@vue/runtime-core';
import TextInput from '../../components/TextInput.vue';
import Button from '../../components/Button.vue';
import { reactive, toRefs } from '@vue/reactivity';

export default {
  components: {
    TextInput,
    Button,
  },
  props: {
    podName: {
      type: String,
      required: true,
    },
  },
  setup() {
    // const podName = computed(() => props.podName);
    const state = reactive({
      memberName: '',
      memberEmail: '',
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
