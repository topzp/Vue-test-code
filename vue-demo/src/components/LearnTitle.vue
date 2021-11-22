<template>
  <div class="hello">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "LearnTitle",
  props: {
    title: String
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.hello {
  text-align: center;
}
</style>
