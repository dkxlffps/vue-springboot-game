<template>
  <div id="app">
    <router-view />
    <toast-controller />
  </div>
</template>
<script>
import Toaster from 'Shared/Toaster.vue';

export default {
  name: 'App',
  components: {
    'toast-controller': Toaster,
  }
}
import 'Style/common.css';
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
