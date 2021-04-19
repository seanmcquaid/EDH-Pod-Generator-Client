<template>
  <PageLayout>
    <header><H1>Pod Info</H1></header>
    <main>
      <AddPodMemberForm />
      <PodMembers />
      <Button type="button" :onClick="onClick" data-testid="deletePodButton">
        Delete Pod
      </Button>
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
import { useStore } from 'vuex';
import { DELETE_POD } from '../../store/actions/types';

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
      store.dispatch(DELETE_POD, { podName }).then(() => {
        router.push('/userHome');
      });
    };

    return {
      onClick,
    };
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
