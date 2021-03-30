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
    axios(`${process.env.VUE_APP_API_URL}/users/register`, {
      username,
      password,
    })
      .then(({ data }) => {
        const { token } = data;
        commit(AUTH_SUCCESS, { token });
        return Promise.resolve();
      })
      .catch((err) => {
        console.log(err);
        commit(SET_ERROR_MESSAGE, err);
        return Promise.reject();
      })
      .finally(() => {
        commit(SET_NOT_LOADING);
      });
  },
};

export default actions;
