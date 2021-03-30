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
};

export default getters;
