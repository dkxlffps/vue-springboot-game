<template>
  <div class="CreateItemWrap">
    <div class="createFormSelect">
      <b-form-group>
        <b-form-radio-group
          id="btn-radios-1"
          v-model="createForm"
          :options="createOptions"
          buttons
          name="radios-btn-default"
        ></b-form-radio-group>
      </b-form-group>
    </div>
    <div v-if="createForm == 'ITEM'">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="itemForm"
        :options="itemOptions"
        buttons
        name="radios-btn-default"
      ></b-form-radio-group>
    </div>
    <div v-if="createForm == 'EQUIP'">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="equipForm"
        :options="equipOptions"
        buttons
        name="radios-btn-default"
      ></b-form-radio-group>
      <equip-form :form="equipForm"></equip-form>
    </div>
  </div>
</template>
<script>
import { COMMON } from 'Constant/index';

import { mapGetters } from 'vuex';

// Sub Component
import CreateEquip from 'View/admin/components/equip/create_equip.vue';

export default {
  name: 'itemCreate',
  components: {
    'equip-form':CreateEquip,
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

    //Request
    this.$store.dispatch(COMMON.GET_COMMON_CODE,commonOptionParam);
    this.$store.dispatch(COMMON.GET_COMMON_CODE,armorOptionParam);
    this.$store.dispatch(COMMON>GET_COMMON_CODE,weaponOptionParam);

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