<template>
  <div class="min-height">
    <b-container fluid>
      <b-row>
        <b-col sm="1">
          <label>장비 타입</label>
        </b-col>
        <b-col sm="1">
          <b-dropdown right :text="type.text">
            <template v-for="(item ,n) in equipTypes">
              <b-dropdown-item :key="'item'+n" @click="setType(item)">{{item.text}}</b-dropdown-item>
              <b-dropdown-divider :key="'split'+n" v-if="equipTypes.length > n + 1"></b-dropdown-divider>
            </template>
          </b-dropdown>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="1">
          <label>장비 등급</label>
        </b-col>
        <b-col sm="1">
          <b-dropdown right :text="rank.text">
            <template v-for="(item ,n) in ranks">
              <b-dropdown-item :key="'item'+n" @click="setRank(item)">{{item.text}}</b-dropdown-item>
              <b-dropdown-divider :key="'split'+n" v-if="ranks.length > n + 1"></b-dropdown-divider>
            </template>
          </b-dropdown>
        </b-col>
      </b-row>
      
      <normal-equip-form v-show="type.value === 'NORMAL'"/>
      
      <div v-show="type.value === 'AWAKE'">AWAKE</div>
      <div v-show="type.value === 'SET'">SET</div>
    </b-container>
  </div>
</template>
<script>
import { COMMON } from 'Constant/index';

import NormalEquipForm from './normal_equip_form.vue';

export default {
  name: 'EquipCreateForm',
  components: {
    'normal-equip-form': NormalEquipForm
  },
  computed: {
    equipTypes() {
      return this.$store.getters.$get_equip_type;
    },
    ranks() {
      return this.$store.getters.$get_item_ranks;
    },
    sampleEquipList() {
      return this.$store.getters.$get_equip_sample_list;
    },
  },
  created() {
    this.$store.dispatch(COMMON.GET_COMMON_CODE, this.$param.equip_type);
    this.$store.dispatch(COMMON.GET_COMMON_CODE, this.$param.item_rank);
  },
  methods: {
    setType(item) {
      this.type.text = item.text;
      this.type.value = item.value;
    },
    setRank(item) {
      this.rank.text = item.text;
      this.rank.value = item.value;                                                                                                                                                 
    },
  },
  data() {
    return {
      type: {
        text: '타입',
        value: '',
      },
      rank: {
        text: '등급',
        value: '',
      }
    }
  }
}
</script>