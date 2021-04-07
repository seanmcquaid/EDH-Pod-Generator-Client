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
    const podInfo = computed(() => store.state.pods);
    const podMembers = computed(
      () =>
        podInfo.value.filter((pod) =>
          pod.filter((podInfo) => podInfo.name === props.podName)
        )[0] ?? []
    );

    return {
      podMembers,
    };
  },
};
</script>

<style></style>
