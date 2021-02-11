<template>
  <div>
    <common-equip-form />
  </div>
</template>
<script>
import CommonEquipForm from './common_equip.vue';

import { ADMIN_ITEM } from 'Constant/index';

import * as UTIL from 'Script/utils';

export default {
  name: 'Equip',
  components: {
    'common-equip-form': CommonEquipForm,
  },
  created() {
    
  },
  methods: {
  },
  data() {
    return {
     
    }
  }
}
</script>