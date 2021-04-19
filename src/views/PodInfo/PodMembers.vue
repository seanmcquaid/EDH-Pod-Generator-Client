<template>
  <LinkButton :route="`/generatePlayGroups/${podName}`">
    Generate Play Groups
  </LinkButton>
  <ul>
    <li
      v-for="(podMemberInfo, key) of podMembers"
      :key="key"
      :data-testid="podMemberInfo.member"
    >
      <span> {{ JSON.stringify(podMemberInfo) }} </span>
      <Button
        type="button"
        :onClick="() => deleteButtonOnClick(podMemberInfo.member)"
      >
        Delete
      </Button>
    </li>
  </ul>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { DELETE_POD_MEMBER, GET_PODS } from '../../store/actions/types';
import { useRouter } from 'vue-router';
import LinkButton from '../../components/LinkButton.vue';
import Button from '../../components/Button.vue';
export default {
  components: { LinkButton, Button },
  setup() {
    const router = useRouter();
    const podName = router.currentRoute.value.params.name;

    const store = useStore();
    const podInfo = computed(() => store.getters.getPodByName(podName));
    const podMembers = computed(() => podInfo.value.podMembers);

    onMounted(() => {
      store.dispatch(GET_PODS);
    });

    const deleteButtonOnClick = (memberName) => {
      store.dispatch(DELETE_POD_MEMBER, { memberName, podName });
    };

    return {
      podMembers,
      podName,
      deleteButtonOnClick,
    };
  },
};
</script>

<style></style>
