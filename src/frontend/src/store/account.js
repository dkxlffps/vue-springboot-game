import { ACCOUNT , COOKIE } from 'Constant/index';
import * as cookie from 'Script/cookie';
import axios from 'axios';

const RootApi = '/api/account';

const account = {
  state: {
    userId: '',
  },
  getters: {
    $user_id: function(state) {
      return state.userId;
    }
  },
  mutations: {
    [ACCOUNT.LOGIN]: (state, payload) => {
      state.userId = payload;
    },
  },
  actions: {
    [ACCOUNT.LOGIN]: function({commit}, payload) {
      let url = RootApi + '/login';
      axios.post(url , payload.data)
        .then(response => {
          if(!response.data){
            alert('회원 정보가 없습니다.');
            return
          }
          if(payload.isCookie)
            cookie.setCookie(COOKIE.USER , response.data, 1);

          commit(ACCOUNT.LOGIN, response.id)
        })
    },
    [ACCOUNT.SIGN_UP]: function({state},payload) {
      let url = RootApi + '/signUp';
      return axios.post(url , payload)
        .then(response => {
          return response || state;
        })
    }
  },
}

export default account;