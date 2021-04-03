import axios from 'axios';
import {
  AUTH_SUCCESS,
  SET_ERROR_MESSAGE,
  SET_LOADING,
  SET_NOT_LOADING,
} from '../mutations/types';

const actions = {
  register: ({ commit }, { username, password }) => {
    commit(SET_LOADING);
    return axios
      .post(`${process.env.VUE_APP_API_URL}/users/register`, {
        username,
        password,
      })
      .then(({ data }) => {
        const { token } = data;
        commit(AUTH_SUCCESS, { token });
        return Promise.resolve({ token });
      })
      .catch((err) => {
        const errorMessage =
          err?.response?.data?.errorMessage ??
          'There was a problem registering';

        commit(SET_ERROR_MESSAGE, { errorMessage });
        return Promise.reject(Object.entries(err));
      })
      .finally(() => {
        commit(SET_NOT_LOADING);
      });
  },
  login: ({ commit }, { username, password }) => {
    commit(SET_LOADING);
    return axios
      .post(`${process.env.VUE_APP_API_URL}/users/login`, {
        username,
        password,
      })
      .then(({ data }) => {
        const { token } = data;
        commit(AUTH_SUCCESS, { token });
        return Promise.resolve({ token });
      })
      .catch((err) => {
        const errorMessage =
          err?.response?.data?.errorMessage ?? 'There was a problem logging in';

        commit(SET_ERROR_MESSAGE, { errorMessage });
        return Promise.reject(Object.entries(err));
      })
      .finally(() => {
        commit(SET_NOT_LOADING);
      });
  },
  clearErrorMessage: ({ commit }) => {
    commit(SET_ERROR_MESSAGE, { errorMessage: '' });
  },
};

export default actions;
