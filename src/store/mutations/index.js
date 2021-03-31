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
};

export default mutations;
