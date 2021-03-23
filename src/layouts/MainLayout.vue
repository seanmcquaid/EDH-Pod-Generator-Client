<template>
  <nav>
    <ul v-if="!isAuthenticated">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/register">Register</router-link>
      </li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
    <ul v-else>
      <li>
        <router-link to="/userHome">Home</router-link>
      </li>
      <li>
        <router-link to="/pods">Pods</router-link>
      </li>
    </ul>
  </nav>
  <router-view />
  <footer>Footer here</footer>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.state.isAuthenticated);

    return {
      isAuthenticated,
    };
  },
};
</script>

<style scoped></style>
