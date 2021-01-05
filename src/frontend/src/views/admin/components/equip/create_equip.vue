<template>
  <div class="createEquipForm">
    <div v-if="form == 'NORMAL'">
      <common-equip-form />
    </div>
    <div v-if="form == 'AWAKE'">
    </div>
    <div v-if="form == 'SET'">
      
    </div>
    <div v-if="form == 'ACC'">
      
    </div>
  </div>
</template>
<script>
// import { COMMON } from 'Constant/index';

import { mapGetters } from 'vuex';

// Sub Component
import CommonEquipForm from 'View/admin/components/equip/common_equip.vue';


export default {
  name:'createEquip',
  props: ['form'],
  components: {
    'common-equip-form': CommonEquipForm,
  },
  computed: {
    ...mapGetters({
      commonOptions: '$get_common_options',
      armorOptions: '$get_armor_options',
      weaponOptions: '$get_weapon_options',
      ranks: '$get_item_ranks',
      parts: '$get_equip_parts',
    })
  },
  provide() {
    return {
      form: this.form,
      ranks: this.ranks,
      parts: this.parts
    }
  },
  created() {

  },
  methods: {

  },
  data() {
    return {}
  }
}
</script>