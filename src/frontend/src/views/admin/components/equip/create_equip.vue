<template>
  <div class="createEquipForm">
    <div v-if="form == 'NORMAL'">
      normal
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

export default {
  name:'createEquip',
  props: ['form'],
  computed: {
    ...mapGetters({
      commonOptions: '$get_common_options',
      armorOptions: '$get_armor_options',
      weaponOptions: '$get_weapon_options',
    })
  }
}
</script>