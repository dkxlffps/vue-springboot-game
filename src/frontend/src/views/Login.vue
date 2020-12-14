<template>
  <div class="loginWrap">
    <div class="inputWrap">
      <b-form-input v-if="createForm" placeholder="이름" v-model="form.name" />
      <b-form-input placeholder="아이디" v-model="form.account_id" />
      <b-form-input type="password" placeholder="비밀번호" v-model="form.account_pw" />
      <b-form-input v-if="createForm" type="password" placeholder="비밀번호 확인" v-model="form.passwordConfirm" />
    </div>
    <div class="buttonWrap">
      <b-form-checkbox v-if="!createForm" v-model="autoLogin">자동로그인</b-form-checkbox>
      <b-button @click="Action">{{createForm ? '계정생성': '접속'}}</b-button>
      <b-button @click="formChange">{{createForm ? '취소':'계정생성'}}</b-button>
    </div>
  </div>
</template>
<script>
import { emptyObject } from 'Script/utils';

import { ACCOUNT } from 'Constant/index';

export default {
  name: 'Login',
  methods: {
    formChange() {
      this.createForm = !this.createForm;
      this.form = {
        name:'',
        account_id:'',
        account_pw:'',
        passwordConfirm:''
      }
    },
    Action() {
      if(!this.validation()) return;

      if(!this.createForm)
        this.$store.dispatch(ACCOUNT.LOGIN, {data: this.form, isCookie: this.autoLogin});
      if(this.createForm)
        this.$store.dispatch(ACCOUNT.SIGN_UP , this.form);
    },
    validation() {
      let _data = this.form;
      if(!this.createForm) _data = {id: this.form.account_id , password: this.form.account_pw};
      
      let response = emptyObject(_data, true);
      if(!response.state) {
        alert(`${response.key} 값이 없습니다.`);
        return false;
      }

      if(_data.account_pw != _data.passwordConfirm){
        alert('비밀번호값이 다릅니다.');
        return false;
      }
      return true;
    }
  },
  data() {
    return {
      createForm: false,
      autoLogin: false,
      form: {
        name:'',
        account_id:'',
        account_pw:'',
        passwordConfirm:''
      }
    }
  }
}
</script>