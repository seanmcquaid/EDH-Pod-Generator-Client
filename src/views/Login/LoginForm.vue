<template>
  <span data-testid="errorMessage">{{
    globalErrorMessage.length > 0 ? globalErrorMessage : errorMessage
  }}</span>
  <form @submit="onSubmit">
    <TextInput
      :value="username"
      :onChange="onChange"
      type="text"
      name="username"
      label="Username"
      placeholder="Enter your username"
    />
    <TextInput
      :value="password"
      :onChange="onChange"
      type="password"
      name="password"
      label="Password"
      placeholder="Enter your password"
    />
    <Button type="submit">Submit</Button>
  </form>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { useStore } from 'vuex';
import TextInput from '@/components/TextInput.vue';
import Button from '@/components/Button.vue';
import { LOGIN } from '@/store/actions/types';
import { useRouter } from 'vue-router';
import useErrorMessage from '@/composables/useErrorMessage';

export default {
  components: { TextInput, Button },
  setup() {
    const store = useStore();
    const router = useRouter();
    const globalErrorMessage = useErrorMessage();

    const state = reactive({
      username: '',
      password: '',
      errorMessage: '',
    });

    const onChange = (event) => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = (event) => {
      event.preventDefault();
      const { username, password } = state;

      store
        .dispatch(LOGIN, { username, password })
        .then(() => {
          router.push('/userHome');
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      onSubmit,
      onChange,
      ...toRefs(state),
      globalErrorMessage,
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
