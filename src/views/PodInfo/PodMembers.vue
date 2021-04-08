<template>
  <ul>
    <li
      v-for="(podMemberInfo, key) of podMembers"
      :key="key"
      :data-testid="podMemberInfo.member"
    >
      <span> {{ JSON.stringify(podMemberInfo) }} </span>
    </li>
  </ul>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { GET_PODS } from '../../store/actions/types';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const podName = router.currentRoute.value.params.name;

    const store = useStore();
    const podMembers = computed(() => store.getters.getPodByName(podName));

    onMounted(() => {
      store.dispatch(GET_PODS);
    });

    return {
      podMembers,
    };
  },
};
</script>

<style></style>
