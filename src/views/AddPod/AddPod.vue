<template>
  <PageLayout>
    <header><H1>Add Pod</H1></header>
    <main>
      <div v-if="!isConfirmed">
        <span data-testid="errorMessage">{{ errorMessage }}</span>
        <form @submit.prevent="onSubmit">
          <TextInput
            type="text"
            :onChange="onChange"
            :value="podName"
            name="podName"
            label="Pod Name"
          />
          <Button type="submit"> Confirm </Button>
        </form>
      </div>
      <div v-else>
        <AddInitialPodMemberForm :podName="podName" />
      </div>
    </main>
  </PageLayout>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import H1 from '../../components/Typography/H1.vue';
import PageLayout from '../../layouts/PageLayout.vue';
import TextInput from '../../components/TextInput.vue';
import Button from '../../components/Button.vue';
import AddInitialPodMemberForm from './AddInitialPodMemberForm';
export default {
  components: {
    PageLayout,
    H1,
    TextInput,
    Button,
    AddInitialPodMemberForm,
  },
  setup() {
    const state = reactive({
      podName: '',
      isConfirmed: false,
      errorMessage: '',
    });

    const onChange = (event) => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = () => {
      state.errorMessage = '';
      if (state.podName.length === 0) {
        state.errorMessage = 'Please enter the name of the pod!';
        return;
      }
      state.isConfirmed = true;
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
div {
  display: flex;
  flex-direction: column;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
