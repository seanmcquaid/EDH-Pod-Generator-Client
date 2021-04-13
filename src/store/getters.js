const getters = {
  getIsLoading: (state) => {
    return state?.isLoading ?? false;
  },
  getIsAuthenticated: (state) => {
    return state?.isAuthenticated ?? false;
  },
  getToken: (state) => {
    return state?.token ?? null;
  },
  getPods: (state) => {
    return state?.pods ?? [];
  },
  getErrorMessage: (state) => {
    return state?.errorMessage ?? null;
  },
  getPodByName: (state) => (name) =>
    state?.pods?.filter((pod) => pod.podName === name)[0] ?? {
      podName: '',
      podMembers: [],
    },
  getPodNames: (state) => state?.pods?.map((pod) => pod.podName) ?? [],
};

export default getters;
