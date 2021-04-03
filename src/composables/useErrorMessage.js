import { computed } from 'vue';
import { useStore } from 'vuex';

const useErrorMessage = () => {
  const store = useStore();
  const errorMessage = computed(() => store.state.errorMessage);

  return { errorMessage };
};

export default useErrorMessage;
