<template>
  <PageLayout>
    <header>
      <H1>EDH Pod Generator</H1>
    </header>
    <main>
      <P>A convenient way to create EDH pods with your friends!</P>
      <div>
        <LinkButton to="/login">Login</LinkButton>
        <LinkButton to="/register">Register</LinkButton>
      </div>
    </main>
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '../components/Typography/H1.vue';
import LinkButton from '../components/LinkButton.vue';
import P from '../components/Typography/P.vue';

export default {
  name: 'Home',
  components: {
    PageLayout,
    H1,
    LinkButton,
    P,
  },
};
</script>

<style scoped></style>
