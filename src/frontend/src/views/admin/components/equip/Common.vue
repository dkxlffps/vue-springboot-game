<template>
  <div>
    <!-- Common Field -->
    <b-container fluid>
      <b-row>
        <b-col sm="2">
          <label>아이템 명</label>
        </b-col>
        <b-col sm="2">
          <b-form-input id="input-default" size="sm" v-model="item_name" />
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="2">
          <label>아이템 명</label>
        </b-col>
        <b-col sm="2">
          <b-form-input id="input-default" size="sm" v-model="item_name" />
        </b-col>
      </b-row>
    </b-container>
    <!-- Common Field -->

    <!-- Common Options -->
    <b-container fluid v-if="models.length > 0">
      <b-row class="my-1" v-for="n in Math.ceil(models.length / 2)" :key="'model'+n">
        <!-- left -->
        <b-col sm="2">
          <label for="input-small">{{models[(n-1)*2].text}}</label>
        </b-col>
        <b-col sm="1">
          <b-form-input id="input-default" size="sm" v-model="models[(n-1)*2].value"></b-form-input>
        </b-col>
        <!-- right -->
        <template v-if="models.length -1 >= (n-1)*2">
          <b-col sm="2">
            <label for="input-small">{{models[((n-1)*2)+1].text}}</label>
          </b-col>
          <b-col sm="1">
            <b-form-input id="input-default" size="sm" v-model="models[((n-1)*2)+1].value"></b-form-input>
          </b-col>
        </template>
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
      if(!_this || _this.length === 0 || this.$data.models.length > 0) return;
      _this.map(x => {
        this.models.push({
          key: x.value,
          text: x.text,
          value: '0', // default Value
        });
      })
    },
    models() {
      this.$emit('commonOption',this.models);
    }
  },
  created() {
    this.initEvent();
  },
  methods: {
    initEvent() {
      if(this.commonOptions.length < 1) {
        this.$store.dispatch(COMMON.GET_COMMON_CODE, this.$param.option_common);
      }
    }
  },
  data() {
    return {
      item_name: '',
      sell_price: '',
      buy_price: '',
      
      models: [],
    }
  }
}
</script>