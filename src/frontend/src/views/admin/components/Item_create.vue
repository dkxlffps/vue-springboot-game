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
        :options="itemOptions"
        buttons
        name="radios-btn-default"
      ></b-form-radio-group>
    </div>
    <div v-if="createForm == 'EQUIP'">
      <b-form-radio-group
        id="btn-radios-1"
        :options="equipOptions"
        buttons
        name="radios-btn-default"
      ></b-form-radio-group>
    </div>
  </div>
</template>
<script>
import { COMMON } from 'Constant/index';

export default {
  name: 'itemCreate',
  watch: {
    async createForm(form) {
      let param;
      switch(form) {
        case 'EQUIP':
          param = { category: form, type: 'TYPE' }
          this.equipOptions = await this.$store.dispatch(COMMON.GET_COMMON_CODE,param);
          break;
        case 'ITEM' :
          param = {category : form , type: 'USED'};
          this.itemOptions = await this.$store.dispatch(COMMON.GET_COMMON_CODE,param);
          break;
      }
      
    }
  },
  created() {
    
  },
  data() {
    return {
      createForm: '',
      createOptions: [
        { text: '아이템', value: 'ITEM'},
        { text: '장비', value:'EQUIP'}
      ],
      equipOptions: [],
      itemOptions: []
    }
  }
}
</script>