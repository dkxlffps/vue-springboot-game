<template>
<div class="adminContainer">
  <div class="adminLeftMenu">
    <b-button-group vertical>
      <b-button @click="setView('createItem')">아이템 생성</b-button>
    </b-button-group>
  </div>
  <div class="adminWrap">
    <item-create v-if="view == 'createItem'"></item-create>
  </div>
</div>
</template>
<script>
import Item_create from 'View/admin/components/Item_create.vue';


export default {
  name: 'AdminMain',
  components: {
    'item-create': Item_create,
  },
  methods: {
    setView(name) {
      this.view = name;
    },
  },
  data() {
    return {
      view: '',
    }
  }
}

import 'Style/admin/admin.css';
</script>