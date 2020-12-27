<template>
  <div>
    <section v-if="isLogin && !isAdmin">
      <text-box></text-box>
    </section>
    <section v-else-if="!isLogin">
      <login></login>
    </section>
    <section v-if="isAdmin">
      <admin></admin>
    </section>
  </div>
</template>

<script>
import TextBox from 'View/TextBox.vue';
import Login from 'View/Login.vue';
import Admin from 'View/admin/Main.vue';

import { ACCOUNT } from 'Constant/index';

export default {
  name: "Home",
  computed: {
    isLogin() {
      return this.$store.getters.$user_id != '';
    },
    isAdmin() {
      return this.$store.getters.$user_id == '1';
    }
  },
  components: {
    'text-box': TextBox,
    'login': Login,
    'admin': Admin,
  },
  created() {
    this.$store.dispatch(ACCOUNT.COOKIE_CHECK);
  },
};
</script>
