import { COMMON } from 'Constant/index';
import axios from 'axios';


const RootApi = '/api/common';

const common = {
  state: {
    equipTypes: [],
    itemTypes: [],
  },
  getters: {
    // EQUIP
    $get_equip_type: (state) => state.equipTypes,

    // ITEM
    $get_item_type: (state) => state.itemTypes,
  },
  mutations: {
    // EQUIP
    [COMMON.equipTypes]: (state,payload) => state.equipTypes = payload,
    
    // ITEM
    [COMMON.itemTypes]: (state,payload) => state.itemTypes = payload,
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
        let COMMIT_MUTATIONS;
        
        switch(`${payload.category}|${payload.type}`) {
          // EQUIP
          case 'EQUIP|TYPE':
            COMMIT_MUTATIONS = COMMON.equipTypes;
            break;
          
          // ITEM
          case 'ITEM|TYPE':
            COMMIT_MUTATIONS = COMMON.itemTypes;
            break;
        }

        commit(COMMIT_MUTATIONS,response.data);
        return response.data;
      })
    }
  }
};

export default common;