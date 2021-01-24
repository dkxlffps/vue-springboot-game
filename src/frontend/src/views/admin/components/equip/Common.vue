<template>
  <div>
  </div>
</template>
<script>
import { COMMON } from 'Constant/index';

export default {
  name: 'commonOption',
  computed: {
    commonOptions() {
      return this.$store.getters.$get_common_options;
    }
  },
  created() {
    this.initEvent();
  },
  methods: {
    initEvent() {
      if(this.commonOptions.length < 1) {
        this.$store.dispatch(COMMON.GET_COMMON_CODE, this.$param.option_common);
      }
    }
  }
}
</script>