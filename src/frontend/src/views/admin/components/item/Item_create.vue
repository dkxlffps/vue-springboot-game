<template>
  <div class="CreateItemWrap">
  </div>
</template>
<script>
import { COMMON } from 'Constant/index';

import { mapGetters } from 'vuex';

// Sub Component

export default {
  name: 'itemCreate',
  components: {
  },
  computed: {
    ...mapGetters({
      equipOptions: '$get_equip_type',
      itemOptions: '$get_item_type',
    }),
  },
  watch: {
    createForm(form) {
      if(form == 'EQUIP' && this.equipOptions.length > 0) return;
      if(form == 'ITEM' && this.itemOptions.length > 0) return;
      let param = {category: form, type: 'TYPE'};
      this.$store.dispatch(COMMON.GET_COMMON_CODE,param);
    }
  },
  created() {
    //param
    let commonOptionParam = {category:'OPTION', type: 'COMMON'};
    let armorOptionParam = {category:'OPTION', type: 'ARMOR'};
    let weaponOptionParam = {category: 'OPTION',type: 'WEAPON'};
    let ranksParam = {category: 'ITEM',type: 'RANK'};
    let partParam = {category: 'EQUIP',type: 'PART'};

    //Request
    this.$store.dispatch(COMMON.GET_COMMON_CODE,commonOptionParam);
    this.$store.dispatch(COMMON.GET_COMMON_CODE,armorOptionParam);
    this.$store.dispatch(COMMON.GET_COMMON_CODE,weaponOptionParam);
    this.$store.dispatch(COMMON.GET_COMMON_CODE,ranksParam);
    this.$store.dispatch(COMMON.GET_COMMON_CODE,partParam);

  },
  data() {
    return {
      createForm: '',
      equipForm: '',
      itemForm: '',
      createOptions: [
        { text: '아이템', value: 'ITEM'},
        { text: '장비', value:'EQUIP'}
      ],
    }
  } 
}
</script>