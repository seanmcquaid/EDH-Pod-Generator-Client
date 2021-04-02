<template>
  <PageLayout>
    <header><H1>Login</H1></header>
    <main>
      <LoginForm />
    </main>
  </PageLayout>
</template>

<script>
import H1 from '@/components/Typography/H1.vue';
import PageLayout from '@/layouts/PageLayout.vue';
import LoginForm from './LoginForm.vue';
export default {
  components: { PageLayout, H1, LoginForm },
};
</script>

<style></style>
