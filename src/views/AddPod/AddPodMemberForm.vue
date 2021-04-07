<template>
  <span>{{ podName }}</span>
  <span>{{ spellTableUrl }}</span>
  <form @submit.prevent="onSubmit" data-testid="AddPodMemberForm">
    <TextInput
      type="text"
      :onChange="onChange"
      :value="memberName"
      name="memberName"
      label="Name"
    />
    <TextInput
      type="text"
      :onChange="onChange"
      :value="memberEmail"
      name="memberEmail"
      label="Email"
    />
    <Button type="submit">Add Member</Button>
  </form>
</template>

<script>
import { computed } from '@vue/runtime-core';
import TextInput from '../../components/TextInput.vue';
import Button from '../../components/Button.vue';
import { reactive, toRefs } from '@vue/reactivity';
import { useStore } from 'vuex';
import { ADD_POD_MEMBER } from '../../store/actions/types';

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
  setup(props) {
    const store = useStore();
    const name = computed(() => props.podName);
    const spellTableUrl = computed(() => props.spellTableUrl);
    const state = reactive({
      memberName: '',
      memberEmail: '',
    });

    const onChange = (event) => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = () => {
      const payload = {
        name: name.value,
        member: state.memberName,
        memberEmail: state.memberEmail,
        spellTableUrl: spellTableUrl.value,
      };
      store.dispatch(ADD_POD_MEMBER, payload);
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
