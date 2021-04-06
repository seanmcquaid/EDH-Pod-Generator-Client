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
          <TextInput
            type="text"
            :onChange="onChange"
            :value="spellTableUrl"
            name="spellTableUrl"
            label="Spell Table Link"
          />
          <Button type="submit"> Confirm </Button>
        </form>
      </div>
      <div v-else>
        <AddPodMemberForm :podName="podName" :spellTableUrl="spellTableUrl" />
        <PodMembers :podName="podName" />
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
import AddPodMemberForm from './AddPodMemberForm';
import PodMembers from './PodMembers.vue';
export default {
  components: {
    PageLayout,
    H1,
    TextInput,
    Button,
    AddPodMemberForm,
    PodMembers,
  },
  setup() {
    const state = reactive({
      podName: '',
      spellTableUrl: '',
      isConfirmed: false,
      errorMessage: '',
    });

    const onChange = (event) => {
      state[event.target.name] = event.target.value;
    };

    const onSubmit = () => {
      state.errorMessage = '';
      if (state.podName.length === 0 || state.spellTableUrl.length === 0) {
        state.errorMessage = 'Please enter information in both fields!';
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

<style></style>
