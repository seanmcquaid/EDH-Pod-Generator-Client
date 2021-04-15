<template>
  <PageLayout>
    <header><H1>Pod Info</H1></header>
    <main>
      <AddPodMemberForm />
      <PodMembers />
      <Button type="button" :onClick="onClick">Delete Pod</Button>
    </main>
  </PageLayout>
</template>

<script>
import PageLayout from '../../layouts/PageLayout.vue';
import H1 from '../../components/Typography/H1.vue';
import AddPodMemberForm from './AddPodMemberForm.vue';
import PodMembers from './PodMembers.vue';
import Button from '../../components/Button.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useStore } from 'vuex';

export default {
  components: {
    PageLayout,
    H1,
    AddPodMemberForm,
    PodMembers,
    Button,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const podName = router.currentRoute.value.params.name;

    const onClick = () => {
      const config = {
        headers: {
          Authorization: store.state.token,
        },
      };
      axios
        .delete(`${process.env.VUE_APP_API_URL}/pods/${podName}`, config)
        .then(() => {
          router.push('/userHome');
        });
    };

    return {
      onClick,
    };
  },
};
</script>

<style></style>
