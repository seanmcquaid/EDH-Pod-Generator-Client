<template>
  <PageLayout>
    <header><H1>Pods</H1></header>
    <main>
      <ul>
        <li
          v-for="(podName, index) of podNames"
          :key="index"
          :data-testid="podName"
        >
          <span>{{ podName }}</span>
          <LinkButton :route="`/podInfo/${podName}`">Pod Info</LinkButton>
        </li>
      </ul>
    </main>
  </PageLayout>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import LinkButton from '../components/LinkButton.vue';
import H1 from '../components/Typography/H1.vue';
import PageLayout from '../layouts/PageLayout.vue';
import { GET_PODS } from '../store/actions/types';
export default {
  components: { PageLayout, H1, LinkButton },
  setup() {
    const store = useStore();
    const podNames = computed(() => store.getters.getPodNames);

    onMounted(() => {
      store.dispatch(GET_PODS);
    });

    return {
      podNames,
    };
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  border: 2px solid rgb(38, 25, 17);
  border-radius: 8px;
}
</style>
