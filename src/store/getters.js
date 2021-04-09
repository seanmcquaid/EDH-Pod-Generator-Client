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
    state.pods.filter((pod) =>
      pod.filter((podInfo) => podInfo.name === name)
    )[0] ?? [],
  getPodSpellTableUrlByName: (state) => (name) => {
    console.log(name);
    console.log(
      state.pods.filter((pod) =>
        pod.filter((podInfo) => podInfo.name === name)
      )[0]?.spellTableUrl
    );
    return (
      state.pods.filter((pod) =>
        pod.filter((podInfo) => podInfo.name === name)
      )[0]?.spellTableUrl ?? ''
    );
  },
};

export default getters;
