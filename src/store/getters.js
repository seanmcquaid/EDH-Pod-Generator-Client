const getters = {
  isLoading: (state) => {
    return state?.isLoading ?? false;
  },
  isAuthenticated: (state) => {
    return state?.isAuthenticated ?? false;
  },
  token: (state) => {
    return state?.token ?? null;
  },
  pods: (state) => {
    return state?.pods ?? [];
  },
  errorMessage: (state) => {
    return state?.errorMessage ?? null;
  },
};

export default getters;
