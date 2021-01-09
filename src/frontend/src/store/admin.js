import { ADMIN } from 'Constant/index';

const admin = {
  state: {
    activeTab: {
      tab: '',
      content: '',
      isOpen: true,
    },
  },
  getters: {
    $get_active_tab: (state) => state.activeTab,
  },
  mutations: {
    [ADMIN.SET_ACTIVE_TAB]: (state, payload) => state.activeTab = payload,
    [ADMIN.SELECTED_TAB]: (state, payload) => state.activeTab.tab = payload,
    [ADMIN.SELECTED_CONTENT]: (state, payload) => state.activeTab.content = payload,
  },
  actions: {
    [ADMIN.SET_ACTIVE_TAB]: function({commit} ,payload) {
      if(typeof payload.isOpen == undefined) payload.isOpen = true;
      if(payload.isLog) {
        console.log('%cSet Active Tab','background-color:#808080;color:#8b00ff')
        console.log(`tab : ${payload.tab}\ncontent: ${payload.content}\nisOpen: ${payload.isOpen}`);
      }
      commit(ADMIN.SET_ACTIVE_TAB,{tab:payload.tab,content:payload.content,isOpen:payload.isOpen});
    }
  },
};

export default admin;