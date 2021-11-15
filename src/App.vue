<template>
  <div id="home">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  components: {
    Header
  }
};
</script>
<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #998235;
}
body {
  background: #0b2429;
  margin: 0;
  padding: 0;
}
</style>
