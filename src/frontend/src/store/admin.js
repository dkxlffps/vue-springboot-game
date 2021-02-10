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
      title: '',
      isOpen: true,
      isLink: false
    },
    tabContents: [],
    activeTabIndex: -1,
    linkData: null,
  },
  getters: {
    $get_menu_list: () => MENU,
    $get_active_tab: (state) => state.activeTab,
    $get_tab_contents: (state) => state.tabContents,
    $get_tab_content_index: (state) => state.activeTabIndex,
  },
  mutations: {
    [ADMIN.SET_ACTIVE_TAB]: (state, payload) => state.activeTab = payload,
    [ADMIN.SELECTED_TAB]: (state, payload) => {
      state.activeTab.tab = payload.tabKey;
      state.activeTab.title = payload.tabNm;
    },
    [ADMIN.SELECTED_CONTENT]: (state, payload) => {
      state.activeTab.content = payload.contentKey;
      let index = state.tabContents.findIndex(tab => tab.contentKey == payload.contentKey);
      if(index == -1) {
        state.tabContents.push({
          ...payload,
        });
        state.activeTabIndex = state.tabContents.length -1;
      }
      else {
        state.activeTabIndex = index;
      }
    },
    [ADMIN.SET_ACTIVE_TAB_INDEX]: (state,payload) => {
      if(payload == -1) return; // 홍일 경우
      state.activeTabIndex = payload;
      let selecteTab = state.tabContents[payload];
      state.activeTab = {
        tab: selecteTab.tabKey,
        content: selecteTab.contentKey,
        title: selecteTab.contentTitle,
        isOpen: true,
        isLink: true
      }
    },
    [ADMIN.SET_LINK_DATA]: (state,payload) => state.linkData = payload,
    [ADMIN.DELETE_LINK_DATA]: (state) => state.linkData = null,
    [ADMIN.SET_ISLINK]:(state,payload) => state.activeTab.isLink = payload,
    [ADMIN.DELETE_TAB]: (state,payload) => {
      let index = state.tabContents.findIndex(x => x.contentKey == payload);
      let target;
      if(state.tabContents.length == 1) { // 삭제후 홈만 남을 경우
        state.activeTab = {
          tab: '',
          content: '',
          title: '',
          isOpen: true,
          isLink: false
        };
        state.activeTabIndex = -1;
      }else if(index == state.tabContents.length - 1) {
        target = state.tabContents[index-1];
        state.activeTab = {
          tab: target.tabKey,
          content: target.contentKey,
          title: target.contentTitle,
          isOpen: true,
          isLink: true
        };
        state.activeTabIndex = index - 1;
      }else if(index < state.tabContents.length) {
        target = state.tabContents[index+1];
        state.activeTab = {
          tab: target.tabKey,
          content: target.contentKey,
          title: target.contentTitle,
          isOpen: true,
          isLink: true
        };
        state.activeTabIndex = index;
      }
      state.tabContents.splice(index, 1);
    }
  },
  actions: {
    [ADMIN.SET_ACTIVE_TAB]: function({state, commit} ,payload) {
      if(typeof payload.isOpen == 'undefined') payload.isOpen = true;
      if(payload.isLog) {
        console.log('%cSet Active Tab','background-color:#808080;color:#8b00ff')
        console.log(`tab : ${payload.tab}\ncontent: ${payload.content}\nisOpen: ${payload.isOpen}\nisLink: ${payload.isLink}`);
      }

      delete payload.isLog;
      
      commit(ADMIN.SET_ACTIVE_TAB,payload);
      if(payload.content != ''){
        commit(ADMIN.SELECTED_CONTENT, {contentKey: payload.content, contentTitle: payload.title, tabKey: payload.tab})
      }
    }
  },
};0
export default admin;