<template>
  <PageLayout>
    <header><H1>Add Pod</H1></header>
    <main>
      <div v-if="!isNameConfirmed">
        <TextInput
          type="text"
          :onChange="podNameOnChange"
          :value="podName"
          name="podName"
          label="Pod Name"
        />
        <Button type="button" :onClick="confirmNameButtonOnClick">
          Confirm Name
        </Button>
      </div>
      <div v-else>
        <AddPodMember :podName="podName" />
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
import AddPodMember from './AddPodMember/AddPodMember';
export default {
  components: { PageLayout, H1, TextInput, Button, AddPodMember },
  setup() {
    const state = reactive({
      podName: '',
      isNameConfirmed: false,
    });

    const podNameOnChange = (event) => {
      state[event.target.name] = event.target.value;
    };

    const confirmNameButtonOnClick = () => {
      state.isNameConfirmed = true;
    };

    return {
      ...toRefs(state),
      podNameOnChange,
      confirmNameButtonOnClick,
    };
  },
};
</script>

<style></style>
