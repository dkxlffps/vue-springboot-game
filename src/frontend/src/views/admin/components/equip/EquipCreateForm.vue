<template>
  <div>
    <b-dropdown right :text="type.text">
      <template v-for="(item ,n) in equipTypes">
        <b-dropdown-item :key="'item'+n" @click="setType(item)">{{item.text}}</b-dropdown-item>
        <b-dropdown-divider :key="'split'+n" v-if="equipTypes.length > n + 1"></b-dropdown-divider>
      </template>
    </b-dropdown>
    <equip />
  </div>
</template>
<script>
import { COMMON } from 'Constant/index';

import Equip from './Equip';

export default {
  name: 'EquipCreateForm',
  components: {
    'equip': Equip
  },
  computed: {
    equipTypes() {
      return this.$store.getters.$get_equip_type;
    },
  },
  created() {
    this.$store.dispatch(COMMON.GET_COMMON_CODE, this.$param.equip_type);
  },
  methods: {
    setType(item) {
      this.type.text = item.text;
      this.type.value = item.value;
    }
  },
  data() {
    return {
      type: {
        text: '타입',
        value: '',
      }
    }
  }
}
</script>