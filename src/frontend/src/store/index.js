import Vue from "vue";
import Vuex from "vuex";

import account from 'Store/account';
import item from 'Store/admin_item';
import common from 'Store/common';
import character from 'Store/character';
import admin from 'Store/admin';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        account: account,
        admin_item: admin_item,
        common: common,
        character: character,
        admin: admin,
    }
});
