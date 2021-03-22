<template>
  <div class="hello">
    <Button @click="onClick">Hello</Button>
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log('hello');
    };
    return { onClick };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
