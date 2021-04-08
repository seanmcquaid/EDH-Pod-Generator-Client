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
export default {
  props: {
    podName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const podMembers = computed(() =>
      store.getters.getPodByName(props.podName)
    );

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
