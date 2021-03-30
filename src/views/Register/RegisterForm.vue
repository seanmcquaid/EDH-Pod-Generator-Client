<template>
  <form @submit="onSubmit">
    <TextInput
      :value="username"
      :onChange="onChange"
      type="text"
      name="username"
      label="Username"
    />
    <TextInput
      :value="password"
      :onChange="onChange"
      type="text"
      name="password"
      label="Password"
    />
    <TextInput
      :value="confirmPassword"
      :onChange="onChange"
      type="text"
      name="confirmPassword"
      label="Confirm Password"
    />
    <Button type="submit">Submit</Button>
  </form>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
// import { useStore } from 'vuex';
import TextInput from '../../components/TextInput.vue';
import Button from '../../components/Button.vue';
export default {
  components: { TextInput, Button },
  setup() {
    // const store = useStore();

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
      console.log(state);
      // store.dispatch();
    };

    return {
      onSubmit,
      onChange,
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
