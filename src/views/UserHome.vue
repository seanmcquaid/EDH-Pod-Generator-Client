<template>
  <PageLayout>
    <header>
      <H1>User Home</H1>
    </header>
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue';
import H1 from '@/components/Typography/H1.vue';

export default {
  name: 'Home',
  components: {
    PageLayout,
    H1,
  },
};
</script>

<style scoped></style>
