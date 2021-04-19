<template>
  <PageLayout>
    <header>
      <H1>User Home</H1>
    </header>
    <main>
      <LinkButton route="/addPod">Add Pod</LinkButton>
      <LinkButton route="/pods">Pods</LinkButton>
    </main>
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/Typography/H1.vue';
import LinkButton from '../components/LinkButton.vue';

export default {
  name: 'Home',
  components: {
    PageLayout,
    H1,
    LinkButton,
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
