import { createStore } from 'vuex';
import mutations from './mutations';
import state from './state';
import actions from './actions';
import getters from './getters';

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
