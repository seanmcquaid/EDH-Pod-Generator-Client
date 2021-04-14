<template>
  <ul>
    <li v-for="(playGroup, index) of playGroups" :key="index">
      <ul>
        <li
          v-for="playGroupMember of playGroup.playGroupMembers"
          :key="playGroupMember.id"
        >
          {{ playGroupMember.member }}
        </li>
      </ul>
    </li>
  </ul>
  <div v-for="index in playGroups.length" :key="index">
    <TextInput />
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import TextInput from '../../components/TextInput.vue';
export default {
  components: { TextInput },
  setup() {
    const state = reactive({
      playGroups: [],
    });

    onMounted(() => {});

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
