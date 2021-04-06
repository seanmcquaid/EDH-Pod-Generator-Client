<template>
  <span>{{ podName }}</span>
  <span>{{ spellTableUrl }}</span>
  <form @submit.prevent="onSubmit">
    <TextInput
      type="text"
      :onChange="onChange"
      :value="memberName"
      name="memberName"
      label="Member Name"
    />
    <TextInput
      type="text"
      :onChange="onChange"
      :value="spellTableUrl"
      name="spellTableUrl"
      label="Spell Table Link"
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
    spellTableUrl: {
      type: String,
      required: true,
    },
  },
  setup() {
    // const name = computed(() => props.podName);
    const state = reactive({
      memberName: '',
      memberEmail: '',
    });

    const onChange = (event) => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = () => {
      // const payload = { name };
    };

    return {
      ...toRefs(state),
      onChange,
      onSubmit,
    };
  },
};
</script>

<style></style>
