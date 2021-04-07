const mutations = {
  setLoading: (state) => {
    state.isLoading = true;
  },
  setNotLoading: (state) => {
    state.isLoading = false;
  },
  authSuccess: (state, { token }) => {
    state.isAuthenticated = true;
    state.token = token;
  },
  setErrorMessage: (state, { errorMessage }) => {
    state.errorMessage = errorMessage;
  },
  podsSuccess: (state, { pods }) => {
    state.pods = pods;
  },
};

export default mutations;
