<template>
  <div class="createEquipForm">
    <div v-if="form == 'NORMAL'">
      <common-equip-form :ranks="ranks" :parts="parts" />
    </div>
    <div v-if="form == 'AWAKE'">
      awake
    </div>
    <div v-if="form == 'SET'">
      set
    </div>
    <div v-if="form == 'ACC'">
      acc
    </div>
  </div>
</template>
<script>
import { COMMON } from 'Constant/index';

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
  created() {

  },
  methods: {

  },
  data() {
    return {}
  }
}
</script>