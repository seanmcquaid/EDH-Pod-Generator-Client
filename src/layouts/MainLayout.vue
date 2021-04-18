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
  <div>
    <router-view />
  </div>
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

<style scoped>
nav {
  position: fixed;
  width: 100%;
  padding: 1rem;
  top: 0;
  left: 0;
  background-color: rgb(191, 175, 160);
}

ul {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
}

li {
  margin-right: 1.5rem;
}

a {
  font-family: 'Quattrocento', serif;
  color: rgb(38, 25, 17);
  text-decoration: none;
}

div {
  margin-top: 5.25rem;
}
</style>
