<template>
  <form @submit="onSubmit">
    <TextInput
      :value="username"
      :onChange="onChange"
      type="text"
      name="username"
    />
  </form>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
// import { useStore } from 'vuex';
import TextInput from '../../components/TextInput.vue';
export default {
  components: { TextInput },
  setup() {
    const state = reactive({
      username: '',
      password: '',
    });
    const onChange = (event) => {
      console.log(event.target);
      state[event.target.name] = event.target.value;
    };

    // const store = useStore();
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
