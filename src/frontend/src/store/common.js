import { COMMON } from 'Constant/index';
import axios from 'axios';


const RootApi = '/api/common';

const common = {
  state: {
    commonCode: [],
  },
  getters: {
    $get_common_code: (state) => {
      return state.commonCode;
    }
  },
  mutations: {
    [COMMON.GET_COMMON_CODE]: (state, payload) => {
      state.commonCode = payload;
    }
  },
  actions: {
    [COMMON.GET_COMMON_CODE]: function({commit}, payload) {
      let url = RootApi + `/code?category=${payload.category}&type=${payload.type}`;
      return axios.get(url , payload).then(response => {
        for(const obj of response.data) {
          obj.text = obj.common_NM;
          obj.value = obj.common_VALUE;
          delete obj.common_NM;
          delete obj.common_VALUE;
        }
        commit(COMMON.GET_COMMON_CODE ,response.data);
        return response.data;
      })
    }
  }
};

export default common;