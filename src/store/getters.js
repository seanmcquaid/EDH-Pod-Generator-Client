const getters = {
  isAuthenticated: (state) => {
    return state?.isAuthenticated ?? false;
  },
  token: (state) => {
    return state?.token ?? null;
  },
  pods: (state) => {
    return state?.pods ?? [];
  },
};

export default getters;
