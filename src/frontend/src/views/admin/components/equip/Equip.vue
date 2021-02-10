<template>
  <div>
    <common-option :commonForm="setCommonForm" />

    <b-button @click="submit">생성 완료</b-button>
    <b-button @click="viewSample">미리보기</b-button>
  </div>
</template>
<script>
import commonOption from './Common.vue';

import { ADMIN_ITEM } from 'Constant/index';

import * as UTIL from 'Script/utils';

export default {
  name: 'Equip',
  components: {
    'common-option': commonOption,
  },
  created() {
    
  },
  methods: {
    setCommonForm(_data) {
      this.form = _data;
    },
    submit() {
      
    },
    viewSample() {
      if(!this.form) return;

      this.$store.commit(ADMIN_ITEM.SET_EQUIP_SAMPLE , [this.form]);
    }
  },
  data() {
    return {
      form: null,
    }
  }
}
</script>