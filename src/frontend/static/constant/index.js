export const ACCOUNT = {
  SIGN_UP: 'account/signUp',
  LOGIN: 'account/login',
  COOKIE_CHECK: 'account/cookieCheck'
}

export const ITEM = {
  CREATE_ITEM: 'item/createItem',
  CREATE_SET_ITEM: 'item/createSetItem'
}

export const COMMON = {
  GET_COMMON_CODE: 'common/getCommonCode',
  equipTypes: 'common/equipTypes',
  itemTypes: 'common/itemTypes',
  commonOptions: 'common/commonOptions',
  armorOptions: 'common/armorOptions',
  weaponOptions: 'common/weaponOptions',
  ranks: 'common/ranks',
  parts: 'common/parts',
}

export const COOKIE = {
  USER: 'cookie/user',
}

export const SEPERATER = {
  OPTION: '|',
  KEY_VALUE: ':',
  TOAST_DESTINATION: '^'
}

export const ADMIN = {
  SET_ACTIVE_TAB: 'admin/setActiveTab',
  SELECTED_TAB: 'admin/selectedTab',
  SELECTED_CONTENT: 'admin/selectedContent',
  SET_ACTIVE_TAB_INDEX: 'admin/setActiveTabIndex',
  SET_LINK_DATA: 'admin/setLinkData',
  DELETE_LINK_DATA: 'admin/deleteLinkData',
  SET_ISLINK: 'admin/setIsLink',
  DELETE_TAB: 'admin/deleteTab',
  MENU: {
    FORM: {
      ITEM: 'ITEM',
      ACCOUNT: 'ACCOUNT'
    },
    ITEM: {
      CREATE: 'ITEM|CREATE',
      MODIFY: 'ITEM|MODIFY',
      EQUIP_CREATE: 'ITEM|EQUIP_CREATE',
      EQUIP_MODIFY: 'ITEM|EQUIP_MODIFY'
    },
    ACCOUNT: {
      LIST: 'ACCOUNT|LIST',
      MODIFY: 'ACCOUNT|MODIFY'
    }
  }
};