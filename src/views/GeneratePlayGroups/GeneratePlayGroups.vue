<template>
  <PageLayout>
    <header><H1>Generate Pods</H1></header>
    <main>
      <PlayGroups />
    </main>
  </PageLayout>
</template>

<script>
import H1 from '../../components/Typography/H1.vue';
import PageLayout from '../../layouts/PageLayout.vue';
import PlayGroups from './PlayGroups.vue';
export default {
  components: { PageLayout, H1, PlayGroups },
};
</script>

<style></style>
