<template>
  <div>
    <common-option :commonOption="setCommonOption" />
  </div>
</template>
<script>
import commonOption from './Common.vue';

import * as UTIL from 'Script/utils';

export default {
  name: 'Equip',
  components: {
    'common-option': commonOption,
  },
  created() {
    
  },
  methods: {
    setCommonOption(models) {
      this.equipOption = UTIL.arrayOptionToStr(models);
    }
  },
  data() {
    return {
      equipOption: '',
    }
  }
}
</script>