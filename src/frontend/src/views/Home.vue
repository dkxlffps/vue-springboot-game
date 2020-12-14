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
import TextBox from 'View/TextBox.vue';
import Login from 'View/Login.vue';

import { ACCOUNT } from 'Constant/index';

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
    this.$store.dispatch(ACCOUNT.COOKIE_CHECK);
  }
};
</script>
