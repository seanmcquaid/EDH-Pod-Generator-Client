<template>
  <PageLayout>
    <header><H1>Register</H1></header>
    <main>
      <RegisterForm />
    </main>
  </PageLayout>
</template>

<script>
import H1 from '../../components/Typography/H1.vue';
import PageLayout from '../../layouts/PageLayout.vue';
import RegisterForm from './RegisterForm.vue';
export default {
  components: { PageLayout, H1, RegisterForm },
};
</script>

<style></style>
