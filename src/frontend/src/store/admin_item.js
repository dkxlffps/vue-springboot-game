import { ADMIN_ITEM } from 'Constant/index';
import axios from 'axios';

const RootApi = '/api/item';

const item = {
  state: {
    // equip
    equip_samples: [],

    // item
  },
  getters: {
    // equip
    $get_equip_sample_list: (state) => state.equip_samples,

    //item
  },
  mutations: {
    [ADMIN_ITEM.SET_EQUIP_SAMPLE]: (state, payload) => state.equip_samples = payload,
  },
  actions: {
    
  }
};

export default item;