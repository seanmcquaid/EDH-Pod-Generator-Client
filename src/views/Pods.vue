<template>
  <PageLayout>
    <header><H1>Pods</H1></header>
    <main>
      <ul>
        <li>
          <span></span>
          <LinkButton route="">Link</LinkButton>
        </li>
      </ul>
    </main>
  </PageLayout>
</template>

<script>
import LinkButton from '../components/LinkButton.vue';
import H1 from '../components/Typography/H1.vue';
import PageLayout from '../layouts/PageLayout.vue';
export default {
  components: { PageLayout, H1, LinkButton },
  setup() {},
};
</script>

<style></style>
