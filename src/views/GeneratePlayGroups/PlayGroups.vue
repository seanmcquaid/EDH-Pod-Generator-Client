<template>
  <span>{{ errorMessage }}</span>
  <ul>
    <li v-for="(playGroup, index) of playGroups" :key="index">
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
  <form @submit.prevent="onSubmit">
    <TextInput
      v-for="index in playGroups.length"
      :key="index"
      type="text"
      :onChange="onChange"
      :value="spellTableUrls[index]"
      :name="`textInput${index}`"
      :label="`Spell Table Url For Play Group #${index + 1}`"
    />
    <Button type="submit">Contact Pods</Button>
  </form>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import TextInput from '../../components/TextInput.vue';
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Button from '../../components/Button.vue';
export default {
  components: { TextInput, Button },
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

    const onSubmit = () => {
      if (!areUrlsAllValid()) {
        state.errorMessage =
          'Please enter a url for each spell table url input!';
        return;
      }
      const body = {
        spellTableUrls,
        playGroups: state.playGroups,
      };
      const config = {
        headers: {
          Authorization: store.state.token,
        },
      };
      axios
        .post(`${process.env.VUE_APP_API_URL}/pods/contact`, body, config)
        .then(() => {
          router.push('/userHome');
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const areUrlsAllValid = () => {
      const keys = Object.keys(spellTableUrls);

      if (keys.length === 0) {
        return false;
      }

      for (let i = 0; i < keys.length; i++) {
        if (spellTableUrls[keys[i]].length === 0) {
          return false;
        }
      }

      return true;
    };

    return {
      ...toRefs(state),
      spellTableUrls,
      onChange,
      onSubmit,
    };
  },
};
</script>

<style></style>
