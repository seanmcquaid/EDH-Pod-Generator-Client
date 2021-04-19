<template>
  <div>
    <span>{{ podName }}</span>
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
  </div>
</template>

<script>
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
  setup() {
    const router = useRouter();
    const name = router.currentRoute.value.params.name;
    const store = useStore();
    const state = reactive({
      memberName: '',
      memberEmail: '',
    });

    const onChange = (event) => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = () => {
      const payload = {
        name,
        member: state.memberName,
        memberEmail: state.memberEmail,
      };
      store.dispatch(ADD_POD_MEMBER, payload);
    };

    return {
      ...toRefs(state),
      onChange,
      onSubmit,
      podName: name,
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
