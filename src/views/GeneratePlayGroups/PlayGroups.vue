<template>
  <div>
    <span data-testid="errorMessage">{{ errorMessage }}</span>
    <ul>
      <li
        v-for="(playGroup, index) of playGroups"
        :key="index"
        :data-testid="`playGroup${index + 1}`"
      >
        <span>Play Group #{{ index + 1 }}</span>
        <ul>
          <li
            v-for="playGroupMember of playGroup.playGroupMembers"
            :key="playGroupMember.id"
          >
            {{ playGroupMember.member }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const store = useStore();
    const state = reactive({
      playGroups: [],
      errorMessage: '',
    });
    const spellTableUrls = reactive({});
    const router = useRouter();
    const podName = router.currentRoute.value.params.name;

    onMounted(() => {
      const config = {
        headers: {
          Authorization: store.state.token,
        },
      };
      axios
        .get(`${process.env.VUE_APP_API_URL}/pods/generate/${podName}`, config)
        .then(({ data }) => {
          state.playGroups = data.playGroups;
        })
        .catch((err) => {
          console.log(err);
        });
    });

    const onChange = (event) => {
      spellTableUrls[event.target.name] = event.target.value;
    };

    return {
      ...toRefs(state),
      spellTableUrls,
      onChange,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  border: 2px solid rgb(38, 25, 17);
  border-radius: 8px;
}
span {
  margin: 0.5rem;
}
</style>
