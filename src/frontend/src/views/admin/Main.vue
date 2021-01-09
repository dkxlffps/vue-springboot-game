<template>
  <div class="adminContainer">
    <side-var />
  </div>
</template>
<script>
import Sidebar from 'View/admin/Sidebar.vue';

export default {
  name: 'AdminMain',
  components: {
    'side-var': Sidebar,
  },
  methods: {
  },
  data() {
    return {
    }
  }
}

import 'Style/admin/admin.css';
</script>