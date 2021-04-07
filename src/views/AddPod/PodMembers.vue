<template>
  <ul>
    <li
      v-for="podMemberInfo in podMembers"
      :key="podMemberInfo.id"
      :data-testid="podMemberInfo.member"
    >
      <span> {{ podMemberInfo.member }} </span>
    </li>
  </ul>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
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

    return {
      podMembers,
    };
  },
};
</script>

<style></style>
