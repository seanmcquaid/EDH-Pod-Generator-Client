import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register/Register.vue';
import Login from '../views/Login/Login.vue';
import UserHome from '../views/UserHome.vue';
import AddPod from '../views/AddPod/AddPod.vue';
import PodInfo from '../views/PodInfo/PodInfo.vue';
import store from '../store';
import Pods from '../views/Pods.vue';
import GeneratePlayGroups from '../views/GeneratePlayGroups/GeneratePlayGroups.vue';
import { CLEAR_ERROR_MESSAGE } from '../store/actions/types';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/userHome',
    name: 'UserHome',
    component: UserHome,
  },
  {
    path: '/addPod',
    name: 'AddPod',
    component: AddPod,
  },
  {
    path: '/podInfo/:name',
    name: 'PodInfo',
    component: PodInfo,
  },
  {
    path: '/pods',
    name: 'Pods',
    component: Pods,
  },
  {
    path: '/generatePlayGroups',
    name: 'Generate Play Groups',
    component: GeneratePlayGroups,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach(() => {
  if (store.state.errorMessage !== '') {
    store.dispatch(CLEAR_ERROR_MESSAGE);
  }
});

export default router;
