<template>
  <div>
    <!-- Common Field -->
    <b-container fluid>
      <b-row>
        <b-col sm="1">
          <label>아이템 명</label>
        </b-col>
        <b-col sm="3">
          <b-form-input size="sm" v-model="item_name" />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="1">
          <label>아이템 설명</label>
        </b-col>
        <b-col sm="4">
          <b-form-textarea
            placeholder="설명이 없을시 공백으로 표시됩니다."
            rows="3"
            no-resize
            v-model="item_desc"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="1">
          <label>장착제한 레벨</label>  
        </b-col>
        <b-col sm="1">
          <b-form-input type="number" v-model="equip_limit_level" />
        </b-col>
      </b-row>


      <b-row>
        <b-col sm="1">
          <label>상점 구매가</label>
        </b-col>
        <b-col sm="2">
          <b-form-input size="sm" v-model="buy_price" type="number" />
        </b-col>
        <b-col sm="1">
          <label>상점 판매가</label>
        </b-col>
        <b-col sm="2">
          <b-form-input size="sm" v-model="sell_price" type="number" />
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="1">
          <label>최대 강화 횟수</label>
        </b-col>
        <b-col sm="1">
          <b-form-input size="sm" type="number" v-model="max_upgrade" />
        </b-col>
        <b-col sm="3">
          <b-button @click="upgradeOptionCalculation">강화 확률 및 추가옵션 계산</b-button>
        </b-col>
      </b-row>

    </b-container>
    <!-- Common Field -->

    <!-- Common Options -->
    <b-container fluid v-if="models.length > 0">
      <b-row class="my-1" v-for="n in Math.ceil(models.length / 2)" :key="'model'+n">
        <!-- left -->
        <b-col sm="1">
          <label for="input-small">{{models[(n-1)*2].text}}</label>
        </b-col>
        <b-col sm="1">
          <b-form-input size="sm" v-model="models[(n-1)*2].value"></b-form-input>
        </b-col>
        <!-- right -->
        <template v-if="models.length -1 >= (n-1)*2">
          <b-col sm="1">
            <label for="input-small">{{models[((n-1)*2)+1].text}}</label>
          </b-col>
          <b-col sm="1">
            <b-form-input size="sm" v-model="models[((n-1)*2)+1].value"></b-form-input>
          </b-col>
        </template>
      </b-row>
    </b-container>

    <b-container>
      <b-row>
        <b-col sm="3">
          <b-button @click="submit">생성 완료</b-button>
          <b-button @click="viewSample">미리보기</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { COMMON } from 'Constant/index';

export default {
  name: 'commonOption',
  computed: {
    commonOptions() {
      return this.$store.getters.$get_common_options;
    }
  },
  watch: {
    commonOptions(_this) {
      if(this.$data.models.length > 0) return;
      _this.map(x => {
        this.models.push({
          key: x.value,
          text: x.text,
          value: '0', // default Value
        });
      })
    },
    max_upgrade(n,o) {
    }
  },
  created() {
    this.initEvent();
  },
  methods: {
    initEvent() {
      this.$store.dispatch(COMMON.GET_COMMON_CODE, this.$param.option_common);
    },
    submit() {
      
    },
    viewSample() {
      if(!this.form) return;

      this.$store.commit(ADMIN_ITEM.SET_EQUIP_SAMPLE , [this.form]);
    },
    upgradeOptionCalculation() {
      this.upgradeForms
    }
  },
  data() {
    return {
      item_name: '',
      item_desc: '',
      equip_limit_level: 0,
      sell_price: 0,
      buy_price: 0,
      
      upgradeForms: [],

      max_upgrade: 5, //default
      models: [],
    }
  }
}
</script>