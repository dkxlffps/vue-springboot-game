import { ITEM } from 'Constant/index';
import axios from 'axios';

const RootApi = '/api/item';

const item = {
  state: {
    item: {},
    setItem: []
  },
  getters: {},
  mutations: {},
  actions: {
    [ITEM.CREATE_ITEM]: function({commit} , payload) {
      let url = RootApi + '/createItem';
      axios.post(url , payload);
      commit();
    }
  }
};

export default item;