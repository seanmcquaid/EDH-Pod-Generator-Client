<template>
  <PageLayout>
    <header><H1>Pod Info</H1></header>
    <main>
      <AddPodMemberForm />
      <PodMembers />
    </main>
  </PageLayout>
</template>

<script>
import PageLayout from '../../layouts/PageLayout.vue';
import H1 from '../../components/Typography/H1.vue';
import AddPodMemberForm from './AddPodMemberForm.vue';
import PodMembers from './PodMembers.vue';

export default {
  components: {
    PageLayout,
    H1,
    AddPodMemberForm,
    PodMembers,
  },
};
</script>

<style></style>
