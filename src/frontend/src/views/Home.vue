<template>
  <div>
    <section v-if="isLogin">
      <text-box></text-box>
    </section>
    <section v-else>
      <login></login>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
import TextBox from 'View/TextBox.vue';
import Login from 'View/Login.vue';

export default {
  name: "Home",
  computed: {
    isLogin() {
      return this.$store.getters.$user_id != '';
    }
  },
  components: {
    'text-box': TextBox,
    'login': Login,
  },
  created() {
  }
};
</script>
