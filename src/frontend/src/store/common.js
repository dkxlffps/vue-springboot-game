import { COMMON } from 'Constant/index';
import axios from 'axios';


const RootApi = '/api/common';

const common = {
  state: {
    equipTypes: [],
    itemTypes: [],
    commonOptions: [],
    armorOptions: [],
    weaponOptions: [],
    ranks: [],
    parts: [],
  },
  getters: {
    // EQUIP
    $get_equip_type: (state) => state.equipTypes,
    $get_equip_parts: (state) => state.parts,
    // ITEM
    $get_item_type: (state) => state.itemTypes,
    $get_item_ranks: (state) => state.ranks,
    // OPTIONS
    $get_common_options: (state) => state.commonOptions,
    $get_armor_options: (state) => state.armorOptions,
    $get_weapon_options: (state) => state.weaponOptions,
  },
  mutations: {
    // EQUIP
    [COMMON.equipTypes]: (state,payload) => state.equipTypes = payload,
    [COMMON.parts]: (state,payload) => state.parts = payload,
    
    // ITEM
    [COMMON.itemTypes]: (state,payload) => state.itemTypes = payload,
    [COMMON.ranks]: (state,payload) => state.ranks = payload,
    // OPTIONS
    [COMMON.commonOptions]: (state,payload) => state.commonOptions = payload,
    [COMMON.armorOptions]: (state,payload) => state.armorOptions = payload,
    [COMMON.weaponOptions]: (state,payload) => state.weaponOptions = payload,
  },
  actions: {
    [COMMON.GET_COMMON_CODE]: function({commit}, payload) {
      let url = RootApi + `/code?category=${payload.category}&type=${payload.type}`;
      return axios.get(url , payload).then(response => {
        if(payload.isKeyChange) {
          for(const obj of response.data) {
            obj.text = obj.common_nm;
            obj.value = obj.common_value;
            delete obj.common_nm;
            delete obj.common_value;
          }
        }
        let COMMIT_MUTATIONS;
        
        switch(`${payload.category}|${payload.type}`) {
          // EQUIP
          case 'EQUIP|TYPE':
            COMMIT_MUTATIONS = COMMON.equipTypes;
            break;
          case 'EQUIP|PARTS':
            COMMIT_MUTATIONS = COMMON.parts;
            break;
          
          // ITEM
          case 'ITEM|TYPE':
            COMMIT_MUTATIONS = COMMON.itemTypes;
            break;
          case 'ITEM|RANK':
            COMMIT_MUTATIONS = COMMON.ranks;
            break;
          
            // OPTION
          case 'OPTION|COMMON':
            COMMIT_MUTATIONS = COMMON.commonOptions;
            break;
          case 'OPTION|WEAPON':
            COMMIT_MUTATIONS = COMMON.weaponOptions;
            break;
          case 'OPTION|ARMOR':
            COMMIT_MUTATIONS = COMMON.armorOptions;
            break;
        }

        commit(COMMIT_MUTATIONS,response.data);
        return response.data;
      })
    }
  }
};

export default common;