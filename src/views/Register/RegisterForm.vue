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
    <TextInput
      :value="confirmPassword"
      :onChange="onChange"
      type="password"
      name="confirmPassword"
      label="Confirm Password"
      placeholder="Enter your confirm password"
    />
    <Button type="submit">Submit</Button>
  </form>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { useStore } from 'vuex';
import TextInput from '@/components/TextInput.vue';
import Button from '@/components/Button.vue';
import { REGISTER } from '@/store/actions/types';
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
      confirmPassword: '',
      errorMessage: '',
    });

    const onChange = (event) => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = (event) => {
      event.preventDefault();
      state.errorMessage = '';
      const { username, password, confirmPassword } = state;
      if (password !== confirmPassword) {
        state.errorMessage =
          "The two passwords don't match, please change them!";
        return;
      }
      store
        .dispatch(REGISTER, { username, password })
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
