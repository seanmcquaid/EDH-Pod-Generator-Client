<template>
  <div>
    <span>{{ podName }}</span>
    <form @submit.prevent="onSubmit" data-testid="AddPodMemberForm">
      <TextInput
        type="text"
        :onChange="onChange"
        :value="memberName"
        name="memberName"
        label="Member Name"
        placeholder="Enter member name"
      />
      <TextInput
        type="text"
        :onChange="onChange"
        :value="memberEmail"
        name="memberEmail"
        label="Member Email"
        placeholder="Enter member email"
      />
      <Button type="submit">Add Member</Button>
    </form>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import TextInput from '../../components/TextInput.vue';
import Button from '../../components/Button.vue';
import { reactive, toRefs } from '@vue/reactivity';
import { useStore } from 'vuex';
import { ADD_POD_MEMBER } from '../../store/actions/types';
import { useRouter } from 'vue-router';

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
    const router = useRouter();
    const name = computed(() => props.podName);
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
      };
      store.dispatch(ADD_POD_MEMBER, payload).then(() => {
        router.push(`/podInfo/${props.podName}`);
      });
    };

    return {
      ...toRefs(state),
      onChange,
      onSubmit,
    };
  },
};
</script>

<style scoped>
span {
  padding: 1rem;
}
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
