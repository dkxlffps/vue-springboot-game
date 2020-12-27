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
    <div v-if="createForm == 'item'">
      item
    </div>
    <div v-if="createForm == 'equip'">
      equip
    </div>
    <div v-if="createForm == 'equip_set'">
      equip_set
    </div>
  </div>
</template>
<script>
export default {
  name: 'itemCreate',
  data() {
    return {
      createOptions: [
        { text: '(세트)장비', value: 'equip_set'},
        { text: '장비', value:'equip'},
        { text: '일반', value:'item'}
      ],
      createForm: '',
    }
  }
}
</script>