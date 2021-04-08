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
    const spellTableUrl = computed(() =>
      store.getters.getPodSpellTableUrlByName(name)
    );
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
        spellTableUrl: spellTableUrl.value,
      };
      store.dispatch(ADD_POD_MEMBER, payload);
    };

    return {
      ...toRefs(state),
      onChange,
      onSubmit,
      name,
      spellTableUrl,
    };
  },
};
</script>

<style></style>
