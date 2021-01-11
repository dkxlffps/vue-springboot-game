import { ADMIN } from 'Constant/index';

const MENU = [
  {
    tabKey: ADMIN.MENU.FORM.ITEM,
    tabNm: '아이템 관리',
    contents: [
      {
        contentKey: ADMIN.MENU.ITEM.CREATE,
        contentTitle: '아이템 생성',
      },
      {
        contentKey: ADMIN.MENU.ITEM.MODIFY,
        contentTitle: '아이템 수정'
      },
      {
        contentKey: ADMIN.MENU.ITEM.EQUIP_CREATE,
        contentTitle: '장비 생성'
      },
      {
        contentKey: ADMIN.MENU.ITEM.EQUIP_MODIFY,
        contentTitle: '장비 수정'
      },
    ]
  },
  {
    tabKey: ADMIN.MENU.FORM.ACCOUNT,
    tabNm: '계정 관리',
    contents: [
      {
        contentKey: ADMIN.MENU.ACCOUNT.LIST,
        contentTitle: '계정 조회',
      },
      {
        contentKey: ADMIN.MENU.ACCOUNT.MODIFY,
        contentTitle: '계정 수정',
      }
    ]
  }
]

const admin = {
  state: {
    activeTab: {
      tab: '',
      content: '',
      isOpen: true,
    },
  },
  getters: {
    $get_menu_list: () => MENU,
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