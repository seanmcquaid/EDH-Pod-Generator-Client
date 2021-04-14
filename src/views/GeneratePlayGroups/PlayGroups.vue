<template>
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
  <div v-for="index in playGroups.length" :key="index">
    <TextInput
      type="text"
      :onChange="onChange"
      :value="textInputsValues[index]"
      :name="`textInput${index}`"
      :label="`Spell Table Url For Play Group #${index + 1}`"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import TextInput from '../../components/TextInput.vue';
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  components: { TextInput },
  setup() {
    const store = useStore();
    const state = reactive({
      playGroups: [],
    });
    const textInputsValues = reactive({});
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
      textInputsValues[event.target.name] = event.target.value;
    };

    return {
      ...toRefs(state),
      textInputsValues,
      onChange,
    };
  },
};
</script>

<style></style>
