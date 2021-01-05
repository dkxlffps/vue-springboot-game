<template>
  <div>
    <b-form-radio-group 
      v-model="commonForm.rank" 
      :options="ranks" buttons>
    </b-form-radio-group>
  </div>
</template>
<script>
export default {
  name: 'commonEquip',
  props: ['ranks'],
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