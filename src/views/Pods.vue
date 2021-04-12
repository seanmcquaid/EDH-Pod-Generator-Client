<template>
  <PageLayout>
    <header><H1>Pods</H1></header>
    <main>
      <ul>
        <li v-for="(podName, index) of podNames" :key="index">
          <span>{{ podName }}</span>
          <LinkButton :route="`/podInfo/${podName}`">Pod Info</LinkButton>
        </li>
      </ul>
    </main>
  </PageLayout>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import LinkButton from '../components/LinkButton.vue';
import H1 from '../components/Typography/H1.vue';
import PageLayout from '../layouts/PageLayout.vue';
export default {
  components: { PageLayout, H1, LinkButton },
  setup() {
    const store = useStore();
    const podNames = computed(() => store.getters.getPodNames);

    return {
      podNames,
    };
  },
};
</script>

<style></style>
