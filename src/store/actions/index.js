import axios from 'axios';
import {
  AUTH_SUCCESS,
  PODS_SUCCESS,
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
  addPodMember: ({ commit, state }, { name, member, memberEmail }) => {
    commit(SET_LOADING);
    const body = {
      name,
      member,
      memberEmail,
    };
    const config = {
      headers: {
        Authorization: state.token,
      },
    };
    return axios
      .post(`${process.env.VUE_APP_API_URL}/pods/member`, body, config)
      .then(({ data }) => {
        const { pods } = data;
        commit(PODS_SUCCESS, { pods });
        return Promise.resolve({ pods });
      })
      .catch((err) => {
        const errorMessage =
          err?.response?.data?.errorMessage ??
          'There was an issue adding a pod member';
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
  getPods: ({ commit, state }) => {
    commit(SET_LOADING);
    const config = {
      headers: {
        Authorization: state.token,
      },
    };
    return axios
      .get(`${process.env.VUE_APP_API_URL}/pods`, config)
      .then(({ data }) => {
        const { pods } = data;
        commit(PODS_SUCCESS, { pods });
        return Promise.resolve({ pods });
      })
      .catch((err) => {
        const errorMessage =
          err?.response?.data?.errorMessage ??
          'There was an issue getting all pods';
        commit(SET_ERROR_MESSAGE, { errorMessage });
        return Promise.reject(Object.entries(err));
      })
      .finally(() => {
        commit(SET_NOT_LOADING);
      });
  },
  deletePodMember: ({ commit, state }, { memberName, podName }) => {
    commit(SET_LOADING);
    const config = {
      headers: {
        Authorization: state.token,
      },
    };
    return axios
      .delete(
        `${process.env.VUE_APP_API_URL}/pods/${podName}/member/${memberName}`,
        config
      )
      .then(({ data }) => {
        const { pods } = data;
        commit(PODS_SUCCESS, { pods });
        return Promise.resolve({ pods });
      })
      .catch((err) => {
        const errorMessage =
          err?.response?.data?.errorMessage ??
          'There was an issue deleting this pod member';
        commit(SET_ERROR_MESSAGE, { errorMessage });
        return Promise.reject(Object.entries(err));
      })
      .finally(() => {
        commit(SET_NOT_LOADING);
      });
  },
  deletePod: ({ commit, state }, { podName }) => {
    commit(SET_LOADING);
    const config = {
      headers: {
        Authorization: state.token,
      },
    };
    return axios
      .delete(`${process.env.VUE_APP_API_URL}/pods/${podName}`, config)
      .then(({ data }) => {
        const { pods } = data;
        commit(PODS_SUCCESS, { pods });
        return Promise.resolve({ pods });
      })
      .catch((err) => {
        const errorMessage =
          err?.response?.data?.errorMessage ??
          'There was an issue deleting this pod';
        commit(SET_ERROR_MESSAGE, { errorMessage });
        return Promise.reject(Object.entries(err));
      })
      .finally(() => {
        commit(SET_NOT_LOADING);
      });
  },
};

export default actions;
