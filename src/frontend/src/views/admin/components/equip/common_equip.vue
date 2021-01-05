<template>
  <div>
    <b-form-radio-group
      style="margin-top: 10px"
      v-model="commonForm.part"
      :options="parts" buttons>
    </b-form-radio-group>
    <br>
    <b-form-radio-group
      style="margin-top: 10px"
      v-model="commonForm.rank" 
      :options="ranks" buttons>
    </b-form-radio-group>
    <br>

  </div>
</template>
<script>
export default {
  name: 'commonEquip',
  inject: ['form','ranks', 'parts'],
  data() {
    return {
      commonForm: {
        part: '',
        name: '',
        rank: '',
        limit_level: 0,
        desc: '',
        type: '',
        buy_price: 0,
        sell_price: 0,
        equip_option: '',
        max_upgrade: 0,
        upgrade_option: '',

      }
    }
  }
}
</script>